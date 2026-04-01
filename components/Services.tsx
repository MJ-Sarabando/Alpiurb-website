'use client'

import { useState } from 'react'

const services = [
  { title: 'Inspeção e Diagnóstico de Fachadas', description: 'Levantamento detalhado do estado de revestimentos, fissuras e patologias estruturais em qualquer tipo de edifício.' },
  { title: 'Limpeza e Lavagem de Fachadas', description: 'Remoção de sujidade, fungos e depósitos em superfícies de grande dimensão sem recurso a andaimes.' },
  { title: 'Reparação e Selagem', description: 'Tratamento de juntas, fissuras e impermeabilização de fachadas e coberturas em altura.' },
  { title: 'Pintura e Revestimento', description: 'Aplicação de tintas, impermeabilizantes e outros revestimentos por técnicos especializados em acesso por cordas.' },
  { title: 'Limpeza de Vidros', description: 'Limpeza de envidraçados em grandes alturas com equipamentos e técnicas adequadas a cada tipo de superfície.' },
]

export default function Services() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="servicos" className="bg-zinc-50 py-24 scroll-mt-28">
      <div className="w-full px-[10vw] grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-5xl font-bold mb-6 text-zinc-700">Os Nossos Serviços</h2>
          <p className="text-zinc-700 leading-relaxed text-lg">
            O acesso por cordas permite executar trabalhos em altura de forma segura e eficiente,
            sem custos de andaimes ou interrupções prolongadas no edifício.<br />Sejam intervenções de carácter urgente ou manutenções programadas, todas as nossas soluções são projetadas para as especificidade de cada projeto. 
          </p>
        </div>
        <div className="divide-y divide-zinc-200">
          {services.map((s, i) => (
            <div key={s.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="font-medium text-zinc-700 text-lg">{s.title}</span>
                <span className="text-2xl text-yellow-400 leading-none">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="text-zinc-700 text-base pb-5 leading-relaxed">{s.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}