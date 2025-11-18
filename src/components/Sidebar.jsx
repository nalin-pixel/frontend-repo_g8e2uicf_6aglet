import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Factory, Wrench, Phone, ChevronRight } from 'lucide-react'

export default function Sidebar({ open, setOpen }) {
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
    { href: '#solutions', label: 'Solutions', icon: Factory },
    { href: '#products', label: 'Products & Services', icon: Wrench },
    { href: '#contact', label: 'Contact', icon: Phone },
  ]

  return (
    <>
      {/* Top bar with menu button for mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-3 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
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
        <div className="text-xs text-slate-400">ACTIVE CONTROL AUTOMATION</div>
      </div>

      {/* Desktop rail */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-[280px] z-40">
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="w-full h-full bg-slate-950/70 backdrop-blur-xl border-r border-white/10 text-slate-200 flex flex-col"
        >
          <div className="px-5 py-6 border-b border-white/10">
            <div className="text-xs tracking-widest text-blue-400/80">INDUSTRIAL SALES CORPORATION</div>
            <h2 className="text-lg font-semibold leading-tight">ACTIVE CONTROL AUTOMATION</h2>
            <p className="text-[11px] text-slate-400 mt-1">Industrial Automation • Process • Instrumentation</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group flex items-center gap-3 px-5 py-3 text-sm hover:bg-white/5 transition"
              >
                <span className="inline-flex w-6 justify-center text-slate-400 group-hover:text-blue-400 transition"><Icon size={18} /></span>
                <span className="flex-1">{label}</span>
                <ChevronRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" size={16} />
              </a>
            ))}
          </nav>

          <div className="px-5 py-4 border-t border-white/10 text-xs text-slate-400">
            © {new Date().getFullYear()} Active Control Automation. All rights reserved.
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
              className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] z-50 bg-slate-950/90 backdrop-blur-xl border-r border-white/10 text-slate-200 flex flex-col"
            >
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-widest text-blue-400/80">INDUSTRIAL SALES CORPORATION</div>
                  <h2 className="text-base font-semibold leading-tight">ACTIVE CONTROL AUTOMATION</h2>
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
                    <span className="inline-flex w-6 justify-center text-slate-400 group-hover:text-blue-400 transition"><Icon size={18} /></span>
                    <span className="flex-1">{label}</span>
                    <ChevronRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" size={16} />
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
