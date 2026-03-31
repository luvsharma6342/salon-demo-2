'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Client',
    text: 'Glow Beauty is my go-to salon! The hair coloring team is exceptional — my balayage turned out exactly how I envisioned. The ambiance is so calming and the staff is genuinely warm.',
    rating: 5,
    initials: 'PS',
    color: 'from-blush-300 to-blush-500',
  },
  {
    name: 'Neha Gupta',
    role: 'Bridal Client',
    text: 'Got my bridal package done here and it was absolutely magical! The makeup artist understood my vision perfectly. I received so many compliments at my wedding. Highly recommend!',
    rating: 5,
    initials: 'NG',
    color: 'from-orange-300 to-orange-500',
  },
  {
    name: 'Ananya Mehta',
    role: 'Monthly Client',
    text: 'The facial treatments here have completely transformed my skin. The estheticians are knowledgeable and recommend exactly what your skin needs. Worth every rupee!',
    rating: 5,
    initials: 'AM',
    color: 'from-pink-300 to-rose-500',
  },
  {
    name: 'Divya Joshi',
    role: 'Walk-in Client',
    text: 'Walked in for a quick manicure and ended up staying for two hours! The nail art they created was stunning. Very hygienic environment, professional staff. 10/10!',
    rating: 5,
    initials: 'DJ',
    color: 'from-amber-300 to-amber-500',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAF6F1 0%, #F0E8DF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-blush-400" />
            Client Love
            <span className="w-8 h-px bg-blush-400" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-4">
            What Our <em className="font-accent text-gradient not-italic">Clients</em> Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
          <div className="max-w-3xl mx-auto">
            {/* Card */}
            <div
              key={active}
              className="relative bg-white rounded-3xl p-10 shadow-xl shadow-blush-100/50 border border-blush-100/50"
              style={{ animation: 'fadeIn 0.5s ease' }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8">
                <Quote className="w-10 h-10 text-blush-100 fill-blush-100" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blush-400 text-blush-400" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-body font-semibold text-white text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-charcoal">{t.name}</p>
                  <p className="font-body text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>

              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${t.color} rounded-full opacity-30`} />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-blush-200 flex items-center justify-center text-blush-400 hover:bg-blush-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-8 h-2.5 bg-blush-500'
                        : 'w-2.5 h-2.5 bg-blush-200 hover:bg-blush-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-blush-200 flex items-center justify-center text-blush-400 hover:bg-blush-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
