export default {
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    },
    {
      name: 'icone',
      title: 'Ícone (nome do Lucide)',
      type: 'string',
      description: 'Ex: wrench, shield, building',
    },
    {
      name: 'ordem',
      title: 'Ordem de apresentação',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
  ],
}