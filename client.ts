import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    token:process.env.SANITY_API_TOKENS,
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: 'production',
    useCdn:true,
    
}

export default sanityClient(config)


const builder = imageUrlBuilder(config)

export function urlFor(source: string) {
  return builder.image(source)
}