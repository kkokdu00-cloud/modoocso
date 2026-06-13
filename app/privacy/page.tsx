import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '모두의CSO 개인정보처리방침. 본 웹사이트는 별도의 개인정보를 수집·저장하지 않습니다.',
  robots: { index: true, follow: true },
}

const wrap: React.CSSProperties = {
  background: '#f2ece3',
  minHeight: '100vh',
  color: '#2a1f18',
}
const header: React.CSSProperties = {
  borderBottom: '1px solid #ddd0c4',
  padding: '1.1rem 6%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const logo: React.CSSProperties = { fontWeight: 800, fontSize: '1.15rem', color: '#3d2b1f', textDecoration: 'none' }
const homeLink: React.CSSProperties = { fontSize: '.85rem', fontWeight: 600, color: '#8b5c3e', textDecoration: 'none' }
const container: React.CSSProperties = { maxWidth: 760, margin: '0 auto', padding: '56px 6% 88px' }
const h1: React.CSSProperties = { fontSize: '1.9rem', fontWeight: 800, color: '#3d2b1f', letterSpacing: '-.03em', marginBottom: '.5rem' }
const lead: React.CSSProperties = { fontSize: '.95rem', color: '#5a4a3e', lineHeight: 1.85, marginBottom: '2.5rem' }
const h2: React.CSSProperties = { fontSize: '1.05rem', fontWeight: 700, color: '#3d2b1f', marginTop: '2rem', marginBottom: '.6rem' }
const p: React.CSSProperties = { fontSize: '.93rem', color: '#5a4a3e', lineHeight: 1.9 }
const meta: React.CSSProperties = { fontSize: '.85rem', color: '#9a8a7e', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #ddd0c4' }

export default function PrivacyPage() {
  return (
    <div style={wrap}>
      <header style={header}>
        <Link href="/" style={logo}>모두의<span style={{ color: '#8b5c3e' }}>CSO</span></Link>
        <Link href="/" style={homeLink}>← 홈으로</Link>
      </header>
      <main style={container}>
        <h1 style={h1}>개인정보처리방침</h1>
        <p style={lead}>
          주식회사 우리모두(&apos;모두의CSO&apos;, 이하 &quot;회사&quot;)는 이용자의 개인정보를 소중히 여기며 관련 법령을 준수합니다.
          본 웹사이트(modoocso.kr)의 개인정보 처리 기준은 다음과 같습니다.
        </p>

        <h2 style={h2}>1. 수집하는 개인정보 항목</h2>
        <p style={p}>
          회사는 본 웹사이트를 통해 별도의 개인정보를 수집하지 않습니다. 회원가입·로그인 절차가 없으며,
          이름·연락처 등 어떠한 개인정보도 입력받거나 저장하지 않습니다. (수집 항목: 없음)
        </p>

        <h2 style={h2}>2. 개인정보의 보유 및 이용기간</h2>
        <p style={p}>
          수집하는 개인정보가 없으므로, 회사가 보유·이용하는 개인정보가 없습니다. (보유기간: 없음)
        </p>

        <h2 style={h2}>3. 상담 채널 안내</h2>
        <p style={p}>
          상담은 카카오톡 채널, 전화, 이메일 등 외부 채널을 통해 진행됩니다. 각 채널에서 이용자가 직접 제공하는
          정보는 해당 채널 운영사의 개인정보처리방침을 따릅니다.
        </p>

        <h2 style={h2}>4. 개인정보의 제3자 제공</h2>
        <p style={p}>
          회사는 본 웹사이트를 통해 개인정보를 수집하지 않으므로, 제3자에게 제공하는 개인정보가 없습니다.
        </p>

        <h2 style={h2}>5. 개인정보 보호책임자</h2>
        <p style={p}>
          모두의CSO &nbsp;|&nbsp; 이메일 wrmodoo2025@naver.com &nbsp;|&nbsp; 전화 010-5674-6574
        </p>

        <h2 style={h2}>6. 방침의 변경</h2>
        <p style={p}>
          본 방침은 관련 법령 및 내부 운영방침에 따라 변경될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
        </p>

        <div style={meta}>시행일자: 2026년 6월 13일</div>
      </main>
    </div>
  )
}
