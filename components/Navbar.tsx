'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-blush-200/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blush-300 to-rose-deep flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-2xl font-semibold tracking-wide text-charcoal">
              Glow <span className="text-gradient">Beauty</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? 'text-blush-500 active'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Book Button */}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:block btn-primary text-sm py-2.5 px-6"
          >
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-cream-dark/80 text-charcoal hover:bg-blush-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(44, 36, 32, 0.4)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'linear-gradient(160deg, #FAF6F1 0%, #F0E8DF 100%)' }}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blush-100 text-blush-600 hover:bg-blush-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Logo in drawer */}
          <div className="mb-10">
            <p className="font-accent text-4xl text-gradient">Glow Beauty</p>
            <p className="font-body text-xs text-charcoal/50 mt-1 tracking-widest uppercase">Premium Salon</p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-body font-medium text-base transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? 'bg-blush-100 text-blush-600'
                    : 'text-charcoal/70 hover:bg-cream-dark hover:text-charcoal'
                }`}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blush-300" />
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto pt-6 border-t border-blush-100">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary block text-center text-sm w-full"
            >
              Book Appointment
            </a>
            <p className="text-center text-xs text-charcoal/40 mt-4 font-body">
              ✦ Walk-ins Welcome ✦
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
