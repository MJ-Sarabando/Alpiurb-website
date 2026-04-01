import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end justify-start">
      <Image
        src="/grande_escala_1.jpeg"
        alt="Técnico de acesso por cordas em trabalho"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-[10vw] pb-20 md:pb-40">
        <p className="text-yellow-400 text-base tracking-[4px] uppercase mb-4">
          Reabilitação de Edifícios por Acesso por Cordas
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-6">
          Trabalhos Urbanos<br />Soluções Verticais
        </h1>
        <a
          href="#servicos"
          className="inline-flex items-center gap-3 bg-yellow-400 text-black text-base font-medium px-10 py-4 hover:bg-yellow-300 transition-colors"
        >
          Os nossos serviços →
        </a>
      </div>
    </section>
  )
}