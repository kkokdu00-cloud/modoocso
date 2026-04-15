import { getAllPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogUrls = posts.map(post => ({
    url: `https://www.modoocso.kr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'https://www.modoocso.kr', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.modoocso.kr/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...blogUrls,
  ]
}