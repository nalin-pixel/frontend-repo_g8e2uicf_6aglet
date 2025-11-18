import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-600/30 selection:text-white">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content shifted on desktop to account for sidebar width */}
      <main className="lg:pl-[280px]">
        <Hero />
        <Sections />
      </main>
    </div>
  )
}

export default App
