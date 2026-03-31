export default function CTA() {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-black">Fale com a nossa equipa</h2>
          <p className="text-black/60 mt-2">Respondemos em menos de 48 horas.</p>
        </div>
        <a
          href="#contactos"
          className="flex items-center gap-3 bg-black text-white text-sm font-medium px-8 py-4 hover:bg-zinc-800 transition-colors whitespace-nowrap"
        >
          Pedir Orçamento &rarr;
        </a>
      </div>
    </section>
  )
}
