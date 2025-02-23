from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://gappii.com", "http://localhost:3000", "http://127.0.0.1"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResponseMessage(BaseModel):
    message: str
    

@app.get("/api/test/python")
def hello_world():
    print("Hello World")
    return {"message": "Hello World"}
