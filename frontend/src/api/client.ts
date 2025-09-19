const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
  return res.json()
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`)
  return res.json()
}

export const api = {
  listBatches: () => get("/batches"),
  addBatch: (batch: { batch_id: number; status: string; carbon_credits: number }) =>
    post("/batches", batch),
  getTraceability: (batchId: number) => get(`/traceability/${batchId}`),
}
