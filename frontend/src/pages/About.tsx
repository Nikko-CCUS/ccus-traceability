import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">About C-Hexa</h1>
      <p className="text-gray-600 mb-6">We broker high-integrity CCUS carbon credits with full traceability and auditability.</p>
      <Card><CardContent className="p-6 space-y-3">
        <div><span className="font-semibold">Mission:</span> Unlock the potential of your carbon pipeline.</div>
        <div><span className="font-semibold">Approach:</span> Combine MRV-grade data with marketplace liquidity.</div>
        <div><span className="font-semibold">Team:</span> CCUS engineers, market makers, and climate tech operators.</div>
      </CardContent></Card>
    </div>
  )
}
