import firebase_admin
import csv
from firebase_admin import credentials, firestore



cred = credentials.Certificate("cganon.json")
firebase_admin.initialize_app(cred,{
    "projectId":"team4-5632d",
})

print("hello")


db = firestore.client()

fr = db.collection("flights")

doc_ref = fr.document("id")

with open('DummyData.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)





docs = fr.stream()

reader = csv_reader()

