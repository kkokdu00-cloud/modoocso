import Script from 'next/script'
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '모두의CSO — CSO 수수료, 구조로 설명합니다',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '모두의CSO | CSO 수수료 투명 공개',
    description: '20년 현장 경험, 80여개 제약사 제휴. 모든 파트너에게 동일한 수수료.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'IAjwAKHMDlqB4Zrls65rtJsrBmq_HmunpB_TNwyNGhg',
    other: { 'naver-site-verification': '2780af2a2f1bacceae3e4e6d0fd3bf2078363388' },
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
    {
      '@type': 'FAQPage',
      '@id': 'https://www.modoocso.kr/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'CSO 신고제가 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '의약품 판촉영업자는 관련 법령에 따라 신고 및 교육 기준을 갖춰 운영해야 합니다. 세부 기준은 시기와 상황에 따라 달라질 수 있어 상담 시 현재 기준에 맞춰 안내드립니다.',
          },
        },
        {
          '@type': 'Question',
          name: '수수료는 모두 동일한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '제약사·품목·조건에 따라 달라질 수 있습니다. 숫자보다 정산 기준과 확인 방식이 명확한지가 더 중요합니다. 계약 전 관련 조건을 사전에 설명하는 방식으로 진행합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '개인도 시작할 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '가능한 경우가 있습니다. 다만 거래 구조와 향후 운영 계획에 따라 법인 형태가 더 적합할 수 있습니다. 상담 시 현재 상황에 맞는 구조를 안내드립니다.',
          },
        },
        {
          '@type': 'Question',
          name: '약가 정책 변화가 영향을 주나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2026년부터 단계적으로 적용되는 제네릭 약가 조정은 품목 수익 구조에 실질적인 영향을 줄 수 있습니다. 특정 품목 의존도가 높은 경우 상담 시 함께 검토합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '정산은 어떻게 확인하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '월 단위 정산을 기본으로 하며 자료 제출 → 확인 → 정산 안내 흐름으로 운영됩니다. 정산 내역은 직접 개발·운영 중인 시스템을 통해 확인할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '상담 비용이 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '기본 상담은 무료로 진행합니다.',
          },
        },
      ],
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
        <Script src="https://cso-chatbot-production.up.railway.app/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}