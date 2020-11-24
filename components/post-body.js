import BlockContent from '@sanity/block-content-to-react'
import client from '../client/sanityClient'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </div>
  )
}
