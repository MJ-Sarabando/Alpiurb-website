'use client'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contactos', href: '#contactos' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-2 flex justify-between items-center">
        <a href="#">
          <img
            src="/alpiurb_logo_square.png"
            alt="Alpiurb"
            className="h-40 w-auto object-contain"
          />
        </a>
        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl text-zinc-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactos"
            className="text-xl font-medium px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            Pedir Orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
