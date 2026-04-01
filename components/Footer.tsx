import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-4 pb-12">
      <div className="w-full px-[10vw] flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Image
            src="/ALPIURB_logo_long_white.png"
            alt="Alpiurb"
            width={180}
            height={48}
            className="mb-4 object-contain"
          />
          <p>Reabilitação e Manutenção de Edifícios por Acesso por Cordas</p>
          <p className="mt-1">Gondomar · Porto · Norte de Portugal</p>
        </div>
        <div className="flex gap-12">
          <div className="space-y-2">
            <p className="text-white uppercase tracking-widest mb-3">Empresa</p>
            <a href="#sobre" className="block hover:text-white transition-colors">Sobre Nós</a>
            <a href="#servicos" className="block hover:text-white transition-colors">Serviços</a>
            <a href="#galeria" className="block hover:text-white transition-colors">Galeria</a>
          </div>
          <div className="space-y-2">
            <p className="text-white uppercase tracking-widest mb-3">Contacto</p>
            <p>geral@alpiurb.pt</p>
            <p>+351 938 587 661</p>
          </div>
        </div>
      </div>
      <div className="w-full px-[10vw] mt-10 pt-6 border-t border-zinc-800 flex justify-between items-center">
        <span className="text-xs">© {new Date().getFullYear()} Alpiurb. Todos os direitos reservados.</span>
        <span className="text-xs">Desenvolvido por MJ-Sarabando</span>
      </div>
    </footer>
  )
}