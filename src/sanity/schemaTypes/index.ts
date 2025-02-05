import { type SchemaTypeDefinition } from 'sanity'
import Product from './Product'
import category from './category'
import heroimg from './heroimg'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product , category,heroimg],
}
