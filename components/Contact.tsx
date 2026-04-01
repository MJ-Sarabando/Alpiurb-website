"use client"

import { useState } from "react"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.ok) {
      setSent(true)
    } else {
      const body = await res.json()
      setError(body.error || "Erro ao enviar mensagem. Tente novamente.")
    }
  }

  return (
    <section id="contactos" className="bg-white py-24 scroll-mt-28">
      <div className="w-full px-[10vw] grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-4 text-zinc-700">Contacte-nos</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed text-lg">
            Preencha o formulário e entraremos em contacto para avaliar o seu projeto.
          </p>
          <div className="space-y-3 text-base text-zinc-500">
            <p>📍 Porto, Portugal</p>
            <p>📞 +351 938 587 661</p>
            <p>✉️ geral@alpiurb.pt</p>
          </div>
        </div>
        {sent ? (
          <div className="flex flex-col justify-center items-start space-y-3">
            <p className="text-2xl font-semibold text-zinc-700">Mensagem enviada com sucesso!</p>
            <p className="text-zinc-500 text-base">Entraremos em contacto brevemente.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 text-sm text-zinc-400 underline hover:text-zinc-600 transition-colors"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Nome" required className="border border-zinc-200 px-4 py-3 text-base text-zinc-700 placeholder:text-zinc-500 w-full focus:outline-none focus:border-yellow-400" />
              <input name="email" type="email" placeholder="Email" required className="border border-zinc-200 px-4 py-3 text-base text-zinc-700 placeholder:text-zinc-500 w-full focus:outline-none focus:border-yellow-400" />
            </div>
            <input name="subject" type="text" placeholder="Assunto" className="border border-zinc-200 px-4 py-3 text-base text-zinc-700 placeholder:text-zinc-500 w-full focus:outline-none focus:border-yellow-400" />
            <textarea name="message" rows={5} placeholder="Mensagem" required className="border border-zinc-200 px-4 py-3 text-base text-zinc-700 placeholder:text-zinc-500 w-full focus:outline-none focus:border-yellow-400 resize-none" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="bg-black text-white text-base font-medium px-8 py-3 hover:bg-zinc-800 transition-colors w-full disabled:opacity-60">
              {loading ? "A enviar..." : "Enviar Mensagem →"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
