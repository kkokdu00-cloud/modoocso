import { getAllPosts, getPost } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '100px 5vw 80px' }}>
      <Link href="/blog" style={{ color: '#1246C8', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '2rem' }}>
        ← 블로그 목록
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <span style={{
          display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#1246C8', background: '#EEF3FF',
          padding: '0.2rem 0.6rem', borderRadius: 4, marginBottom: '1rem',
        }}>
          {post.category}
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.2, marginBottom: '1rem' }}>
          {post.title}
        </h1>
        <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {post.description}
        </p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#9CA3AF', paddingBottom: '2rem', borderBottom: '1px solid #E5E9F0' }}>
          <span>📅 {post.date}</span>
          <span>⏱ {post.readingTime}</span>
        </div>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} />
      </div>

      <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#1246C8', borderRadius: 16, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>궁금한 점이 있으시면 언제든지 문의주세요</p>
        <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>첫 상담은 무료입니다</h3>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:02XXXXXXXX" style={{ background: '#fff', color: '#1246C8', padding: '0.8rem 1.8rem', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>📞 전화 상담</a>
          <a href="https://pf.kakao.com/" style={{ background: '#FEE500', color: '#1a1a1a', padding: '0.8rem 1.8rem', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>💬 카카오 문의</a>
        </div>
      </div>
    </main>
  )
}
