import { Link, NavLink, Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import Marketplace from "@/pages/Marketplace"
import Reports from "@/pages/Reports"
import Funding from "@/pages/Funding"
import Technology from "@/pages/Technology"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium ${isActive ? "text-emerald-600" : "text-gray-700 hover:text-gray-900"}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="font-bold text-xl">C-Hexa</Link>
          <nav className="hidden md:flex gap-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/technology">Technology</NavItem>
            <NavItem to="/marketplace">Marketplace</NavItem>
            <NavItem to="/reports">Reports</NavItem>
            <NavItem to="/funding">Funding</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="text-white font-bold mb-4">C-Hexa</h4>
            <p className="text-sm">Unlock The Potential Of Your Carbon Pipeline.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/funding">Funding</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Stay Connected</h4>
            <input type="email" placeholder="Your email" className="w-full p-2 rounded mb-2" />
            {/* You can swap in your Button here if you prefer */}
            <button className="w-full bg-emerald-600 text-white rounded p-2">Subscribe</button>
          </div>
        </div>
        <div className="text-center text-sm mt-8">© C-Hexa 2025 | Privacy | Terms</div>
      </footer>
    </div>
  )
}
