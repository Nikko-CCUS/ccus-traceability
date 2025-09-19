import { useEffect, useState } from "react"
import { api } from "@/api/client"
import { Batch } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Marketplace() {
  const [rows, setRows] = useState<Batch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    api.listBatches()
      .then((data) => setRows(data as Batch[]))
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Marketplace</h1>
        <p className="text-gray-600">Live preview of verified and pending credit batches (from FastAPI).</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3">Batch ID</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Credits</th>
                  <th className="px-4 py-3">Passport</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr><td className="px-4 py-3" colSpan={5}>Loading…</td></tr>
                )}
                {error && !loading && (
                  <tr><td className="px-4 py-3 text-red-600" colSpan={5}>{error}</td></tr>
                )}
                {!loading && !error && rows.map((b) => (
                  <tr key={b.batch_id} className="border-t">
                    <td className="px-4 py-3 font-medium">#{b.batch_id}</td>
                    <td className="px-4 py-3 capitalize">{b.status}</td>
                    <td className="px-4 py-3">{b.carbon_credits.toLocaleString()} tCO₂e</td>
                    <td className="px-4 py-3">{b.digital_passport}</td>
                    <td className="px-4 py-3"><Button className="h-8 px-3">View</Button></td>
                  </tr>
                ))}
                {!loading && !error && rows.length === 0 && (
                  <tr><td className="px-4 py-3 text-gray-500" colSpan={5}>No rows</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Demo: quick-add a batch (posts to FastAPI) */}
      <div className="mt-6">
        <Button
          onClick={async () => {
            const id = Math.floor(Math.random() * 10000) + 4
            await api.addBatch({ batch_id: id, status: "verified", carbon_credits: 123 })
            const next = await api.listBatches()
            setRows(next as Batch[])
          }}
        >
          Add Demo Batch
        </Button>
      </div>
    </div>
  )
}
