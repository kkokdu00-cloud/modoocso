'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const menuOpenRef = useRef(false);
  const navLinksRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    menuOpenRef.current = !menuOpenRef.current;
    if (navLinksRef.current) {
      if (menuOpenRef.current) {
        navLinksRef.current.style.cssText =
          'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:rgba(29,61,184,0.98);padding:1.5rem 5vw;gap:0.5rem;';
      } else {
        navLinksRef.current.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;

    const handleScroll = () => {
      if (!nav) return;
      nav.style.height = window.scrollY > 60 ? '58px' : '68px';
      nav.style.boxShadow =
        window.scrollY > 60 ? '0 4px 24px rgba(0,0,0,0.2)' : 'none';
    };
    window.addEventListener('scroll', handleScroll);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.why-card,.diff-item,.how-step,.blog-card,.stat-box')
      .forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(18px)';
        (el as HTMLElement).style.transition =
          'opacity 0.45s ease, transform 0.45s ease';
        obs.observe(el);
      });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo.jpg" alt="모두의CSO" />
          <span className="nav-logo-text">모두의 CSO</span>
        </a>
        <ul className="nav-links" ref={navLinksRef}>
          <li><a href="#about">소개</a></li>
          <li><a href="#how">진행방식</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#blog">정보센터</a></li>
          <li><a href="#contact" className="nav-cta">무료 상담</a></li>
        </ul>
        <div className="nav-hamburger" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        {/* floating coins */}
        <div className="hero-bg-deco">
          <div className="coin" style={{left:'60%',width:'70px',height:'70px',animationDuration:'9s',animationDelay:'0s'}}></div>
          <div className="coin" style={{left:'75%',width:'50px',height:'50px',animationDuration:'12s',animationDelay:'2s'}}></div>
          <div className="coin" style={{left:'85%',width:'80px',height:'80px',animationDuration:'10s',animationDelay:'4s'}}></div>
          <div className="coin" style={{left:'90%',width:'45px',height:'45px',animationDuration:'14s',animationDelay:'1s'}}></div>
          <div className="coin" style={{left:'55%',width:'60px',height:'60px',animationDuration:'11s',animationDelay:'6s'}}></div>
          <div className="coin" style={{left:'78%',width:'55px',height:'55px',animationDuration:'8s',animationDelay:'3s'}}></div>
          <div className="coin" style={{left:'67%',width:'65px',height:'65px',animationDuration:'13s',animationDelay:'5s'}}></div>
        </div>

        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              제약 CSO 전문 파트너
            </div>
            <h1 className="hero-title">
              문제는<br />
              <span className="highlight">수수료</span>야!
            </h1>
            <p className="hero-sub">
              모두의CSO는 20여년 제약영업 법인 회사,<br />
              80여개 제약사와 제휴하여 파트너에게<br />
              더 큰 수수료를 제공합니다.<br /><br />
              <strong style={{color:'rgba(255,255,255,0.95)'}}>기본수수료 + 제약사 프로모션 + 추가 인센티브까지!</strong>
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-gold">무료 상담 신청 →</a>
              <a href="#about" className="btn-ghost">더 알아보기</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-main">
              <div className="hero-card-label">모두의CSO 현황</div>
              <div className="hero-stats-grid">
                <div className="stat-box">
                  <div className="stat-num">80<span className="accent">+</span></div>
                  <div className="stat-label">제휴 제약사</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">20<span className="accent">년</span></div>
                  <div className="stat-label">현장 경험</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">동일<span className="accent">↑</span></div>
                  <div className="stat-label">투명한 수수료</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">CSO<span className="accent">✓</span></div>
                  <div className="stat-label">신고제 완비</div>
                </div>
              </div>
              <div className="hero-card-footer">
                <div className="hero-card-footer-icon">🏆</div>
                <p><strong>업계 유일</strong> — 모든 파트너에게 동일 수수료.<br />누구도 역차별 받지 않습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-check">✓</span>CSO 신고제 완비</div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-check">✓</span>공정위 규정 준수</div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-check">✓</span>80여개 제약사 공식 제휴</div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-check">✓</span>수수료 투명 공개</div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-check">✓</span>전담 정산팀 운영</div>
        </div>
      </div>

      {/* WHY CSO */}
      <section className="why-section" id="about">
        <div className="section-inner">
          <div className="why-header">
            <span className="section-tag">왜 CSO인가</span>
            <h2 className="section-title">제약 영업, 이제 CSO로 스마트하게</h2>
            <p className="section-desc">직접고용 없이도 전국 영업망을 운영할 수 있는 가장 효율적인 방식입니다.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">💊</div>
              <h3>CSO란 무엇인가</h3>
              <p>Contract Sales Organization. 제약사 대신 의약품 영업을 대행하는 전문 조직입니다. 2014년 신고제 도입 이후 합법적인 영업 채널로 성장했습니다.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📋</div>
              <h3>CSO 신고제란</h3>
              <p>의약품 판매 대행 시 보건복지부에 신고를 마친 CSO만 활동 가능합니다. 모두의CSO는 신고 요건을 완비한 합법적 파트너입니다.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>수수료 구조</h3>
              <p>제약사로부터 받는 판매 수수료를 파트너에게 투명하게 정산합니다. 숨은 공제 없이, 누구에게나 동일한 기준을 적용합니다.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏥</div>
              <h3>80여개 제약사 라인업</h3>
              <p>대형 제약사부터 전문의약품 특화 중견사까지. 다양한 품목 포트폴리오로 영업 기회를 극대화합니다.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>법인 vs 개인 딜러</h3>
              <p>CSO 법인 설립을 원하는 분, 개인 딜러로 활동을 원하는 분 모두 환영합니다. 각 상황에 맞는 최적 방식을 안내해드립니다.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>디지털 정산 시스템</h3>
              <p>엑셀 수기 정산 시대 끝. 디지털 기반으로 실시간 정산 내역을 확인합니다. 매월 정확하고 빠른 정산으로 신뢰를 쌓아갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFF */}
      <section className="diff-section">
        <div className="section-inner diff-inner">
          <div>
            <span className="section-tag">모두의CSO 차별점</span>
            <h2 className="section-title">왜 모두의CSO인가</h2>
            <p className="section-desc">업계 평균을 넘는 투명성과 경험으로 파트너의 수익을 극대화합니다.</p>
            <div className="diff-list">
              <div className="diff-item">
                <div className="diff-icon">⚖️</div>
                <div>
                  <h4>모두 동일한 수수료</h4>
                  <p>신규든 기존이든, 소형이든 대형이든 동일 기준 적용. 역차별 없음.</p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-icon">🎯</div>
                <div>
                  <h4>20년 현장 경험</h4>
                  <p>제약 영업 현장을 직접 경험한 대표가 운영. 현실적인 조언 제공.</p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-icon">🔗</div>
                <div>
                  <h4>80여개 제약사 네트워크</h4>
                  <p>다수의 제약사와 직접 계약 체결. 중간 단계 없이 파트너에게 직접 연결.</p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-icon">📱</div>
                <div>
                  <h4>디지털 정산 시스템</h4>
                  <p>온라인으로 실시간 정산 내역 확인. 빠르고 투명한 정산.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="diff-right">
            <div className="diff-big">
              <div className="diff-big-num">80<span className="accent">+</span></div>
              <div className="diff-big-label">공식 제휴 제약사 수</div>
            </div>
            <div className="diff-small-row">
              <div className="diff-small">
                <div className="diff-small-num">20<span className="accent">년</span></div>
                <div className="diff-small-label">업계 경험</div>
              </div>
              <div className="diff-small">
                <div className="diff-small-num">100<span className="accent">%</span></div>
                <div className="diff-small-label">투명한 수수료</div>
              </div>
            </div>
            <div className="diff-big">
              <div style={{fontSize:'2.5rem',marginBottom:'0.6rem'}}>🏆</div>
              <div style={{fontSize:'1rem',color:'rgba(255,255,255,0.85)',fontWeight:700,marginBottom:'0.3rem'}}>업계 유일 동일 수수료 정책</div>
              <div className="diff-big-label">모든 파트너에게 동등한 기회</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how-section" id="how">
        <div className="section-inner">
          <div className="how-header">
            <span className="section-tag">진행 방식</span>
            <h2 className="section-title">시작부터 첫 정산까지</h2>
            <p className="section-desc">4단계로 빠르게 CSO 활동을 시작할 수 있습니다.</p>
          </div>
          <div className="how-grid">
            <div className="how-step">
              <div className="how-num">1</div>
              <h3>상담 신청</h3>
              <p>온라인 또는 전화로 간단한 상담을 신청하세요. 현재 상황을 파악합니다.</p>
            </div>
            <div className="how-step">
              <div className="how-num">2</div>
              <h3>계약 체결</h3>
              <p>파트너십 조건을 확인하고 공식 계약 체결. 수수료 조건 사전 공개.</p>
            </div>
            <div className="how-step">
              <div className="how-num">3</div>
              <h3>영업 활동</h3>
              <p>배정된 품목으로 영업 시작. 전담 담당자가 지원합니다.</p>
            </div>
            <div className="how-step">
              <div className="how-num">4</div>
              <h3>정산 수령</h3>
              <p>매월 정확한 정산. 디지털 시스템으로 투명하게 확인.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="section-inner">
          <div className="faq-layout">
            <div className="faq-cta-box">
              <h3>지금 바로<br />무료 상담 받으세요</h3>
              <p>CSO 시작을 고민 중이신가요? 20년 경험의 전문가가 현재 상황에 맞는 최적의 방법을 안내해드립니다.</p>
              <a href="#contact" className="btn-gold">무료 상담 신청</a>
              <div className="faq-contacts">
                <div className="faq-contact">📞 <span>전화: <strong>02-XXX-XXXX</strong></span></div>
                <div className="faq-contact">💬 <span>카카오: <strong>@모두의CSO</strong></span></div>
                <div className="faq-contact">⏰ <span>평일 09:00 – 18:00</span></div>
              </div>
            </div>
            <div>
              <span className="section-tag">자주 묻는 질문</span>
              <h2 className="section-title" style={{marginBottom:'2rem'}}>궁금한 점을<br />바로 해결하세요</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-q">CSO 신고제가 무엇인가요?</summary>
                  <p className="faq-a">2014년 도입된 의약품 판매 대행업 신고 제도입니다. 제약사를 대신해 영업하는 CSO는 보건복지부에 신고를 완료해야 합법적으로 활동할 수 있습니다. 모두의CSO는 신고 요건을 완비하고 있습니다.</p>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">수수료는 어떻게 책정되나요?</summary>
                  <p className="faq-a">제약사별, 품목별로 수수료율이 다릅니다. 모두의CSO는 모든 파트너에게 동일한 수수료를 적용합니다. 계약 전 수수료 조건을 완전히 공개합니다.</p>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">개인도 CSO 활동이 가능한가요?</summary>
                  <p className="faq-a">개인 딜러 형태로도 활동 가능합니다. 다만 법인 형태가 더 유리한 경우가 많습니다. 상황에 맞는 방식을 상담을 통해 안내해드립니다.</p>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">어떤 제약사와 거래 가능한가요?</summary>
                  <p className="faq-a">80여개 제약사와 공식 제휴를 맺고 있습니다. 대형 제약사부터 전문의약품 특화 중견 제약사까지 다양합니다. 구체적인 리스트는 상담 시 안내드립니다.</p>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">정산은 어떻게 이루어지나요?</summary>
                  <p className="faq-a">매월 정기 정산을 진행합니다. 디지털 정산 시스템을 통해 온라인으로 내역을 확인할 수 있으며, 정산 후 이의 신청 기간을 운영합니다.</p>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">약가인하 정책이 CSO에 미치는 영향은?</summary>
                  <p className="faq-a">2026년 건정심 결정에 따라 제네릭 약가 비율이 단계적으로 조정됩니다. 모두의CSO는 약가 변동에 따른 파트너 영향을 최소화하는 방향으로 포트폴리오를 관리합니다.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section" id="blog">
        <div className="section-inner">
          <div className="blog-header">
            <div>
              <span className="section-tag">CSO 정보센터</span>
              <h2 className="section-title">알아야 돈 버는<br />CSO 지식</h2>
            </div>
            <Link href="/blog" className="blog-view-all">전체 글 보기 →</Link>
          </div>
          <div className="blog-grid">
            <a href="/blog/cso-what-is" className="blog-card">
              <div className="blog-thumb" style={{background:'linear-gradient(135deg,#1D3DB8,#4A6FFF)'}}><span>📋</span></div>
              <div className="blog-body">
                <span className="blog-tag">CSO 기초</span>
                <h3>CSO란 무엇인가? 제약 영업 대행의 모든 것</h3>
                <p>CSO의 정의부터 국내 신고제 도입 배경, 합법적 활동 요건까지 총정리합니다.</p>
              </div>
              <div className="blog-meta">2025.03.15 · 8분 읽기</div>
            </a>
            <a href="/blog/cso-fee" className="blog-card">
              <div className="blog-thumb" style={{background:'linear-gradient(135deg,#2952E3,#6B8AFF)'}}><span>💰</span></div>
              <div className="blog-body">
                <span className="blog-tag">수수료</span>
                <h3>CSO 수수료 구조 완전 이해하기</h3>
                <p>판매 수수료, 정산 주기, 공제 항목까지 투명하게 공개합니다.</p>
              </div>
              <div className="blog-meta">2025.03.08 · 6분 읽기</div>
            </a>
            <a href="/blog/cso-corporation" className="blog-card">
              <div className="blog-thumb" style={{background:'linear-gradient(135deg,#3B5FD9,#7B9BFF)'}}><span>🏢</span></div>
              <div className="blog-body">
                <span className="blog-tag">법인설립</span>
                <h3>제약 CSO 법인 설립 완전 가이드</h3>
                <p>법인 vs 개인, 어떤 방식이 유리한지 비교 분석합니다.</p>
              </div>
              <div className="blog-meta">2025.02.28 · 7분 읽기</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <span className="section-tag">지금 시작하기</span>
          <h2 className="section-title">파트너가 될 준비가<br />되셨나요?</h2>
          <p className="section-desc">20년 경험의 전문가와 함께 제약 영업의 새로운 가능성을 열어보세요. 첫 상담은 완전 무료입니다.</p>
          <div className="cta-btns">
            <a href="tel:02XXXXXXXX" className="btn-gold">📞 지금 전화하기</a>
            <a href="#" className="btn-ghost">💬 카카오 문의</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{marginBottom:'1rem',display:'flex'}}>
                <img src="/logo.jpg" alt="모두의CSO" />
                <span className="nav-logo-text" style={{marginLeft:'0.6rem'}}>모두의 CSO</span>
              </a>
              <p>투명한 수수료, 20년 현장 경험.<br />80여개 제약사와 함께하는<br />제약 영업 전문 파트너.</p>
            </div>
            <div className="footer-col">
              <h4>서비스</h4>
              <ul>
                <li><a href="/about">회사 소개</a></li>
                <li><a href="/partner">파트너 등록</a></li>
                <li><a href="/pharma">제약사 리스트</a></li>
                <li><a href="/fee">수수료 안내</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>정보</h4>
              <ul>
                <li><Link href="/blog">CSO 정보센터</Link></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/news">업계 뉴스</a></li>
                <li><a href="/policy">약가 정책</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>연락처</h4>
              <ul>
                <li><a href="tel:02XXXXXXXX">📞 02-XXX-XXXX</a></li>
                <li><a href="mailto:info@modoocso.co.kr">✉ info@modoocso.co.kr</a></li>
                <li><a href="#">💬 카카오 채널</a></li>
                <li><a href="#">평일 09:00–18:00</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 모두의CSO. All rights reserved.</span>
            <span>사업자번호: XXX-XX-XXXXX | 서울시 XX구</span>
          </div>
        </div>
      </footer>
    </>
  );
}
