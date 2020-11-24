import client from '../client/sanityClient'
import imageUrlBuilder from '@sanity/image-url'

export function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}
