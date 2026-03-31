export default function Contact() {
  return (
    <section id="contactos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Contacte-nos</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed">
            Preencha o formulário e entraremos em contacto para avaliar o seu projeto.
          </p>
          <div className="space-y-3 text-sm text-zinc-500">
            <p>📍 Porto, Portugal</p>
            <p>📞 +351 000 000 000</p>
            <p>✉️ geral@alpiurb.pt</p>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Nome" className="border border-zinc-200 px-4 py-3 text-sm w-full focus:outline-none focus:border-yellow-400" />
            <input type="email" placeholder="Email" className="border border-zinc-200 px-4 py-3 text-sm w-full focus:outline-none focus:border-yellow-400" />
          </div>
          <input type="text" placeholder="Assunto" className="border border-zinc-200 px-4 py-3 text-sm w-full focus:outline-none focus:border-yellow-400" />
          <textarea rows={5} placeholder="Mensagem" className="border border-zinc-200 px-4 py-3 text-sm w-full focus:outline-none focus:border-yellow-400 resize-none" />
          <button type="submit" className="bg-black text-white text-sm font-medium px-8 py-3 hover:bg-zinc-800 transition-colors w-full">
            Enviar Mensagem →
          </button>
        </form>
      </div>
    </section>
  )
}