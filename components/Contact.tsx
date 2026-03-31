'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'

const WHATSAPP_NUMBER = '917668861953' // Replace with actual number
const WHATSAPP_MESSAGE = 'Hello! I would like to book an appointment at Glow Beauty Salon.'

const services = [
  'Hair Styling', 'Hair Color/Balayage', 'Facial & Skin Care',
  'Nail & Manicure', 'Eyebrows & Lashes', 'Bridal Package', 'Spa & Wellness', 'Other'
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', date: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    const message = form.name
      ? `Hello! I'm ${form.name} and I'd like to book an appointment${form.service ? ` for ${form.service}` : ''}${form.date ? ` on ${form.date}` : ''}. Please let me know the availability.`
      : WHATSAPP_MESSAGE
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28" style={{ background: '#FAF6F1' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-blush-400" />
            Book Now
            <span className="w-8 h-px bg-blush-400" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-4">
            Let&apos;s Make You <em className="font-accent text-gradient not-italic">Glow</em>
          </h2>
          <p className="font-body text-charcoal/55 text-lg max-w-md mx-auto">
            Book an appointment online, WhatsApp us, or simply walk in. We&apos;re always happy to see you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Card */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div
              className="rounded-3xl p-8 h-full"
              style={{ background: 'linear-gradient(145deg, #2C2420, #4a3530)' }}
            >
              <h3 className="font-display text-3xl text-white mb-2">Visit Us</h3>
              <p className="font-accent text-2xl text-gradient mb-8">Glow Beauty</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-400/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blush-300" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white text-sm mb-1">Address</p>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      12, Beauty Lane, Civil Lines,<br />Bareilly, UP - 243001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-400/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blush-300" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white text-sm mb-1">Phone</p>
                    <a href="tel:+917668861953" className="font-body text-white/60 text-sm hover:text-blush-300 transition-colors">
                      +91 7668861953
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-400/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blush-300" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white text-sm mb-1">Hours</p>
                    <p className="font-body text-white/60 text-sm">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="font-body text-white/60 text-sm">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="font-body text-white/50 text-xs mb-4 tracking-wide">INSTANT BOOKING VIA</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-body font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Chat on WhatsApp
                </button>
                <p className="font-body text-white/30 text-xs text-center mt-3">
                  Typically replies within minutes
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blush-100/40 border border-blush-100/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-3xl text-charcoal mb-3">Booking Received!</h3>
                  <p className="font-body text-charcoal/60 text-sm max-w-xs">
                    Thank you, {form.name}! We&apos;ll confirm your appointment via call or WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '', date: '' }) }}
                    className="mt-8 btn-outline text-sm"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-charcoal mb-6">Book an Appointment</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Your Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Priya Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Phone Number *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Email Address</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="priya@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Select Service *</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200 appearance-none"
                        >
                          <option value="">Choose a service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Preferred Date</label>
                        <input
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs font-medium text-charcoal/60 block mb-1.5 tracking-wide">Additional Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any specific requests or details..."
                        className="w-full px-4 py-3 rounded-xl border border-blush-100 bg-cream/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-all duration-200 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary flex items-center justify-center gap-2 flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Booking Request
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body font-medium text-sm text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        WhatsApp
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
