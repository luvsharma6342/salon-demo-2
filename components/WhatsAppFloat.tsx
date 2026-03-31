'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '917668861953'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="animate-fade-up bg-white rounded-2xl shadow-2xl shadow-green-100 p-4 w-64 border border-green-100 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 w-5 h-5 text-charcoal/30 hover:text-charcoal/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <MessageCircle className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <p className="font-body font-semibold text-charcoal text-sm">Glow Beauty</p>
              <p className="font-body text-xs text-green-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Online now
              </p>
            </div>
          </div>
          <p className="font-body text-charcoal/60 text-sm mb-3">
            Hi there! 👋 Ready to book your appointment? Chat with us on WhatsApp!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to book an appointment at Glow Beauty Salon.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-body font-medium transition-all duration-200 hover:shadow-md hover:shadow-green-200"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Start Chat
          </a>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-green-100 rotate-45" />
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setShowTooltip(t => !t)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-300/50 transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        aria-label="Chat on WhatsApp"
      >
        {showTooltip ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-white" />
        )}
        {/* Pulse ring */}
        {!showTooltip && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-green-500 text-green-600 text-[8px] font-bold flex items-center justify-center">
              1
            </span>
          </>
        )}
      </button>
    </div>
  )
}
