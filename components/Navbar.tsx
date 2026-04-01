'use client'

import { useState } from 'react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contactos', href: '#contactos' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-6 right-6 z-50">
      <div className="w-full px-6 py-0.5 flex justify-between items-center bg-white/95 backdrop-blur-sm shadow-xl rounded-sm">
        <a href="#">
          <img
            src="/ALPIURB_logo_long_yellow.png"
            alt="Alpiurb"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactos"
            className="text-sm font-medium px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            Pedir Orçamento
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-1 bg-white/95 backdrop-blur-sm shadow-xl rounded-sm px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-600 hover:text-black transition-colors py-1 border-b border-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactos"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors text-center mt-2"
          >
            Pedir Orçamento
          </a>
        </div>
      )}
    </header>
  )
}