'use client'

import { useEffect, useRef } from 'react'

const galleryItems = [
  { label: 'Balayage', tag: 'Hair Color', bg: 'from-amber-100 to-orange-100', emoji: '✨' },
  { label: 'Bridal Glow', tag: 'Makeup', bg: 'from-pink-100 to-rose-100', emoji: '💄' },
  { label: 'Nail Art', tag: 'Nails', bg: 'from-blush-100 to-blush-200', emoji: '💅' },
  { label: 'Keratin', tag: 'Hair Treatment', bg: 'from-amber-50 to-yellow-100', emoji: '🌟' },
  { label: 'Facial', tag: 'Skin Care', bg: 'from-green-50 to-emerald-100', emoji: '🌿' },
  { label: 'Lash Extensions', tag: 'Eye Care', bg: 'from-purple-50 to-violet-100', emoji: '👁️' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-28" style={{ background: '#FAF6F1' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-blush-400" />
            Our Work
            <span className="w-8 h-px bg-blush-400" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-4">
            The <em className="font-accent text-gradient not-italic">Glow</em> Gallery
          </h2>
          <p className="font-body text-charcoal/55 text-lg max-w-md mx-auto">
            A glimpse of transformations crafted with love in our salon.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`animate-on-scroll card-hover relative rounded-3xl overflow-hidden cursor-pointer group ${
                i === 0 || i === 5 ? 'row-span-1 md:row-span-2' : ''
              }`}
              style={{
                transitionDelay: `${i * 70}ms`,
                height: i === 0 || i === 5 ? '360px' : '200px',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} transition-all duration-500`} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
                <span
                  className="text-5xl animate-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {item.emoji}
                </span>
                <div className="text-center">
                  <p className="font-display text-xl font-semibold text-charcoal/80">{item.label}</p>
                  <p className="font-body text-xs text-charcoal/50 tracking-widest uppercase mt-1">{item.tag}</p>
                </div>
              </div>

              {/* Hover reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full text-center text-sm font-body font-medium bg-white/90 backdrop-blur-sm text-charcoal rounded-xl py-2.5 hover:bg-white transition-colors"
                >
                  Book This →
                </button>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-white/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
