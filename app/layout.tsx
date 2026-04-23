import type { Metadata } from 'next'
import './home.css'

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
    url: 'https://www.modoocso.kr',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.modoocso.kr/#organization',
      name: '주식회사 우리모두',
      alternateName: '모두의CSO',
      url: 'https://www.modoocso.kr',
      logo: 'https://www.modoocso.kr/logo.jpg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+82-10-5674-6574',
        contactType: 'customer service',
        availableLanguage: 'Korean',
        hoursAvailable: 'Mo-Fr 09:00-18:00',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.modoocso.kr/#localbusiness',
      name: '모두의CSO',
      description: 'CSO 수수료 투명 공개. 20년 현장 경험, 80여개 제약사 제휴. 제약 CSO 법인부터 개인 딜러까지.',
      url: 'https://www.modoocso.kr',
      telephone: '+82-10-5674-6574',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '은계중앙로 306번길 69, 604-11호',
        addressLocality: '시흥시',
        addressRegion: '경기도',
        addressCountry: 'KR',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.modoocso.kr/#website',
      url: 'https://www.modoocso.kr',
      name: '모두의CSO',
      inLanguage: 'ko-KR',
      publisher: { '@id': 'https://www.modoocso.kr/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}