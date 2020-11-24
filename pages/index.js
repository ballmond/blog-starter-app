import groq from 'groq'
import client from '../client/sanityClient'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

const query = groq`*[_type == "post"]{
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

export async function getStaticProps() {
  const res = await client.fetch(query)

  const props = {
    props: {
      allPosts: res.map((post) => {
        return {
          ...post,
          author: {
            name: post.author,
            picture: post.authorImage,
          },
        }
      }),
    },
  }

  return props
}
