import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  // console.log(markdown)
  const result = await remark().use(html).process(markdown)
  // console.log(result)
  return result.toString()
}
