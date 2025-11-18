import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Factory, Wrench, Phone, Newspaper, Briefcase, Users, Building2, ShieldCheck, Award, Facebook, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Sidebar({ open, setOpen }) {
  const [expanded, setExpanded] = useState(false)

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

  return (
    <>
      {/* Top bar with menu button for mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-3 bg-[#0b1220]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/10 transition"
          >
            <Menu size={22} />
          </button>
          <span className="text-sm text-slate-300">Menu</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1738045419183-79fd0707ffe5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY3RpdmUlMjBDb250cm9sJTIwQXV0b21hdGlvbnxlbnwwfDB8fHwxNzYzNDY5ODc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Active Control Automation" className="h-7 w-auto" />
        </div>
      </div>

      {/* Desktop rail with hover-to-expand */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full z-40">
        <motion.aside
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          animate={{ width: expanded ? 280 : 88 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          className="h-full bg-[#0b1220]/90 backdrop-blur-xl border-r border-white/10 text-slate-200 flex flex-col"
        >
          <div className="px-4 py-5 border-b border-white/10 flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1738045419183-79fd0707ffe5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY3RpdmUlMjBDb250cm9sJTIwQXV0b21hdGlvbnxlbnwwfDB8fHwxNzYzNDY5ODc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Active Control Automation" className="h-10 w-auto" />
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
                className="group flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition"
              >
                <span className="inline-flex w-8 justify-center text-slate-400 group-hover:text-slate-100 transition"><Icon size={18} /></span>
                {expanded && <span className="flex-1">{label}</span>}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="px-4 py-4 border-t border-white/10">
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram size={18} /></a>
              <a href="#contact" aria-label="Email" className="hover:text-white transition"><Mail size={18} /></a>
            </div>
            {expanded && (
              <div className="text-[11px] text-slate-500 mt-3">Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions</div>
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
              className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] z-50 bg-[#0b1220]/95 backdrop-blur-xl border-r border-white/10 text-slate-200 flex flex-col"
            >
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1738045419183-79fd0707ffe5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY3RpdmUlMjBDb250cm9sJTIwQXV0b21hdGlvbnxlbnwwfDB8fHwxNzYzNDY5ODc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Active Control Automation" className="h-8 w-auto" />
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-3">
                {links.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 px-5 py-3 text-sm hover:bg-white/5 transition"
                  >
                    <span className="inline-flex w-6 justify-center text-slate-400 group-hover:text-slate-100 transition"><Icon size={18} /></span>
                    <span className="flex-1">{label}</span>
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
