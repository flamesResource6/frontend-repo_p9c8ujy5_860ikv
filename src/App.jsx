import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Waves, Calendar, MapPin, Phone, Mail, Instagram, Facebook, Star } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'About', href: '#about' },
    { label: 'Spaces', href: '#spaces' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white shadow shadow-teal-500/30">
              <Waves size={18} />
            </span>
            <span className="text-gray-900 font-semibold tracking-tight">Azure Shore Venue</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {it.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-teal-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-700 transition-colors">
              Book a tour
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-5/6 max-w-xs bg-white shadow-xl p-6 space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="h-px bg-gray-100" />
            {items.map((it) => (
              <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900">
                {it.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-teal-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-700">
              Book a tour
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-24">
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20 backdrop-blur">
                <Star size={14} className="text-teal-600" />
                Beachside elegance, ocean-breeze moments
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Host unforgettable events by the ocean
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700">
                A serene coastal venue crafted for weddings, corporate retreats, and celebrations. Let the sound of waves set the tone for your perfect day.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 font-medium shadow-lg shadow-teal-600/20 hover:bg-teal-700">
                  Book a private tour
                </a>
                <a href="#gallery" className="inline-flex items-center justify-center rounded-full bg-white text-teal-700 px-6 py-3 font-medium ring-1 ring-inset ring-teal-700/20 hover:bg-teal-50">
                  Explore the space
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-teal-600"/> Coral Bay, California</span>
                <span className="inline-flex items-center gap-2"><Calendar size={16} className="text-teal-600"/> Now booking 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          {title && <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="Where the ocean meets celebration" subtitle="Thoughtfully designed spaces that blend natural beauty with modern comfort.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Waves className="text-teal-600" size={20} />, title: 'Oceanfront Terrace', text: 'Panoramic sea views for ceremonies and sunsets.' },
          { icon: <Calendar className="text-teal-600" size={20} />, title: 'Flexible Bookings', text: 'Full-day, weekend, and multi-event packages.' },
          { icon: <Star className="text-teal-600" size={20} />, title: 'Premium Service', text: 'On-site coordinators and curated vendor list.' },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 mb-3">
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Spaces() {
  const spaces = [
    { name: 'The Shore Hall', desc: 'Sunlit indoor hall for up to 180 guests.', img: 'https://images.unsplash.com/photo-1521337580473-8afc5a3fa1f8?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Coral Lawn', desc: 'Lush outdoor lawn steps from the beach.', img: 'https://images.unsplash.com/photo-1535958636472-5c8742b5d2ba?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Wave Lounge', desc: 'Cozy lounge for cocktails and live music.', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <Section id="spaces" title="Our spaces" subtitle="Versatile areas tailored to intimate gatherings and grand celebrations.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spaces.map((s) => (
          <div key={s.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{s.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <Section id="gallery" title="Gallery" subtitle="A glimpse of the atmosphere and details your guests will love.">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
            <img src={src} alt="Venue" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </Section>
  )
}

function EventsCTA() {
  return (
    <section id="events" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-8 sm:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Make it a day to remember</h3>
            <p className="mt-2 text-gray-700">Our team will guide you through layouts, vendors, and timelines to craft a seamless, stylish experience.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 font-medium shadow-lg shadow-teal-600/20 hover:bg-teal-700">
                Check availability
              </a>
              <a href="#spaces" className="inline-flex items-center justify-center rounded-full bg-white text-teal-700 px-6 py-3 font-medium ring-1 ring-inset ring-teal-700/20 hover:bg-teal-50">
                See packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Plan your oceanfront event" subtitle="Tell us about your vision and we’ll get back to you within 24 hours.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Doe" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Event details</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" placeholder="Date, guest count, style..."></textarea>
            </div>
          </div>
          <button type="button" className="mt-4 inline-flex items-center rounded-full bg-teal-600 text-white px-6 py-3 font-medium shadow hover:bg-teal-700">Send inquiry</button>
        </form>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900">Visit us</h4>
          <p className="mt-2 text-sm text-gray-600 inline-flex items-start gap-2"><MapPin size={18} className="text-teal-600 mt-0.5"/> 101 Ocean Drive, Coral Bay, CA</p>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p className="inline-flex items-center gap-2"><Phone size={16} className="text-teal-600"/> (555) 123-9876</p>
            <p className="inline-flex items-center gap-2"><Mail size={16} className="text-teal-600"/> hello@azureshore.co</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100"><Instagram size={18} /></a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Azure Shore Venue. All rights reserved.</p>
        <div className="text-sm text-gray-600">Crafted with love by the sea.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Spaces />
      <Gallery />
      <EventsCTA />
      <Contact />
      <Footer />
    </div>
  )
}
