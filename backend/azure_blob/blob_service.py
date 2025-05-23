from azure.storage.blob import BlobServiceClient, ContentSettings
from .config import AZURE_STORAGE_CONNECTION_STRING, AZURE_STORAGE_CONTAINER


class AzureBlobService:
    def __init__(self):
        self.client = BlobServiceClient.from_connection_string(
            AZURE_STORAGE_CONNECTION_STRING)
        self.container = self.client.get_container_client(
            AZURE_STORAGE_CONTAINER)

    def upload_blob(self, blob_name, data, content_type="application/pdf"):
        self.container.upload_blob(
            name=blob_name,
            data=data,
            overwrite=True,
            content_settings=ContentSettings(
                content_type=content_type,
                content_disposition="inline"
            )
        )

    def download_blob(self, blob_name):
        blob_client = self.container.get_blob_client(blob_name)
        downloader = blob_client.download_blob()
        return downloader.readall()

    def list_blobs(self, prefix=None):
        return [blob.name for blob in self.container.list_blobs(name_starts_with=prefix)]

    def delete_blob(self, blob_name):
        self.container.delete_blob(blob_name)
