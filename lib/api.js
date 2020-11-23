import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const pagesDirectory = join(process.cwd(), '_pages')

function _getAllPages(directory, fields = []) {
  const slugs = getSlugs(directory)
  const posts = slugs
    .map((slug) => _getPageBySlug(directory, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

function _getPageBySlug(directory, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

function getSlugs(dir) {
  return fs.readdirSync(dir)
}

export function getPostBySlug(slug, fields = []) {
  return _getPageBySlug(postsDirectory, slug, fields)
}

export function getPageBySlug(slug, fields = []) {
  return _getPageBySlug(pagesDirectory, slug, fields)
}

export function getAllPosts(fields = []) {
  return _getAllPages(postsDirectory, fields)
}

export function getAllPages(fields = []) {
  return _getAllPages(pagesDirectory, fields)
}
