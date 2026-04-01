'use client'

import { useState } from 'react'

const images = [
  { src: '/coberturas_complexas_1.jpeg', alt: 'Técnico IRATA da Alpiurb a fazer manutenção de cobertura no Center Parcs Les Trois Forêts , em Hattigny' },
  { src: '/coberturas_complexas_2.jpeg', alt: 'Técnico IRATA da Alpiurb a fazer substituição da cobertura no Center Parcs Les Trois Forêts , em Hattigny' },
  { src: '/pintura.jpg', alt: 'Técnico IRATA da Alpiurb a fazer manutenção da caixa de elevador por acesso por cordas num hotel em Vila Nova de Gaia' },
  { src: '/Reparacao_fissura_1.jpeg', alt: 'Técnico IRATA da Alpiurb a fazer reparação de fissura por acesso por cordas num prédio na Senhora da Hora' },
  { src: '/grande_escala_2.jpeg', alt: 'Técnico IRATA da Alpiurb a fazer manutenção estrutura metálica de suporte em altura em Espinho por acesso por cordas' },
  { src: '/pintura_tubos_queda.jpeg', alt: 'Técnico IRATA da Alpiurb a fazer substituição de tubos de queda por acesso por cordas num prédio em Matosinhos' },
  { src: '/revestimento_fachada.jpeg', alt: 'Técnico IRATA da Alpiurb a substituir revestimento de fachada por acesso por cordas em Leça da Palmeira' },
  { src: '/reparacao_fisura_2.jpeg', alt: 'Equipa de alpinistas industriais da Alpiurb a reparar fachada por acesso por cordas em Matosinhos' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  const leftIdx = (current - 1 + images.length) % images.length
  const rightIdx = (current + 1) % images.length

  return (
    <section id="galeria" className="bg-white py-16 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-zinc-700 mb-10">Galeria</h2>
      </div>

      <div className="relative flex items-center justify-center gap-4 overflow-hidden">
        {/* Left peek image + arrow */}
        <div className="relative flex-shrink-0 w-[19vw]">
          <img
            src={images[leftIdx].src}
            alt={images[leftIdx].alt}
            className="w-full h-[26vw] object-cover"
          />
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-colors w-12 h-12 flex items-center justify-center text-zinc-700 text-xl shadow"
          >
            ←
          </button>
        </div>

        {/* Center main image */}
        <div className="flex-shrink-0 w-[42vw]">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-[34vw] object-cover"
          />
        </div>

        {/* Right peek image + arrow */}
        <div className="relative flex-shrink-0 w-[19vw]">
          <img
            src={images[rightIdx].src}
            alt={images[rightIdx].alt}
            className="w-full h-[26vw] object-cover"
          />
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-colors w-12 h-12 flex items-center justify-center text-zinc-700 text-xl shadow"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
