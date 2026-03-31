'use client'

import { Sparkles, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react'

const WHATSAPP_NUMBER = '917668861953'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'linear-gradient(160deg, #2C2420, #1a1210)' }} className="relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blush-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blush-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top CTA band */}
        <div className="py-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-accent text-4xl text-gradient mb-1">Ready to Glow?</p>
            <p className="font-body text-white/50 text-sm">Walk in or book ahead — we&apos;re always here for you.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-sm py-3 px-6"
            >
              Book Appointment
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body font-medium text-white py-3 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blush-300 to-rose-deep flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl text-white">Glow Beauty</span>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              A premium beauty salon dedicated to making every client feel radiant and confident.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-blush-500/30 hover:text-blush-300 transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-blush-500/30 hover:text-blush-300 transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-green-500/30 hover:text-green-400 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider mb-5 uppercase">Services</h4>
            <ul className="space-y-2.5">
              {['Hair Styling', 'Hair Color', 'Facial Care', 'Nail Art', 'Eyebrows & Lashes', 'Bridal Packages', 'Spa & Wellness'].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="font-body text-sm text-white/40 hover:text-blush-300 transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider mb-5 uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Book Now', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="font-body text-sm text-white/40 hover:text-blush-300 transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider mb-5 uppercase">Find Us</h4>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs text-white/30 mb-1 uppercase tracking-wider">Address</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  12, Beauty Lane, Civil Lines,<br />Bareilly, UP - 243001
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-white/30 mb-1 uppercase tracking-wider">Phone</p>
                <a href="tel:+917668861953" className="font-body text-sm text-white/50 hover:text-blush-300 transition-colors">
                  +91 7668861953
                </a>
              </div>
              <div>
                <p className="font-body text-xs text-white/30 mb-1 uppercase tracking-wider">Hours</p>
                <p className="font-body text-sm text-white/50">Mon – Sun: 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} Glow Beauty Salon. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/25 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-blush-400 text-blush-400 inline" /> for beauty lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
