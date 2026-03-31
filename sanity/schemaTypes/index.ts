import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import statistic from './statistic'
import member from './member'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, statistic, member],
}