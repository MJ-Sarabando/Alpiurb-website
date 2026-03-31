import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end">
      <Image
        src="/Grande Escala_1.jpeg"
        alt="Técnico de acesso por cordas em trabalho"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-24 w-full">
        <p className="text-yellow-400 text-xs tracking-[4px] uppercase mb-4">
          Manutenção de Edifícios por Cordas
        </p>
        <h1 className="text-white text-6xl font-bold uppercase leading-none max-w-3xl mb-6">
          Trabalho em altura com segurança e precisão
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