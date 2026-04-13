import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSO 정보센터 — 블로그',
  description: 'CSO 수수료, CSO 신고제, CSO 법인 설립 등 제약 CSO 실전 정보를 모아놓은 블로그입니다.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '100px 5vw 80px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1246C8' }}>
          CSO 정보센터
        </span>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.04em', marginTop: '0.5rem', lineHeight: 1.2 }}>
          알아야 돈 버는<br />CSO 지식
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            style={{
              textDecoration: 'none', color: 'inherit',
              padding: '2rem', border: '1.5px solid #E5E9F0',
              borderRadius: 16, background: '#fff', display: 'block',
            }}
          >
            <span style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#1246C8', background: '#EEF3FF',
              padding: '0.2rem 0.6rem', borderRadius: 4, marginBottom: '0.75rem',
            }}>
              {post.category}
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              {post.title}
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              {post.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
              <span>📅 {post.date}</span>
              <span>⏱ {post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
