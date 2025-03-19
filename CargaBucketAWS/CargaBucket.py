# from dotenv import load_dotenv
import boto3
import os

# load_dotenv()

def upload_file(client):
    filename = "file.jpg"
    bucket_name = "coderfytest2"
    key = "media/file.jpg"
    client.upload_file(filename, bucket_name, key, )
    print('Archivo cargado!')

def download_file(client):
    filename = "fileDescargado.jpg"
    bucket_name = "coderfytest2"
    key = "media/file.jpg"
    with open(filename, 'wb') as data:
        client.download_fileobj(bucket_name, key, data)
    print("Archivo descargado !")

if __name__=="__main__":
    client = boto3.client('s3',
        aws_access_key_id=os.environ.get['AAKIAZ5TC42ATJBQRR4UV'],
        aws_secret_access_key=os.environ.get['AkOn263L8Yac3Hj5xn1myx+gVtpgxS/s5DfTxAsNr'],
    )

    upload_file(client)
    # download_file(client)