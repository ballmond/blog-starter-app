import groq from 'groq'
import client from '../../client/sanityClient'
import { urlFor } from '../../lib/sanityHelper'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.ogImage && urlFor(post.ogImage).url()}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={urlFor(post.coverImage)}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "slug": slug.current,
  "coverImage": mainImage,
  "ogImage": mainImage,
  "date": publishedAt,
  "content": body
}`

export async function getStaticProps({ params }) {
  const { slug = '' } = params
  const res = await client.fetch(query, { slug })
  const props = {
    props: {
      post: {
        ...res,
        author: {
          name: res.author,
          picture: res.authorImage,
        },
      },
    },
  }

  return props
}

export async function getStaticPaths() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{"slug": slug.current}`
  )

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
