# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CCUS Traceability API")

# Allow the front-end to call this API in the browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # (Optional) later, restrict to your front-end domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy in-memory database
batches = [
    {"batch_id": 1, "status": "captured", "carbon_credits": 100, "digital_passport": "CP-1-2025"},
    {"batch_id": 2, "status": "processed", "carbon_credits": 200, "digital_passport": "CP-2-2025"},
    {"batch_id": 3, "status": "verified", "carbon_credits": 150, "digital_passport": "CP-3-2025"}
]

class Batch(BaseModel):
    batch_id: int
    status: str
    carbon_credits: int

@app.get("/")
def read_root():
    return {"message": "CCUS Traceability Backend Running"}

@app.get("/batches")
def list_batches():
    return batches

@app.get("/traceability/{batch_id}")
def get_trace(batch_id: int):
    batch = next((b for b in batches if b["batch_id"] == batch_id), None)
    if batch:
        return batch
    raise HTTPException(status_code=404, detail="Batch not found")

@app.post("/batches")
def add_batch(batch: Batch):
    if any(b["batch_id"] == batch.batch_id for b in batches):
        raise HTTPException(status_code=400, detail="Batch ID already exists")
    new_batch = {
        "batch_id": batch.batch_id,
        "status": batch.status,
        "carbon_credits": batch.carbon_credits,
        "digital_passport": f"CP-{batch.batch_id}-2025"
    }
    batches.append(new_batch)
    return new_batch
