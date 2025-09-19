import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Funding() {
  const [capture, setCapture] = useState(1000) // tCO2e/yr
  const [price, setPrice] = useState(45)      // $/t
  const revenue = capture * price

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Funding & Incentives</h1>
      <p className="text-gray-600 mb-6">Estimate savings from tax credits, grants, and carbon offtakes.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card><CardContent className="p-6">
          <div className="text-sm text-gray-500 mb-2">Incentive Explorer</div>
          <div className="text-3xl font-bold">Up to 30%+</div>
          <div className="text-sm text-gray-600">Illustrative capex coverage via regional programs.</div>
        </CardContent></Card>

        <Card><CardContent className="p-6">
          <div className="text-sm text-gray-500 mb-2">Credit Revenue Model</div>
          <div className="text-3xl font-bold">$28–$220</div>
          <div className="text-sm text-gray-600">Typical ranges per tCO₂e by technology & vintage (demo).</div>
        </CardContent></Card>

        <Card><CardContent className="p-6">
          <div className="text-sm text-gray-500 mb-2">Payback Estimator</div>
          <div className="text-3xl font-bold">2.8–6.5 yrs</div>
          <div className="text-sm text-gray-600">Illustrative based on price bands & capture rate.</div>
        </CardContent></Card>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6 space-y-4">
            <div className="font-medium">Simple Revenue Estimator</div>
            <label className="block text-sm">Capture (tCO₂e/yr)</label>
            <input className="border rounded p-2 w-full" type="number" value={capture} onChange={e=>setCapture(+e.target.value)}/>
            <label className="block text-sm">Credit Price ($/t)</label>
            <input className="border rounded p-2 w-full" type="number" value={price} onChange={e=>setPrice(+e.target.value)}/>
            <div className="text-lg">Estimated Annual Revenue: <span className="font-bold">${revenue.toLocaleString()}</span></div>
            <Button>Download Pro Forma</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="font-medium mb-2">Talk to an Incentives Specialist</div>
            <Button variant="outline">Book a Call</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
