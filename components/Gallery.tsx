'use client'

import { useState } from 'react'

const images = [
  { src: '/coberturas_complexas_1.jpeg', alt: 'Coberturas Complexas 1' },
  { src: '/coberturas_complexas_2.jpeg', alt: 'Coberturas Complexas 2' },
  { src: '/pintura.jpg', alt: 'Pintura' },
  { src: '/Reparacao_fissura_1.jpeg', alt: 'Reparação de Fissura' },
  { src: '/grande_escala_2.jpeg', alt: 'Grande Escala' },
  { src: '/pintura_tubos_queda.jpeg', alt: 'Pintura Tubos Queda' },
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
