'use client'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contactos', href: '#contactos' },
]

export default function Navbar() {
  return (
    <header className="fixed top-4 left-6 right-6 z-50">
      <div className="w-full px-8 py-2 flex justify-between items-center bg-white shadow-lg rounded-sm">
        <a href="#">
          <img
            src="/ALPIURB_logo_long_yellow.png"
            alt="Alpiurb"
            className="h-30 w-auto object-contain"
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
