import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1220]/85 via-[#0b1220]/40 to-[#0b1220]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e73be]/10 border border-[#1e73be]/30 text-[#b2d0f2] text-xs mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1e73be] animate-pulse" />
            Industrial Automation Experts
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            ACTIVE CONTROL AUTOMATION
            <span className="block text-slate-300 text-xl sm:text-2xl font-medium mt-2">AND INDUSTRIAL SALES CORPORATION</span>
          </h1>
          <p className="mt-5 text-slate-200/90 text-base sm:text-lg max-w-2xl">
            Premium handcrafted solutions in process instrumentation, automation, and control systems. We design, supply, and integrate high-reliability industrial technologies for factories and critical infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1e73be] hover:bg-[#2b84d4] text-white font-medium transition-colors">
              Explore Services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md border border-white/15 transition-colors">
              Talk to Experts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
