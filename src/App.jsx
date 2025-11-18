import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  const [open, setOpen] = useState(false)

  // Theme: default to light unless user previously chose dark
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [])

  // Brand colors
  const primary = '#008000' // primary
  const accent = '#f87500'  // accent

  return (
    <div
      className="min-h-screen bg-white text-slate-800 dark:bg-[#0b1220] dark:text-slate-100"
      style={{
        // selection colors via CSS vars fallback handled inline
        ['--selectionLightBg']: `${primary}20`,
        ['--selectionDarkBg']: `${primary}33`,
      }}
    >
      <style>{`
        ::selection { background: var(--selectionLightBg); color: #0f172a; }
        .dark ::selection { background: var(--selectionDarkBg); color: white; }
        a { color: ${accent}; }
        a:hover { color: ${accent}; opacity: 0.9; }
      `}</style>
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
