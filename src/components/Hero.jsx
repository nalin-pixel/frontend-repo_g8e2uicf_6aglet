import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-4 bg-white/10 border-white/20 text-white">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
            Industrial Automation Experts
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            ACTIVE CONTROL AUTOMATION
            <span className="block text-slate-200 text-xl sm:text-2xl font-medium mt-2">AND INDUSTRIAL SALES CORPORATION</span>
          </h1>
          <p className="mt-5 text-slate-200/90 text-base sm:text-lg max-w-2xl">
            Premium solutions in process instrumentation, automation, and control systems. We design, supply, and integrate reliable industrial technologies for factories and critical infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-medium transition-colors bg-slate-800/70 hover:bg-slate-800/90">Explore Services</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-medium backdrop-blur-md border border-white/20 hover:bg-white/10">Talk to Experts</a>
          </div>
        </div>
      </div>
    </section>
  )
}
