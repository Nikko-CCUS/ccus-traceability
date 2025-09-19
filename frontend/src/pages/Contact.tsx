import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-600 mb-6">Tell us about your project.</p>
      <Card><CardContent className="p-6 space-y-3">
        <input className="border rounded p-2 w-full" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="border rounded p-2 w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <textarea className="border rounded p-2 w-full" placeholder="Message" rows={5} value={msg} onChange={e=>setMsg(e.target.value)} />
        <Button onClick={()=>setSent(true)}>Send</Button>
        {sent && <div className="text-emerald-600 text-sm">Thanks! We’ll get back to you.</div>}
      </CardContent></Card>
    </div>
  )
}
