import { motion } from 'framer-motion'
import { Wrench, Factory, Gauge, Shield, Sparkles, Phone, Mail, Award, ShieldCheck, Building2, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Sections() {
  const services = [
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

  const clientLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Petron_Corporation_logo.svg/2560px-Petron_Corporation_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/SM_Investments_Corporation_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/81/Globe_Telecom_logo_2021.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/San_Miguel_Corporation_logo.svg',
  ]

  const certifications = [
    { icon: ShieldCheck, label: 'ISO-aligned QA' },
    { icon: Award, label: 'Authorized Distributor' },
  ]

  const primary = '#1e73be'

  return (
    <div className="relative bg-white text-slate-800 dark:bg-[#0b1220] dark:text-slate-100">
      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid md:grid-cols-5 gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px]" style={{ backgroundColor: primary+"14", color: primary }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primary }} />
              About Active Control Automation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3">About Us</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              We are a premium provider of industrial automation and process instrumentation solutions. From design to commissioning, we deliver reliable, efficient, and scalable systems tailored to manufacturing and process industries.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our team partners with top global brands to supply and integrate PLCs, HMIs, SCADA, sensors, transmitters, and control panels that keep your plant running smoothly.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="text-[#1e73be]" />
              <div>
                <h3 className="font-semibold">Why choose us</h3>
                <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 text-sm list-disc ml-4">
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

      {/* Services (was Solutions) */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Engineering, supply, and commissioning of complete automation systems and measurement instruments for diverse industries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1e73be]/10 transition-transform"
            >
              <s.icon className="text-[#1e73be]" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Products</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Supply and integration of measurement, control, and automation equipment from trusted manufacturers.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Key Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-4">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">Industries</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc ml-4">
              <li>Food & Beverage</li>
              <li>Energy & Utilities</li>
              <li>Pharma & Chemicals</li>
              <li>Water & Wastewater</li>
              <li>Manufacturing</li>
            </ul>
          </div>
        </div>

        {/* Clients & Certifications */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Selected Clients</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              {clientLogos.map((src, idx) => (
                <img key={idx} src={src} alt="Client logo" className="h-10 w-auto opacity-80 hover:opacity-100 transition" />
              ))}
            </div>
          </div>
          <div className="bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-300">
              {certifications.map((c) => (
                <div key={c.label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/10">
                  <c.icon className="text-[#1e73be]" size={18} />
                  <span className="text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Careers placeholders */}
      <section id="news" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">News & Events</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Company updates, product launches, and industry events.</p>
      </section>

      <section id="careers" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Careers</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Join a passionate team building reliable industrial solutions.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <div>Contact numbers: +632 8871-0273 / 8871-0274 / 8245-1637 / +632 8781-3964 / 8546-6106 / 8554-9763 / +632 8353-8378</div>
              <div>email : sales@activecontrol.com.ph</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:pl-[88px] lg:pr-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="text-slate-600 dark:text-slate-300 text-center md:text-left">
              Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center md:text-right text-slate-700 dark:text-slate-300">
              <a href="#team" className="hover:underline">Our team</a>
              <a href="#industries" className="hover:underline">Industries</a>
              <a href="#partners" className="hover:underline">Principal / Partners</a>
              <a href="#projects" className="hover:underline">Projects</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    }

    const res = await fetch(`${backend}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const out = await res.json().catch(() => ({}))
    alert(out?.sent ? 'Message sent!' : 'Received! We will get back to you shortly.')
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 space-y-3">
      <div>
        <label className="text-sm text-slate-700 dark:text-slate-300">Name</label>
        <input name="name" required className="mt-1 w-full rounded-lg bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 px-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e73be]/40" placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm text-slate-700 dark:text-slate-300">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 px-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e73be]/40" placeholder="you@company.com" />
      </div>
      <div>
        <label className="text-sm text-slate-700 dark:text-slate-300">Phone</label>
        <input name="phone" className="mt-1 w-full rounded-lg bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 px-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e73be]/40" placeholder="Optional" />
      </div>
      <div>
        <label className="text-sm text-slate-700 dark:text-slate-300">Message</label>
        <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 px-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e73be]/40" placeholder="How can we help?" />
      </div>
      <button type="submit" className="w-full bg-[#1e73be] hover:bg-[#2b84d4] text-white font-medium py-2.5 rounded-lg transition">Send Inquiry</button>
      <p className="text-[11px] text-slate-500 dark:text-slate-400">By submitting you agree to our terms and consent to be contacted about our services.</p>
    </form>
  )
}
