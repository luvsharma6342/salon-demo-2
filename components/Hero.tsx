'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Star } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      const orbs = heroRef.current.querySelectorAll<HTMLElement>('.orb-layer')
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.3
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-texture"
      style={{ background: 'linear-gradient(135deg, #FAF6F1 0%, #F0E8DF 60%, #faeade 100%)' }}
    >
      {/* Animated Orbs */}
      <div
        className="orb orb-layer absolute w-96 h-96 bg-blush-300 top-10 right-10 transition-transform duration-700 ease-out"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="orb orb-layer absolute w-72 h-72 bg-blush-400 bottom-20 left-10 transition-transform duration-700 ease-out"
        style={{ animationDelay: '2s', opacity: 0.2 }}
      />
      <div
        className="orb orb-layer absolute w-48 h-48 bg-rose-deep top-1/2 left-1/3 transition-transform duration-700 ease-out"
        style={{ animationDelay: '4s', opacity: 0.15 }}
      />

      {/* Decorative rings */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-blush-300/30 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-24 right-24 w-56 h-56 border border-blush-200/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute bottom-40 left-20 w-40 h-40 border border-blush-300/20 rounded-full animate-[spin_25s_linear_infinite]" />

      {/* Floating petals/dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blush-300/50"
          style={{
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 11) % 90}%`,
            animation: `float ${4 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.3 + (i % 5) * 0.1,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <div
              className="section-tag animate-fade-up"
              style={{ animationFillMode: 'both' }}
            >
              <span className="w-8 h-px bg-blush-400" />
              Premium Beauty Experience
              <span className="w-8 h-px bg-blush-400" />
            </div>

            {/* Heading */}
            <h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-charcoal mb-6 animate-fade-up delay-100"
              style={{ animationFillMode: 'both' }}
            >
              Where Beauty{' '}
              <em className="font-accent text-gradient not-italic block">
                Truly
              </em>
              <span>Glows</span>
            </h1>

            {/* Subtext */}
            <p
              className="font-body text-charcoal/60 text-lg leading-relaxed max-w-md mb-10 animate-fade-up delay-200"
              style={{ animationFillMode: 'both' }}
            >
              Indulge in our bespoke beauty rituals — from transformative hair treatments
              to radiant skin care. Your glow is our masterpiece.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300"
              style={{ animationFillMode: 'both' }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Book Appointment
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 animate-fade-up delay-400"
              style={{ animationFillMode: 'both' }}
            >
              {[
                { num: '2K+', label: 'Happy Clients' },
                { num: '15+', label: 'Expert Stylists' },
                { num: '8+', label: 'Years of Glow' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-charcoal">{stat.num}</p>
                  <p className="font-body text-xs text-charcoal/50 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative animate-fade-up delay-300 hidden lg:block"
            style={{ animationFillMode: 'both' }}
          >
            {/* Main card */}
            <div className="relative ml-auto w-[400px]">
              {/* Image placeholder with gradient */}
              <div
                className="gradient-border rounded-[2rem] overflow-hidden h-[520px] shadow-2xl shadow-blush-300/40"
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    background: 'linear-gradient(160deg, #faeade 0%, #e5895a22 30%, #FAF6F1 60%, #C9956C33 100%)',
                  }}
                >
                  {/* Decorative content inside card */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                    <div className="font-accent text-7xl text-gradient">Glow</div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-blush-400 text-blush-400" />
                      ))}
                    </div>
                    <p className="font-body text-sm text-charcoal/50 tracking-widest uppercase">
                      Premium Salon
                    </p>
                    {/* Decorative circles */}
                    <div className="absolute top-12 left-12 w-24 h-24 rounded-full border-2 border-blush-200/50" />
                    <div className="absolute bottom-16 right-12 w-16 h-16 rounded-full bg-blush-100/50" />
                    <div className="absolute top-1/2 left-8 w-8 h-8 rounded-full bg-blush-300/40 animate-float" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-16 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-300 to-blush-500 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold text-charcoal">Top Rated</p>
                    <p className="font-body text-xs text-charcoal/50">4.9 / 5.0 stars</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-24 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '3s' }}>
                <p className="font-body text-xs text-charcoal/60 mb-1">Today's slots</p>
                <p className="font-display text-lg font-semibold text-charcoal">3 Available ✨</p>
              </div>

              <div className="absolute -left-6 bottom-10 glass rounded-2xl p-3 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <p className="font-accent text-3xl text-gradient">Beautiful</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/40 hover:text-blush-500 transition-colors duration-300 group"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:bg-blush-50 transition-colors">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </button>
    </section>
  )
}
