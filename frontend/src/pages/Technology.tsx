import { Card, CardContent } from "@/components/ui/card"

export default function Technology() {
  const stages = [
    { title: "Capture", desc: "Post-combustion, pre-combustion, oxy-fuel, DAC." },
    { title: "Compression", desc: "Dehydration, impurities removal, pipeline-grade CO₂." },
    { title: "Transport", desc: "Pipeline routing, monitoring, pressure/flow telemetry." },
    { title: "Utilization/Storage", desc: "EOR, mineralization, concrete curing, saline formations." },
    { title: "MRV", desc: "Measurement, Reporting & Verification with audit trails." },
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Technology</h1>
      <p className="text-gray-600 mb-6">How C-Hexa supports your carbon pipeline end-to-end.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {stages.map((s, i) => (
          <Card key={i}><CardContent className="p-6"><div className="font-semibold">{s.title}</div><div className="text-sm text-gray-600">{s.desc}</div></CardContent></Card>
        ))}
      </div>
    </div>
  )
}
