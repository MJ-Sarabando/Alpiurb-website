const features = [
  {
    title: 'O que fazemos',
    text: 'Somos uma empresa especializada em reabilitação e manutenção de edifícios por acesso por cordas. Oferecemos uma visão 360º sobre o património, aliando o rigor técnico à agilidade operacional.',
  },
  {
    title: 'Segurança Intransigente',
    text: 'Operamos com técnicos qualificados e processos rigorosos, garantindo risco zero em cada intervenção. Seguimos as diretrizes IRATA, a segurança é prioridade em cada fase do trabalho.',
  },
  {
    title: 'Vantagens',
    text: 'Uma metodologia de alta performance que elimina a necessidade de andaimes e plataformas, reduzindo custos, prazos e perturbação para todos os intervenientes.',
  },
]

export default function Features() {
  return (
    <section id="sobre" className="bg-white py-24 scroll-mt-28">
      <div className="w-full px-[10vw] grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f) => (
          <div key={f.title} className="border-l-4 border-yellow-400 pl-6 py-4 bg-zinc-50 rounded-sm shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-zinc-800">{f.title}</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}