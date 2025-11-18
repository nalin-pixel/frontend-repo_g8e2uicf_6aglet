import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0b1220] selection:bg-[#1e73be]/30 selection:text-white">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content: leave space equal to collapsed rail width on desktop */}
      <main className="lg:pl-[88px]">
        <Hero />
        <Sections />
      </main>
    </div>
  )
}

export default App
