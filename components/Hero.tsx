import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end justify-start">
      <Image
        src="/Grande Escala_1.jpeg"
        alt="Técnico de acesso por cordas em trabalho"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-20 pb-40">
        <p className="text-yellow-400 text-xs tracking-[4px] uppercase mb-4">
          Reabilitação de Edifícios por Acesso por Cordas
        </p>
        <h1 className="text-white text-6xl font-bold uppercase leading-tight mb-6">
          Trabalhos Urbanos<br />Soluções Verticais
        </h1>
        <a
          href="#servicos"
          className="inline-flex items-center gap-3 bg-yellow-400 text-black text-sm font-medium px-8 py-3 hover:bg-yellow-300 transition-colors"
        >
          Os nossos serviços →
        </a>
      </div>
    </section>
  )
}