import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  const [open, setOpen] = useState(false)

  // Ensure light theme is default on initial mount (in case of SSR hydration)
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-[#0b1220] dark:text-slate-100 selection:bg-[#1e73be]/20 selection:text-slate-900 dark:selection:bg-[#1e73be]/30 dark:selection:text-white">
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
