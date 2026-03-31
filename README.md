# 🌸 Glow Beauty — Premium Beauty Salon Website

A stunning, fully responsive Next.js + Tailwind CSS website for **Glow Beauty** salon, featuring smooth animations, WhatsApp integration, and a beautiful booking form.

---

## ✨ Features

- **Responsive Design** — Looks great on mobile, tablet, and desktop
- **Hamburger Menu** — Collapsible mobile navigation with smooth slide-in drawer
- **Smooth Animations** — Scroll-triggered fade-ups, floating elements, parallax orbs, staggered reveals
- **WhatsApp Integration** — Floating WhatsApp button + form-to-WhatsApp booking flow
- **Contact Form** — Full booking form with service selection, date picker, and success state
- **Sections:** Hero · Services · About · Gallery · Testimonials · Contact · Footer

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project
cd glow-beauty

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

### WhatsApp Number
Update your WhatsApp number in two files:

**`components/Contact.tsx`** (line 8):
```js
const WHATSAPP_NUMBER = '91XXXXXXXXXX' // Your number with country code, no +
```

**`components/WhatsAppFloat.tsx`** (line 5):
```js
const WHATSAPP_NUMBER = '91XXXXXXXXXX'
```

**`components/Footer.tsx`** (line 6):
```js
const WHATSAPP_NUMBER = '91XXXXXXXXXX'
```

### Business Info
Update address, phone, and hours in:
- `components/Contact.tsx` — info card section
- `components/Footer.tsx` — find us section

### Social Media Links
Update Instagram and Facebook URLs in `components/Footer.tsx`.

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` — the `blush` and `rose` color palettes drive the entire theme.

### Fonts
The site uses:
- **Cormorant Garamond** — Display headings
- **DM Sans** — Body text
- **Pinyon Script** — Accent/logo text

Change in `app/globals.css` @import and `tailwind.config.js` fontFamily.

### Services & Pricing
Edit the `services` array in `components/Services.tsx`.

---

## 📁 Project Structure

```
glow-beauty/
├── app/
│   ├── globals.css        # Global styles, animations, utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page composition
├── components/
│   ├── Navbar.tsx         # Responsive navbar with hamburger
│   ├── Hero.tsx           # Landing hero with parallax
│   ├── Services.tsx       # Service cards grid
│   ├── About.tsx          # About section
│   ├── Gallery.tsx        # Masonry gallery
│   ├── Testimonials.tsx   # Auto-rotating testimonials
│   ├── Contact.tsx        # Booking form + WhatsApp
│   ├── Footer.tsx         # Footer with links
│   └── WhatsAppFloat.tsx  # Floating WhatsApp button
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🌐 Deployment

Deploy easily on **Vercel** (recommended):

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).

---

*Built with ❤️ for Glow Beauty Salon*
