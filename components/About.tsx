'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2, Award, Users, Clock } from 'lucide-react'

const highlights = [
  'Certified & experienced beauty professionals',
  'Premium, cruelty-free products only',
  'Hygienic, sanitized environment',
  'Personalized consultations for every client',
]

const achievements = [
  { icon: Award, label: 'Best Salon Award 2023' },
  { icon: Users, label: '2000+ Happy Clients' },
  { icon: Clock, label: 'Open 7 Days a Week' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf6f0 0%, #F0E8DF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Visual */}
          <div className="relative animate-on-scroll order-2 lg:order-1">
            {/* Main visual block */}
            <div className="relative">
              <div
                className="w-full max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-blush-200/50"
                style={{ height: '420px', background: 'linear-gradient(145deg, #faeade, #C9956C33, #FAF6F1)' }}
              >
                <div className="h-full flex flex-col items-center justify-center gap-4">
                  <div className="font-accent text-8xl text-gradient">Beauty</div>
                  <div className="w-16 h-px bg-blush-300" />
                  <p className="font-body text-sm text-charcoal/40 tracking-[0.3em] uppercase">Est. 2016</p>
                  {/* Decorative shapes */}
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-blush-200/60" />
                  <div className="absolute bottom-12 left-8 w-24 h-24 rounded-full border border-blush-300/40 animate-float" />
                  <div className="absolute top-1/2 right-6 w-6 h-6 rounded-full bg-blush-200/50 animate-float" style={{ animationDelay: '2s' }} />
                </div>
              </div>

              {/* Offset card */}
              <div
                className="absolute -right-6 -bottom-6 w-48 rounded-2xl p-5 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #C9956C, #8B4A3A)' }}
              >
                <p className="font-display text-3xl font-bold text-white">8+</p>
                <p className="font-body text-xs text-white/70 mt-1">Years of Excellence</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 top-16 glass rounded-2xl p-4 shadow-lg animate-float">
                <p className="font-body text-xs text-charcoal/60">Rating</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blush-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-xs text-charcoal/40 mt-0.5">4.9 stars</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: '150ms' }}>
            <p className="section-tag">
              <span className="w-8 h-px bg-blush-400" />
              Our Story
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-6 leading-tight">
              Beauty Is an{' '}
              <em className="font-accent text-gradient not-italic">Art</em>,
              <br />We're the Artists
            </h2>
            <p className="font-body text-charcoal/60 leading-relaxed mb-4">
              Founded in 2016, Glow Beauty was born from a simple belief — every person deserves to feel extraordinary.
              Nestled in the heart of the city, our salon is a sanctuary where artistry meets self-care.
            </p>
            <p className="font-body text-charcoal/60 leading-relaxed mb-8">
              Our team of certified stylists, estheticians, and nail artists bring passion and expertise to every
              appointment. We use only premium, skin-safe products because your beauty deserves nothing less.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map(h => (
                <li key={h} className="flex items-center gap-3 font-body text-charcoal/70 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blush-500 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Achievements */}
            <div className="flex flex-wrap gap-4">
              {achievements.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-blush-100">
                  <Icon className="w-4 h-4 text-blush-500" />
                  <span className="font-body text-xs font-medium text-charcoal/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
