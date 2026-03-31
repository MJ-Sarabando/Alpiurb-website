export default {
  name: 'statistic',
  title: 'Estatística',
  type: 'document',
  fields: [
    {
      name: 'valor',
      title: 'Valor',
      type: 'string',
      description: 'Ex: +200, 12, 100%',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Ex: Edifícios, Anos de experiência',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ordem',
      title: 'Ordem de apresentação',
      type: 'number',
    },
  ],
}