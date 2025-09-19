import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Reports() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Reports & Compliance</h1>
      <p className="text-gray-600 mb-6">MRV integration, LCA exports, and third-party verification, ready for audit.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card><CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-lg">MRV Integration</h3>
          <p className="text-sm text-gray-600">Connect SCADA/DCS/historian data via secure API. Auto-ingest capture streams.</p>
          <Button className="mt-2">View MRV Docs</Button>
        </CardContent></Card>

        <Card><CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-lg">LCA Reporting</h3>
          <p className="text-sm text-gray-600">Generate cradle-to-gate PDFs/CSV with versioned methodologies.</p>
          <Button variant="outline" className="mt-2">Download Sample</Button>
        </CardContent></Card>

        <Card><CardContent className="p-6 space-y-2">
          <h3 className="font-semibold text-lg">Verification Registry</h3>
          <p className="text-sm text-gray-600">Attach attestations (SGS, DNV, TÜV SÜD, Bureau Veritas) per batch.</p>
          <Button variant="outline" className="mt-2">Browse Attestations</Button>
        </CardContent></Card>
      </div>
    </div>
  )
}
