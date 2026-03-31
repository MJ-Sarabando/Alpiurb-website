export default function Footer() {
  return (
    <footer id="sobre" className="bg-zinc-900 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-bold tracking-widest uppercase mb-2">Alpiurb</p>
          <p className="text-sm">Manutenção de Edifícios por Cordas</p>
          <p className="text-sm mt-1">Porto · Norte de Portugal</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <p className="text-white text-xs uppercase tracking-widest mb-3">Empresa</p>
            <a href="#sobre" className="block hover:text-white transition-colors">Sobre Nós</a>
            <a href="#servicos" className="block hover:text-white transition-colors">Serviços</a>
            <a href="#galeria" className="block hover:text-white transition-colors">Galeria</a>
          </div>
          <div className="space-y-2">
            <p className="text-white text-xs uppercase tracking-widest mb-3">Contacto</p>
            <p>geral@alpiurb.pt</p>
            <p>+351 000 000 000</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-10 pt-6 border-t border-zinc-800 text-xs flex justify-between items-center">
        <span>© {new Date().getFullYear()} Alpiurb. Todos os direitos reservados.</span>
        <span>Desenvolvido por MJ-SARABANDO</span>
      </div>
    </footer>
  )
}