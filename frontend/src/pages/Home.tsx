import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe2, BarChart3, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pt-20 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Turning Emissions Into Opportunity
          </motion.h1>
          <p className="text-lg md:text-xl mb-8">Unlock The Potential Of Your Carbon Pipeline.</p>
          <div className="flex justify-center gap-4">
            <Button>Explore Credits</Button>
            <Button variant="outline">List Your Project</Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-6">
          <Card><CardContent className="p-6"><BarChart3 className="w-10 h-10 mx-auto mb-3 text-emerald-500"/><h3 className="font-bold">Transparency</h3><p>Blockchain traceability for every transaction.</p></CardContent></Card>
          <Card><CardContent className="p-6"><FileText className="w-10 h-10 mx-auto mb-3 text-emerald-500"/><h3 className="font-bold">Credibility</h3><p>Backed by global verifiers like SGS and TÜV SÜD.</p></CardContent></Card>
          <Card><CardContent className="p-6"><Globe2 className="w-10 h-10 mx-auto mb-3 text-emerald-500"/><h3 className="font-bold">Efficiency</h3><p>Buy and sell credits with live market pricing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><MapPin className="w-10 h-10 mx-auto mb-3 text-emerald-500"/><h3 className="font-bold">Impact</h3><p>Support CCUS projects around the globe.</p></CardContent></Card>
        </div>
      </section>
    </div>
  )
}
