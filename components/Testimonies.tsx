const testimonies = [
  {
    quote:
      'A Alpiurb mostrou grande competência na reabilitação do nosso edifício histórico. A atenção aos detalhes e o cuidado com a estrutura foram impressionantes. Um parceiro de confiança.',
    author: 'Ricardo Ferreira',
    role: 'Gestor de Condomínio',
    variant: 'light',
  },
  {
    quote:
      'Trabalhar com a Alpiurb é sinónimo de tranquilidade. Cumpriram todos os prazos, respeitaram as normas de segurança e apresentaram soluções técnicas que reduziram os custos do projeto.',
    author: 'Ana Costa',
    role: 'Diretora de Obras',
    variant: 'mid',
  },
  {
    quote:
      'A equipa da Alpiurb foi impecável desde o primeiro contacto. Executaram a pintura e impermeabilização da fachada do nosso prédio com rapidez e profissionalismo, sem perturbar os moradores. Recomendo totalmente!',
    author: 'José Marques',
    role: 'Administrador de Condomínio',
    variant: 'dark',
  },
]

const cardStyles: Record<string, string> = {
  light: 'bg-white text-zinc-800',
  mid:   'bg-zinc-50 text-zinc-800',
  dark:  'bg-zinc-100 text-zinc-800',
}

const subTextStyles: Record<string, string> = {
  light: 'text-zinc-400',
  mid:   'text-zinc-400',
  dark:  'text-zinc-400',
}

export default function Testimonies() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="w-full px-[10vw]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-800 mb-4">Depoimentos</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed">
            O que dizem os nossos clientes. A confiança construída em cada projeto.
            Histórias reais de quem confia na Alpiurb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonies.map((t) => (
            <div
              key={t.author}
              className={`relative flex flex-col justify-between p-10 overflow-hidden ${cardStyles[t.variant]}`}
            >
              {/* decorative diagonal accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 text-current">
                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0,96 96,0 96,96" fill="currentColor" />
                </svg>
              </div>

              <div>
                <div className="text-5xl font-serif leading-none mb-6 text-yellow-400">
                  &#8220;
                </div>
                <p className="font-semibold leading-relaxed text-lg">{t.quote}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-400/20">
                <p className="font-bold text-base">{t.author}</p>
                <p className={`text-sm mt-0.5 ${subTextStyles[t.variant]}`}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
