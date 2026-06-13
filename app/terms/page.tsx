import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '이용약관',
  description: '모두의CSO 웹사이트 이용약관.',
  robots: { index: true, follow: true },
}

const wrap: React.CSSProperties = { background: '#f2ece3', minHeight: '100vh', color: '#2a1f18' }
const header: React.CSSProperties = {
  borderBottom: '1px solid #ddd0c4', padding: '1.1rem 6%',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
}
const logo: React.CSSProperties = { fontWeight: 800, fontSize: '1.15rem', color: '#3d2b1f', textDecoration: 'none' }
const homeLink: React.CSSProperties = { fontSize: '.85rem', fontWeight: 600, color: '#8b5c3e', textDecoration: 'none' }
const container: React.CSSProperties = { maxWidth: 760, margin: '0 auto', padding: '56px 6% 88px' }
const h1: React.CSSProperties = { fontSize: '1.9rem', fontWeight: 800, color: '#3d2b1f', letterSpacing: '-.03em', marginBottom: '.5rem' }
const lead: React.CSSProperties = { fontSize: '.95rem', color: '#5a4a3e', lineHeight: 1.85, marginBottom: '2.5rem' }
const h2: React.CSSProperties = { fontSize: '1.05rem', fontWeight: 700, color: '#3d2b1f', marginTop: '2rem', marginBottom: '.6rem' }
const p: React.CSSProperties = { fontSize: '.93rem', color: '#5a4a3e', lineHeight: 1.9 }
const meta: React.CSSProperties = { fontSize: '.85rem', color: '#9a8a7e', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #ddd0c4' }

export default function TermsPage() {
  return (
    <div style={wrap}>
      <header style={header}>
        <Link href="/" style={logo}>모두의<span style={{ color: '#8b5c3e' }}>CSO</span></Link>
        <Link href="/" style={homeLink}>← 홈으로</Link>
      </header>
      <main style={container}>
        <h1 style={h1}>이용약관</h1>
        <p style={lead}>
          본 약관은 주식회사 우리모두(이하 &quot;회사&quot;)가 운영하는 모두의CSO 웹사이트(modoocso.kr)의
          이용조건 및 절차에 관한 사항을 규정합니다.
        </p>

        <h2 style={h2}>제1조 (목적)</h2>
        <p style={p}>
          본 약관은 회사가 운영하는 웹사이트(이하 &quot;사이트&quot;)의 이용과 관련하여 회사와 이용자 간의 권리,
          의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>

        <h2 style={h2}>제2조 (정의)</h2>
        <p style={p}>
          &quot;사이트&quot;란 회사가 CSO 관련 정보 제공 및 상담 연결을 위해 운영하는 웹사이트를 말합니다.
          &quot;이용자&quot;란 사이트에 접속하여 본 약관에 따라 사이트가 제공하는 정보를 이용하는 자를 말합니다.
        </p>

        <h2 style={h2}>제3조 (약관의 효력 및 변경)</h2>
        <p style={p}>
          본 약관은 사이트에 게시함으로써 효력이 발생합니다. 회사는 관련 법령을 위반하지 않는 범위에서
          약관을 변경할 수 있으며, 변경 시 사이트를 통해 공지합니다.
        </p>

        <h2 style={h2}>제4조 (서비스의 내용)</h2>
        <p style={p}>
          사이트는 CSO 관련 정보 제공, 콘텐츠 게시, 상담 채널 연결 등을 제공합니다. 구체적인 파트너십 조건은
          별도의 상담 및 계약을 통해 정해집니다.
        </p>

        <h2 style={h2}>제5조 (이용자의 의무)</h2>
        <p style={p}>
          이용자는 사이트에 게시된 정보를 무단으로 복제·배포하거나 회사 및 제3자의 권리를 침해하는 행위를
          하여서는 안 됩니다.
        </p>

        <h2 style={h2}>제6조 (저작권)</h2>
        <p style={p}>
          사이트에 게시된 콘텐츠의 저작권은 회사에 귀속됩니다. 회사의 사전 동의 없이 영리 목적으로 이용할 수 없습니다.
        </p>

        <h2 style={h2}>제7조 (면책)</h2>
        <p style={p}>
          사이트가 제공하는 정보는 일반적인 참고용이며, 법령·정책 변동에 따라 달라질 수 있습니다.
          구체적인 의사결정은 전문가 상담을 권장합니다.
        </p>

        <h2 style={h2}>제8조 (준거법 및 관할)</h2>
        <p style={p}>
          본 약관은 대한민국 법령에 따라 해석되며, 분쟁 발생 시 관할법원은 관련 법령이 정하는 바에 따릅니다.
        </p>

        <div style={meta}>본 약관은 2026년 6월 13일부터 시행합니다.</div>
      </main>
    </div>
  )
}
