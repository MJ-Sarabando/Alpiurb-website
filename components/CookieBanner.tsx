'use client'

import { useState, useEffect } from 'react'
import { getCookie, setCookie } from 'cookies-next'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = getCookie('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    setCookie('cookie-consent', 'accepted', { maxAge: 60 * 60 * 24 * 365 })
    setVisible(false)
  }

  const reject = () => {
    setCookie('cookie-consent', 'rejected', { maxAge: 60 * 60 * 24 * 365 })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Utilizamos cookies para melhorar a sua experiência no nosso site.
          Ao continuar a navegar, concorda com a nossa{' '}
          <a href="/politica-de-privacidade" className="underline hover:text-black">
            Política de Privacidade
          </a>.
        </p>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={reject}
            className="px-8 py-4 text-lg border border-zinc-300 text-zinc-600 hover:border-black hover:text-black transition-colors"
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="px-8 py-4 text-lg bg-black text-white hover:bg-zinc-800 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}