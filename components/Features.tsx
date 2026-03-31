const features = [
  {
    title: 'O que fazemos',
    text: 'Somos especialistas em manutenção e inspeção de fachadas por técnicas de acesso por cordas, em locais onde andaimes convencionais são impraticáveis.',
  },
  {
    title: 'Segurança e Certificação',
    text: 'Todas as operações seguem as diretrizes IRATA. A segurança é a prioridade em cada fase do trabalho, com planos de resgate e avaliações de risco para cada projeto.',
  },
  {
    title: 'Onde Atuamos',
    text: 'Porto, Lisboa e Norte de Portugal. Dispomos de equipas certificadas para responder em 48 horas em todo o território nacional.',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f) => (
          <div key={f.title} className="border-l-2 border-yellow-400 pl-6">
            <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}