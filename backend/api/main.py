# api/main.py
from fastapi import FastAPI, UploadFile, File
from scripts.extract_text import extract_text_from_file

app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    extracted_text = extract_text_from_file(file.filename, contents)
    return {"text": extracted_text}