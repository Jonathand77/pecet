# api/main.py
from fastapi import FastAPI, UploadFile, File, HTTPException
import uuid
import os
from dotenv import load_dotenv

from scripts.extract_text import extract_text_from_file
from scripts.generate_embedding import generate_embedding
from scripts.index_to_elastic import index_document, get_document_by_id
from services.search import search as es_search
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from models.search_request import SearchRequest


# Cargar variables de entorno
load_dotenv()


app = FastAPI()

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        # Extracción de texto
        text = extract_text_from_file(file.filename, contents)
        # Generación de embedding
        embedding = generate_embedding(text)
        # Indexado en ElasticSearch
        doc_id = str(uuid.uuid4())
        metadata = {"filename": file.filename}
        index_document(doc_id, text, embedding, metadata)
        return {"id": doc_id, "text": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/search")
async def search_documents(request: SearchRequest):
    try:
        embedding = generate_embedding(request.query)
        results = es_search(embedding)
        return {"results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/preview/{doc_id}")
async def preview_document(doc_id: str):
    try:
        res = get_document_by_id(doc_id)
        source = res.get("_source", {})
        return {"id": doc_id, "text": source.get("text"), "metadata": source.get("metadata")}
    except Exception:
        raise HTTPException(status_code=404, detail="Documento no encontrado")