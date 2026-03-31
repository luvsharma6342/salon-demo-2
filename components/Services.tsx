'use client'

import { useEffect, useRef } from 'react'
import { Scissors, Sparkles, Hand, Eye, Flower2, Heart } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    desc: 'Cut, color, balayage, keratin — crafted for your unique texture and vision.',
    price: 'From ₹499',
    tag: 'Most Popular',
    color: 'from-blush-100 to-blush-200',
  },
  {
    icon: Sparkles,
    title: 'Facial & Skin Care',
    desc: 'Deep cleansing, brightening, and anti-aging facials for radiant skin.',
    price: 'From ₹799',
    tag: 'Trending',
    color: 'from-orange-50 to-orange-100',
  },
  {
    icon: Hand,
    title: 'Nails & Manicure',
    desc: 'Gel, acrylic, nail art, and classic manicure & pedicure treatments.',
    price: 'From ₹299',
    tag: null,
    color: 'from-rose-50 to-rose-100',
  },
  {
    icon: Eye,
    title: 'Eyebrows & Lashes',
    desc: 'Threading, tinting, shaping, and lash extensions for a defined look.',
    price: 'From ₹199',
    tag: null,
    color: 'from-amber-50 to-amber-100',
  },
  {
    icon: Flower2,
    title: 'Bridal Packages',
    desc: 'Full-day bridal grooming with makeup, hair, and spa — your dream look.',
    price: 'From ₹4,999',
    tag: 'Premium',
    color: 'from-pink-50 to-pink-100',
  },
  {
    icon: Heart,
    title: 'Spa & Wellness',
    desc: 'Body scrubs, massages, and aromatherapy for total relaxation.',
    price: 'From ₹999',
    tag: null,
    color: 'from-blush-50 to-blush-100',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-texture" style={{ background: 'linear-gradient(180deg, #FAF6F1 0%, #fdf6f0 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-blush-400" />
            What We Offer
            <span className="w-8 h-px bg-blush-400" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-4">
            Our <em className="font-accent text-gradient not-italic">Signature</em> Services
          </h2>
          <p className="font-body text-charcoal/55 text-lg max-w-xl mx-auto">
            Every service is a curated ritual designed to make you feel beautiful, confident, and renewed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="animate-on-scroll card-hover group relative bg-white rounded-3xl p-8 shadow-sm border border-blush-100/50 cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Tag */}
                {service.tag && (
                  <span className="relative z-10 inline-block mb-4 text-xs font-body font-medium tracking-wider uppercase px-3 py-1 bg-blush-100 text-blush-600 rounded-full">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white`}>
                  <Icon className="w-6 h-6 text-blush-600" />
                </div>

                <h3 className="relative z-10 font-display text-2xl font-semibold text-charcoal mb-3 group-hover:text-rose-deep transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 font-body text-charcoal/55 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-blush-500">{service.price}</span>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs font-body font-medium text-charcoal/50 group-hover:text-blush-600 transition-colors underline underline-offset-2"
                  >
                    Book Now →
                  </button>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-blush-100 group-hover:border-blush-200 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
