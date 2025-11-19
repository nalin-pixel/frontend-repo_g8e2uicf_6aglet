import { useState } from 'react'
import { Menu, X, Home, Info, Box, Wrench, Phone, Newspaper, Briefcase, Facebook, Linkedin, Instagram, Sun, Moon } from 'lucide-react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  // Simple theme toggle without persistence
  const toggleTheme = () => setDark((d) => !d)

  const links = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#products', label: 'Products', icon: Box },
    { href: '#services', label: 'Services', icon: Wrench },
    { href: '#news', label: 'News & Events', icon: Newspaper },
    { href: '#careers', label: 'Careers', icon: Briefcase },
    { href: '#contact', label: 'Contact Us', icon: Phone },
  ]

  const logoUrl = import.meta.env.VITE_LOGO_URL || 'https://activecontrolautomation.com/wp-content/uploads/2020/09/cropped-ActiveControl-logo-1.png'

  return (
    <>
      {/* Top bar for mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-black/10">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-black hover:bg-black/5 transition"
          >
            <Menu size={24} />
          </button>
          <span className="text-sm text-slate-600">Menu</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Active Control Automation" className="h-7 w-auto" />
        </div>
      </div>

      {/* Desktop sidebar - fixed width, no hover expand, simple hover */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-[240px] z-30 bg-white border-r border-black/10 text-slate-800 flex-col">
        <div className="px-4 py-5 border-b border-black/10 flex items-center gap-3">
          <img src={logoUrl} alt="Active Control Automation" className="h-10 w-auto" />
          <div className="overflow-hidden">
            <div className="text-[10px] tracking-widest text-slate-500">INDUSTRIAL SALES CORPORATION</div>
            <h2 className="text-sm font-semibold leading-tight">ACTIVE CONTROL AUTOMATION</h2>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="group relative flex items-center gap-3 px-4 py-3 text-sm hover:bg-black/5 transition">
              <span className="inline-flex w-6 justify-center text-slate-500 group-hover:text-slate-900 transition"><Icon size={20} /></span>
              <span className="flex-1">{label}</span>
            </a>
          ))}
        </nav>

        {/* Social icons above email (reverted position) */}
        <div className="px-4 py-4 border-t border-black/10">
          <div className="grid grid-cols-3 gap-3 text-slate-600">
            <a href="#" aria-label="Facebook" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Facebook size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Instagram size={20} /></a>
          </div>

          {/* Theme toggle button (no persistence) */}
          <button
            onClick={toggleTheme}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/5 text-slate-800 hover:bg-black/10 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">{dark ? 'Light theme' : 'Dark theme'}</span>
          </button>

          {/* Plain text email (non-clickable) */}
          <div className="mt-3 px-3 py-2 rounded-lg bg-white border border-black/10 text-sm text-slate-700 select-text">
            sales@activecontrol.com.ph
          </div>

          {/* Single-line footer text */}
          <div className="mt-3 text-[11px] text-slate-500">Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions</div>
        </div>
      </aside>

      {/* Mobile drawer (simple) */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white border-r border-black/10 text-slate-800 flex flex-col">
            <div className="px-5 py-4 border-b border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="Active Control Automation" className="h-8 w-auto" />
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-black hover:bg-black/5 transition">
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-3">
              {links.map(({ href, label, icon: Icon }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="group flex items-center gap-3 px-5 py-3 text-sm hover:bg-black/5 transition">
                  <span className="inline-flex w-7 justify-center text-slate-500 group-hover:text-slate-900 transition"><Icon size={22} /></span>
                  <span className="flex-1">{label}</span>
                </a>
              ))}
            </nav>

            <div className="px-5 py-4 border-t border-black/10">
              <button onClick={toggleTheme} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-black/5 text-slate-800 hover:bg-black/10 transition">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
                <span className="text-sm">{dark ? 'Light theme' : 'Dark theme'}</span>
              </button>
              <div className="mt-3 grid grid-cols-3 gap-3 text-slate-600">
                <a href="#" aria-label="Facebook" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Facebook size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Linkedin size={20} /></a>
                <a href="#" aria-label="Instagram" className="flex items-center justify-center rounded-lg px-3 py-2 hover:bg-black/5 transition"><Instagram size={20} /></a>
              </div>
              <div className="mt-3 px-3 py-2 rounded-lg bg-white border border-black/10 text-sm text-slate-700 select-text">
                sales@activecontrol.com.ph
              </div>
              <div className="text-[11px] text-slate-500 mt-3">Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
