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

  // 이미지 라인 제거
  const contentWithoutImages = post.content.replace(/!\[.*?\]\(.*?\)\n?/g, '')

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
        <div style={{ paddingBottom: '2rem', borderBottom: '1px solid #E5E9F0' }}>
          <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>⏱ {post.readingTime}</span>
        </div>
      </header>

      <div className="prose">
        <MDXRemote source={contentWithoutImages} />
      </div>

      {/* CTA 박스 */}
      <div style={{
        marginTop: '4rem',
        padding: '2.5rem 2rem',
        background: 'linear-gradient(135deg, #1246C8 0%, #2952E3 100%)',
        borderRadius: 20,
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(18,70,200,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 160, height: 160,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: -30, left: -30,
          width: 120, height: 120,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }} />
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          position: 'relative',
        }}>
          궁금한 점이 있으시면 언제든지 문의주세요
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <a href="tel:01056746574" style={{
            background: '#fff',
            color: '#1246C8',
            padding: '0.85rem 2rem',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}>📞 전화 상담</a>
          <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener noreferrer" style={{
            background: '#FEE500',
            color: '#1a1a1a',
            padding: '0.85rem 2rem',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}>💬 카카오 문의</a>
        </div>
      </div>
    </main>
  )
}