import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDir = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content: string
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => getPost(f.replace('.mdx', '')))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post {
  const file = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    readingTime: readingTime(content).text.replace('read', '읽기'),
    content,
  }
}
