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

  const second = (current + 1) % images.length

  return (
    <section id="galeria" className="bg-zinc-100 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-zinc-700 mb-10">Galeria</h2>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-[500px] object-contain bg-zinc-200"
            />
            <img
              src={images[second].src}
              alt={images[second].alt}
              className="w-full h-[500px] object-contain bg-zinc-200"
            />
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black text-white text-2xl px-4 py-3 hover:bg-zinc-700 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black text-white text-2xl px-4 py-3 hover:bg-zinc-700 transition-colors"
          >
            ›
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-yellow-400' : 'bg-zinc-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
