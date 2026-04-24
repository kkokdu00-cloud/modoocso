'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [navShadow, setNavShadow] = useState(false)

  useEffect(() => {
    // Nav shadow on scroll
    const onScroll = () => setNavShadow(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('up')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' })
    revealEls.forEach(el => io.observe(el))

    // Parallax hero bg
    const heroBg = document.querySelector('.hero-bg') as HTMLElement
    const onParallax = () => {
      if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.15}px)`
    }
    window.addEventListener('scroll', onParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onParallax)
      io.disconnect()
    }
  }, [])

  const toggleFaq = (el: HTMLElement) => {
    const item = el.parentElement!
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
    if (!isOpen) item.classList.add('open')
  }

  return (
    <>
      {/* NAV */}
      <nav style={{ boxShadow: navShadow ? '0 4px 24px rgba(44,32,24,0.08)' : 'none' }}>
        <a href="/" className="logo" style={{ textDecoration: 'none' }}>모두의<b>CSO</b></a>
        <ul className="nav-links">
          <li><a href="#why">CSO란</a></li>
          <li><a href="#diff2">차별점</a></li>
          <li><a href="#process">진행방식</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="https://www.modoocso.kr/blog" target="_blank" rel="noopener">정보센터</a></li>
        </ul>
        <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="nav-btn">상담 문의</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div>
          <span className="hero-handwrite">제약 영업 파트너십의 새로운 기준</span>
          <h1>
            수수료보다 먼저<br />
            <span className="em">구조</span>를 봐야 합니다
          </h1>
          <p className="hero-sub">
            20년 현장 경험과 직접 개발한 정산 시스템을 바탕으로
            계약, 영업, 정산, 신고제 대응까지
            실제로 움직이는 구조를 함께 만듭니다.
          </p>
          <div className="hero-btns">
            <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="btn-p">상담 문의</a>
            <a href="#process" className="btn-g">진행 방식 보기</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop" alt="제약 영업 현장" className="hero-photo" />
          <div className="hero-badge">
            <div className="badge-num">20년</div>
            <div className="badge-label">제약 영업<br />현장 경험</div>
          </div>
          <div className="hero-badge2">
            <div className="b2-title">정산 시스템 운영 중</div>
            <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
              <span className="b2-dot"></span>직접 개발 · 직접 운영
            </div>
          </div>
        </div>
      </section>

      {/* WHY CSO */}
      <section className="why section" id="why">
        <span className="eyebrow reveal">왜 지금 CSO인가</span>
        <h2 className="sec-title reveal d1">시장은 이미<br />그 방향으로 움직이고 있습니다</h2>
        <p className="sec-lead reveal d2">고정비는 줄이고, 현장은 넓히고, 정산과 준법은 더 명확하게 — 제약 영업 환경이 바뀌고 있습니다.</p>
        <div className="why-img-row">
          <div className="why-img-card reveal reveal-left">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80&fit=crop" alt="제약사 미팅" />
            <div className="why-img-overlay">
              <h3>신고제 기준 대응</h3>
              <p>의약품 판촉영업자 운영 요건,<br />기준에 맞춰 실제로 갖추고 있습니다</p>
            </div>
          </div>
          <div className="why-img-card reveal reveal-right d2">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80&fit=crop" alt="정산 데이터" />
            <div className="why-img-overlay">
              <h3>정산 시스템 운영</h3>
              <p>수기 방식의 누락과 오해를<br />구조적으로 줄입니다</p>
            </div>
          </div>
        </div>
        <div className="why-points reveal d1">
          {[
            { img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=60&fit=crop', title: '약가 정책 변화', desc: '2026년부터 제네릭 약가가 단계적으로 조정됩니다. 품목 의존 구조는 지금 점검이 필요합니다.' },
            { img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=60&fit=crop', title: '수수료보다 정산 구조', desc: '어떻게 계산되고, 언제 지급되고, 무엇이 공제되는지가 명확한가가 장기 파트너십의 핵심입니다.' },
            { img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=60&fit=crop', title: '개인 vs 법인 구조', desc: '잘못된 구조로 시작하면 나중에 고치기 어렵습니다. 현재 조건에 맞는 형태를 먼저 확인해야 합니다.' },
          ].map((pt, i) => (
            <div key={i} className="why-img-card">
              <img src={pt.img} alt={pt.title} />
              <div className="why-img-overlay">
                <h4 style={{ color: '#ffffff' }}>{pt.title}</h4>
                <p style={{ color: '#ffffff' }}>{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="diff section" id="diff">
        <div className="diff-layout">
          <div className="diff-photo-wrap reveal reveal-left">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80&fit=crop" alt="신뢰 파트너십" className="diff-photo" />
            <p className="diff-photo-caption">말이 아니라 구조로 신뢰를 만듭니다</p>
          </div>
          <div>
            <span className="eyebrow reveal">왜 모두의CSO인가</span>
            <h2 className="sec-title reveal d1">처음부터<br />큰 말을 하지 않습니다</h2>
            <div className="diff-items">
              {[
                { n: '01', title: '정산을 시스템으로 운영합니다', desc: '직접 개발한 정산 시스템으로 내역·제출 자료·확인 흐름을 관리합니다.' },
                { n: '02', title: '수수료를 숫자가 아닌 구조로 설명합니다', desc: '품목별 기준, 공제 여부, 지급 시점까지 계약 전에 설명합니다.' },
                { n: '03', title: '약가 정책 변화를 함께 분석합니다', desc: '약가 인하가 품목별로 어떤 영향을 주는지 실제로 분석해 안내합니다.' },
                { n: '04', title: '현재 조건에서 가능한 것을 먼저 말합니다', desc: '다 된다고 말하지 않습니다. 가능한 것과 어려운 것을 먼저 구분합니다.' },
              ].map((item, i) => (
                <div key={i} className={`diff-item reveal d${i + 1}`}>
                  <div className="diff-item-head">
                    <span className="diff-n">{item.n}</span>
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section" id="process">
        <div className="process-wrap">
          <div>
            <span className="eyebrow reveal">어떻게 진행되나요</span>
            <h2 className="sec-title reveal d1">상담부터 첫 정산까지</h2>
            <div className="process-steps">
              {[
                { n: '1', title: '상담 및 조건 확인', desc: '활동 이력, 지역, 거래처, 희망 품목군을 확인합니다. 가능한 것과 어려운 것을 솔직하게 안내합니다.' },
                { n: '2', title: '구조 및 수수료 안내', desc: '연결 범위, 활동 구조, 수수료 기준, 정산 흐름, 신고제 기준을 함께 설명합니다.' },
                { n: '3', title: '계약 및 시작 준비', desc: '조건 확인 후 계약을 진행하고 실제 활동 방향을 설정합니다.' },
                { n: '4', title: '영업 활동 및 정산', desc: '자료 제출과 확인 절차를 거쳐 월 정산이 진행됩니다. 정산 내역은 시스템으로 확인합니다.' },
              ].map((step, i) => (
                <div key={i} className={`p-step reveal d${i + 1}`}>
                  <div className="p-num">{step.n}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="process-note reveal">
              모든 제약사·품목이 동일하게 연결되는 것은 아닙니다.<br />
              현재 조건에 따라 가능한 범위를 안내드립니다.
            </div>
          </div>
          <div className="reveal reveal-right d2">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&fit=crop" alt="계약 진행" className="process-photo" />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog section" id="blog">
        <div className="blog-header">
          <div>
            <span className="eyebrow reveal">정보센터</span>
            <h2 className="sec-title reveal d1" style={{ marginBottom: 0 }}>현장에서 바로 쓸 수 있는 정보만</h2>
          </div>
          <a href="https://www.modoocso.kr/blog" target="_blank" rel="noopener" className="btn-g reveal">전체 글 보기 →</a>
        </div>
        <div className="blog-grid">
          {[
            { href: 'https://www.modoocso.kr/blog/cso-report', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80&fit=crop', tag: '신고제 · 준법', title: '의약품 판촉영업자 신고제, 실제로 무엇을 준비해야 하나', desc: '현장에서 확인해야 할 핵심 운영 요건을 정리했습니다.', delay: '' },
            { href: 'https://www.modoocso.kr/blog/cso-drug-price', img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80&fit=crop', tag: '약가 정책', title: '2026 제네릭 약가 인하, CSO 파트너에게 어떤 영향을 주나', desc: '건정심 확정안 기준 품목별 영향과 대응 방향을 분석했습니다.', delay: ' d2' },
            { href: 'https://www.modoocso.kr/blog/cso-corporation', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop', tag: '법인 설립', title: '개인으로 시작할까, 법인으로 시작할까 — 실무 기준 비교', desc: '거래 구조와 정산 방식에 따라 적합한 형태가 다릅니다.', delay: ' d3' },
          ].map((post, i) => (
            <a key={i} href={post.href} target="_blank" rel="noopener" className={`blog-card reveal${post.delay}`}>
              <img src={post.img} alt={post.tag} className="blog-img" />
              <div className="blog-body">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DIFF2 */}
      <section className="diff2" id="diff2">
        <div className="diff2-layout">
          <div className="diff2-sticky reveal reveal-left">
            <span className="eyebrow">OUR DIFFERENCE</span>
            <h2 className="sec-title">왜 모두의CSO를<br />선택하는가</h2>
            <div className="diff2-img">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&crop=center" alt="파트너십" />
            </div>
            <div className="diff2-quote">
              &ldquo;제약사 수가 많아 보이는 것보다,<br />실제로 파트너가 움직일 수 있는<br />구조인지가 더 중요합니다&rdquo;
            </div>
            <p className="diff2-body">
              우리는 단순 소개로 끝내지 않습니다.<br />
              처음부터 큰 말을 하지 않는 것이 우리의 방식입니다.<br />
              가능한 것과 어려운 것을 먼저 구분하고,<br />실제로 실행되는 방향을 함께 설계합니다.
            </p>
          </div>
          <div className="diff2-items">
            {[
              { n: '01', title: '현장 기준으로 설명합니다', desc: '20년 영업 실무를 아는 기준에서 가능한 것과 어려운 것을 구분해 상담합니다. 들어보기 좋은 말보다 실제 현장 기준으로 말합니다.' },
              { n: '02', title: '정산을 시스템으로 운영합니다', desc: '직접 개발한 정산 시스템으로 내역, 제출 자료, 확인 흐름을 관리합니다. 수기 전달 방식의 누락과 오해를 구조적으로 줄입니다.' },
              { n: '03', title: '수수료를 구조로 설명합니다', desc: '품목별 기준, 공제 여부, 지급 시점, 확인 방식까지 계약 전에 설명합니다. 숫자만 크게 보이는 방식을 지양합니다.' },
              { n: '04', title: '약가 정책 변화를 함께 봅니다', desc: '단순 연결에 끝나지 않고, 약가 인하 정책이 품목별로 어떤 영향을 주는지 분석해 안내합니다. 장기 운영 관점으로 접근합니다.' },
              { n: '05', title: '처음부터 다 된다고 말하지 않습니다', desc: '현재 조건에서 가능한 범위를 먼저 정리합니다. 과장된 기대보다 현실적인 시작이 더 오래 갑니다.' },
            ].map((item, i) => (
              <div key={i} className={`diff2-row reveal d${Math.min(i + 1, 4)}`}>
                <div className="diff2-n">{item.n}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq-layout">
          <div className="faq-sticky reveal reveal-left">
            <span className="eyebrow">FAQ</span>
            <h2 className="sec-title">자주 묻는<br />질문들</h2>
            <div className="faq-img">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop&crop=center" alt="상담" />
            </div>
            <p>상담 전에 궁금한 것들을<br />먼저 정리했습니다.</p>
            <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="faq-btn">직접 상담하기</a>
          </div>
          <div className="faq-list reveal d1">
            {[
              { q: 'CSO 신고제가 무엇인가요?', a: '의약품 판촉영업자는 관련 법령에 따라 신고 및 교육 기준을 갖춰 운영해야 합니다. 세부 기준은 시기와 상황에 따라 달라질 수 있어 상담 시 현재 기준에 맞춰 안내드립니다.' },
              { q: '수수료는 모두 동일한가요?', a: '제약사·품목·조건에 따라 달라질 수 있습니다. 숫자보다 정산 기준과 확인 방식이 명확한지가 더 중요합니다. 계약 전 관련 조건을 사전에 설명하는 방식으로 진행합니다.' },
              { q: '개인도 시작할 수 있나요?', a: '가능한 경우가 있습니다. 다만 거래 구조와 향후 운영 계획에 따라 법인 형태가 더 적합할 수 있습니다. 상담 시 현재 상황에 맞는 구조를 안내드립니다.' },
              { q: '약가 정책 변화가 영향을 주나요?', a: '2026년부터 단계적으로 적용되는 제네릭 약가 조정은 품목 수익 구조에 실질적인 영향을 줄 수 있습니다. 특정 품목 의존도가 높은 경우 상담 시 함께 검토합니다.' },
              { q: '정산은 어떻게 확인하나요?', a: '월 단위 정산을 기본으로 하며 자료 제출 → 확인 → 정산 안내 흐름으로 운영됩니다. 정산 내역은 직접 개발·운영 중인 시스템을 통해 확인할 수 있습니다.' },
              { q: '상담 비용이 있나요?', a: '기본 상담은 무료로 진행합니다.' },
            ].map((faq, i) => (
              <div key={i} className={`faq-item${i === 0 ? ' open' : ''}`}>
                <div className="faq-q" onClick={(e) => toggleFaq(e.currentTarget)}>
                  {faq.q}
                  <div className="faq-toggle">+</div>
                </div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap" id="cta">
        <span className="eyebrow reveal">시작하기</span>
        <h2 className="sec-title reveal d1">
          지금 필요한 것부터<br />함께 보겠습니다
        </h2>
        <p className="cta-sub reveal d2">
          파트너 연결인지, 운영 정리인지, 법인 설계인지 —<br />
          현재 조건에서 가능한 것과 어려운 것을 먼저 구분합니다.
        </p>
        <div className="cta-btns reveal d3">
          <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="btn-cta">카카오로 문의하기</a>
          <a href="tel:01056746574" className="btn-cta-o">전화 상담하기</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <div>
            <span className="foot-logo">모두의<b>CSO</b></span>
            <p className="foot-desc">
              제약 영업 파트너 연결과 운영을 지원합니다.<br />
              20년 현장 경험, 정산 시스템 직접 운영,<br />
              신고제 기준 대응을 바탕으로<br />
              지속 가능한 파트너십을 지향합니다.
            </p>
          </div>
          <div className="foot-col">
            <h5>회사</h5>
            <ul>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">운영 원칙</a></li>
              <li><a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener">카카오 채널</a></li>
              <li><a href="mailto:wrmodoo2025@naver.com">wrmodoo2025@naver.com</a></li>
              <li><a href="tel:01056746574">010-5674-6574</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>파트너 안내</h5>
            <ul>
              <li><a href="#">진행 방식</a></li>
              <li><a href="#">수수료 안내</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>정보</h5>
            <ul>
              <li><a href="https://www.modoocso.kr/blog" target="_blank" rel="noopener">정보센터</a></li>
              <li><a href="#">신고제 안내</a></li>
              <li><a href="#">약가 정책</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">이용약관</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2025 주식회사 우리모두. All rights reserved.</span>
          <span>경기도 시흥시 은계중앙로 306번길 69, 604-11호(대야동, 파크센트로) &nbsp;|&nbsp; 사업자등록번호 : 841-88-03712 &nbsp;|&nbsp; TEL : 010-5674-6574 &nbsp;|&nbsp; wrmodoo2025@naver.com</span>
        </div>
      </footer>
    </>
  )
}
