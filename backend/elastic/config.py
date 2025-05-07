import os
from elasticsearch import Elasticsearch

# Configuración y autenticación de ElasticSearch centralizada
def get_es_client() -> Elasticsearch:
    url = os.getenv("ELASTICSEARCH_URL", "http://localhost:9200")
    return Elasticsearch(url)