import { groq } from 'next-sanity'

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    name,
    description,
    icon,
    order
  }
`

export const statisticsQuery = groq`
  *[_type == "statistic"] | order(order asc) {
    _id,
    value,
    label,
    order
  }
`

export const membersQuery = groq`
  *[_type == "member"] {
    _id,
    name,
    role,
    bio,
    photo {
      asset -> { url }
    }
  }
`