import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Factory, Wrench, Phone, Newspaper, Briefcase, Facebook, Linkedin, Instagram, Mail, Sun, Moon } from 'lucide-react'

export default function Sidebar({ open, setOpen }) {
  const [expanded, setExpanded] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Theme control
  useEffect(() => {
    // Default to light theme
    document.documentElement.classList.remove('dark')
    setIsDark(false)
    // Respect previously saved preference
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  const links = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#products', label: 'Products', icon: Wrench },
    { href: '#services', label: 'Services', icon: Factory },
    { href: '#news', label: 'News & Events', icon: Newspaper },
    { href: '#careers', label: 'Careers', icon: Briefcase },
    { href: '#contact', label: 'Contact Us', icon: Phone },
  ]

  const primaryColor = '#1e73be' // from logo
  const logoUrl = import.meta.env.VITE_LOGO_URL || 'https://activecontrolautomation.com/wp-content/uploads/2020/09/cropped-ActiveControl-logo-1.png'

  return (
    <>
      {/* Top bar with menu button for mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Menu size={24} />
          </button>
          <span className="text-sm text-slate-600 dark:text-slate-300">Menu</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Active Control Automation" className="h-7 w-auto" />
        </div>
      </div>

      {/* Desktop rail with hover-to-expand */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full z-40">
        <motion.aside
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          animate={{ width: expanded ? 280 : 88 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          className="h-full bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur-xl border-r border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 flex flex-col"
        >
          <div className="px-4 py-5 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
            <img src={logoUrl} alt="Active Control Automation" className="h-10 w-auto" />
            {expanded && (
              <div className="overflow-hidden">
                <div className="text-[10px] tracking-widest" style={{ color: primaryColor }}>INDUSTRIAL SALES CORPORATION</div>
                <h2 className="text-sm font-semibold leading-tight">ACTIVE CONTROL AUTOMATION</h2>
              </div>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group flex items-center gap-3 px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <span className="inline-flex w-9 justify-center text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition"><Icon size={22} /></span>
                {expanded && <span className="flex-1">{label}</span>}
              </a>
            ))}
          </nav>

          {/* Theme toggle + Social icons */}
          <div className="px-4 py-4 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/15 transition"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {expanded && <span className="text-sm">{isDark ? 'Light theme' : 'Dark theme'}</span>}
              </button>
            </div>

            {/* Two-row social grid */}
            <div className="mt-3 grid grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
              <a href="#" aria-label="Facebook" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"><Facebook size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg_black/5 dark:hover:bg-white/10 transition"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg_white/10 transition"><Instagram size={20} /></a>
              <a href="#contact" aria-label="Email" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"><Mail size={20} /></a>
            </div>

            {expanded && (
              <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-3">Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions</div>
            )}
          </div>
        </motion.aside>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] z-50 bg-white/95 dark:bg-[#0b1220]/95 backdrop-blur-xl border-r border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 flex flex-col"
            >
              <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={logoUrl} alt="Active Control Automation" className="h-8 w-auto" />
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-3">
                {links.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 px-5 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <span className="inline-flex w-7 justify-center text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition"><Icon size={22} /></span>
                    <span className="flex-1">{label}</span>
                  </a>
                ))}
              </nav>

              <div className="px-5 py-4 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={toggleTheme}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-slate-800 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/15 transition"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm">{isDark ? 'Light theme' : 'Dark theme'}</span>
                </button>
                <div className="mt-3 grid grid-cols-4 gap-3 text-slate-600 dark:text-slate-400">
                  <a href="#" aria-label="Facebook" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"><Facebook size={20} /></a>
                  <a href="#" aria-label="LinkedIn" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg_white/10 transition"><Linkedin size={20} /></a>
                  <a href="#" aria-label="Instagram" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"><Instagram size={20} /></a>
                  <a href="#contact" aria-label="Email" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"><Mail size={20} /></a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
