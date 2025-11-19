import { Phone, Mail } from 'lucide-react'

export default function Sections() {
  return (
    <div className="relative bg-white text-slate-800">
      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We provide industrial automation and process instrumentation solutions. From design to commissioning, we deliver reliable, efficient, and scalable systems tailored to manufacturing and process industries.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 lg:pl:[240px] lg:pr-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Engineering, supply, and commissioning of automation systems and measurement instruments for diverse industries.</p>
      </section>

      {/* Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Products</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Measurement, control, and automation equipment from trusted manufacturers.</p>
      </section>

      {/* News */}
      <section id="news" className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">News & Events</h2>
        <p className="mt-3 text-slate-600">Company updates and industry events.</p>
      </section>

      {/* Careers */}
      <section id="careers" className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Careers</h2>
        <p className="mt-3 text-slate-600">Join our team building reliable industrial solutions.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="font-medium">Contact numbers</div>
              <div className="bg-white border border-black/10 rounded-lg p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone size={16} className="opacity-70" />
                  <span>+632 8871-0273 / 8871-0274 / 8245-1637 / +632 8781-3964 / 8546-6106 / 8554-9763 / +632 8353-8378</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="opacity-70" />
                <span className="select-text">sales@activecontrol.com.ph</span>
              </div>
            </div>
          </div>
          <SimpleContactForm />
        </div>
      </section>

      {/* Footer single-line */}
      <footer className="border-t border-black/10 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-6 lg:pl-[240px] lg:pr-10">
          <div className="flex flex-col items-center gap-1 text-slate-600 text-center">
            <div>Copyright © 2026 All Rights Reserved. Powered by Endsofttech Web Solutions</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SimpleContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    alert('Thank you! Your message has been recorded.')
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-2xl p-6 space-y-3">
      <div>
        <label className="text-sm text-slate-700">Name</label>
        <input name="name" required className="mt-1 w-full rounded-lg bg-white border border-black/10 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm text-slate-700">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-white border border-black/10 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@company.com" />
      </div>
      <div>
        <label className="text-sm text-slate-700">Phone</label>
        <input name="phone" className="mt-1 w-full rounded-lg bg-white border border-black/10 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Optional" />
      </div>
      <div>
        <label className="text-sm text-slate-700">Message</label>
        <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg bg-white border border-black/10 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="How can we help?" />
      </div>
      <button type="submit" className="w-full text-white font-medium py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 transition">Send Inquiry</button>
    </form>
  )
}
