import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glow Beauty | Premium Beauty Salon',
  description: 'Experience luxury beauty treatments at Glow Beauty. Hair, skin, nails, and more — crafted for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
