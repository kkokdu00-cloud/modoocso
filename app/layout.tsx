import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.modoocso.kr'),
  title: {
    default: '모두의CSO | CSO 수수료 투명 공개, 80개 제약사 제휴',
    template: '%s | 모두의CSO',
  },
  description: 'CSO 수수료 투명 공개. 20년 현장 경험, 80여개 제약사 제휴. 제약 CSO 법인부터 개인 딜러까지 모두의CSO가 함께합니다.',
  keywords: ['CSO 수수료', '제약 CSO 법인', 'CSO 신고제', 'CSO란', '의약품 CSO', 'CSO 딜러'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.modoocso.com',
    siteName: '모두의CSO',
    title: '모두의CSO | CSO 수수료 투명 공개',
    description: '20년 현장 경험, 80여개 제약사 제휴. 모든 파트너에게 동일한 수수료.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'IAjwAKHMDlqB4Zrls65rtJsrBmq_HmunpB_TNwyNGhg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
