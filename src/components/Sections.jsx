import { motion } from 'framer-motion'
import { Wrench, Factory, Gauge, Shield, Sparkles, Phone, Mail } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Sections() {
  const solutions = [
    {
      icon: Factory,
      title: 'Industrial Automation',
      desc: 'PLC, SCADA, HMI integration for seamless plant operations with predictive analytics and remote monitoring.',
    },
    {
      icon: Gauge,
      title: 'Process Instrumentation',
      desc: 'Level, flow, pressure, temperature instrumentation with calibration and commissioning services.',
    },
    {
      icon: Shield,
      title: 'Safety & Control',
      desc: 'Electrical panels, motor control centers, drives, sensors, and machine safety systems built to international standards.',
    },
  ]

  const products = [
    'Flow meters & transmitters',
    'Level sensors & switches',
    'Pressure gauges & transmitters',
    'Temperature sensors & controllers',
    'PLC, HMI, VFD, SCADA systems',
    'Control panels & MCCs',
  ]

  return (
    <div className="relative bg-slate-950 text-slate-100">
      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:pl-[320px] lg:pr-12 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid md:grid-cols-5 gap-10"
        >
          <motion.div variants={fadeUp} className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We are a premium provider of industrial automation and process instrumentation solutions. From design to commissioning, we deliver reliable, efficient, and scalable systems tailored to manufacturing and process industries.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Our team partners with top global brands to supply and integrate PLCs, HMIs, SCADA, sensors, transmitters, and control panels that keep your plant running smoothly.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="text-blue-400" />
              <div>
                <h3 className="font-semibold">Why choose us</h3>
                <ul className="mt-3 space-y-2 text-slate-300 text-sm list-disc ml-4">
                  <li>Industrial-grade craftsmanship</li>
                  <li>End-to-end design and integration</li>
                  <li>Responsive after-sales support</li>
                  <li>Trusted by plants and OEMs</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 lg:pl-[320px] lg:pr-12 py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Solutions</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Engineering, supply, and commissioning of complete automation systems and measurement instruments for diverse industries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-transform"
            >
              <s.icon className="text-blue-400" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="max-w-7xl mx-auto px-6 lg:pl-[320px] lg:pr-12 py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Products & Services</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Supply and integration of measurement, control, and automation equipment from trusted manufacturers.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Key Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc ml-4">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc ml-4">
              <li>System design and engineering</li>
              <li>Calibration and testing</li>
              <li>Panel fabrication and wiring</li>
              <li>Installation and commissioning</li>
              <li>Maintenance and after-sales support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 lg:pl=[320px] lg:pr-12 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-slate-300">Ready to automate your process? Reach out for specifications, quotations, or technical support.</p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Phone size={16} className="text-blue-400" /> +63 (917) 000 0000</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-blue-400" /> sales@activecontrolautomation.com</div>
            </div>
          </div>
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="How can we help?" />
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition">Send Inquiry</button>
            <p className="text-[11px] text-slate-400">By submitting you agree to our terms and consent to be contacted about our services.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Active Control Automation & Industrial Sales Corporation
      </footer>
    </div>
  )
}
