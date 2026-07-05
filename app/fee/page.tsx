import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSO 수수료, 어떻게 정해지나 — 구조로 공개합니다',
  description:
    'CSO 수수료는 숫자 하나로 답할 수 없습니다. 실수령을 결정하는 요소, 계약 전 반드시 확인할 체크리스트, 모두의CSO가 공개하는 기준을 정리했습니다.',
  keywords: ['CSO 수수료', 'CSO 수수료율', 'CSO 수수료 조회', 'CSO 정산', 'CSO 공제', '수수료 투명 공개'],
  alternates: { canonical: 'https://www.modoocso.kr/fee' },
  openGraph: {
    title: 'CSO 수수료, 어떻게 정해지나 — 구조로 공개합니다',
    description: '숫자 하나가 아니라 구조를 봅니다. 실수령을 정하는 요소와 계약 전 체크리스트.',
    url: 'https://www.modoocso.kr/fee',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function FeePage() {
  return (
    <div className="fee-root">
      <style>{css}</style>

      <header className="fee-nav">
        <Link href="/" className="fee-logo">
          모두의<b>CSO</b>
        </Link>
        <Link href="/" className="fee-back">← 홈으로</Link>
      </header>

      {/* HERO — 논지: 숫자 하나로 답하지 않는다 */}
      <section className="fee-hero">
        <span className="fee-eyebrow">수수료 공개</span>
        <h1 className="fee-h1">
          “수수료 몇 %예요?”<br />
          <span className="accent">이 질문엔 답이 없습니다</span>
        </h1>
        <div className="fee-strike" aria-hidden="true">
          <span className="strike-num">12%</span>
          <span className="strike-note">← 숫자 하나로는 아무것도 정해지지 않습니다</span>
        </div>
        <p className="fee-lead">
          같은 수수료율이라도 손에 쥐는 금액은 완전히 달라집니다.
          무엇이 공제되는지, 언제 지급되는지, 어떤 품목인지에 따라섭니다.
          모두의CSO는 숫자 대신 <b>수수료가 정해지는 구조</b>를 먼저 공개합니다.
        </p>
      </section>

      {/* 실수령 공식 */}
      <section className="fee-formula-sec">
        <div className="fee-inner">
          <span className="fee-label">핵심</span>
          <h2 className="fee-h2">중요한 건 수수료율이 아니라 실수령입니다</h2>
          <div className="fee-formula">
            <div className="ff-item ff-base">
              <div className="ff-cap">명목 수수료율</div>
              <div className="ff-val">계약서 숫자</div>
            </div>
            <div className="ff-op">−</div>
            <div className="ff-item ff-minus">
              <div className="ff-cap">공제 · 비용</div>
              <div className="ff-val">세금 · 반품 · 각종 차감</div>
            </div>
            <div className="ff-op">=</div>
            <div className="ff-item ff-result">
              <div className="ff-cap">실수령</div>
              <div className="ff-val">실제로 쥐는 돈</div>
            </div>
          </div>
          <p className="fee-note">
            높은 수수료율을 내세우고 공제 항목을 흐리게 두면, 실수령은 오히려 낮아질 수 있습니다.
            그래서 우리는 숫자보다 <b>공제 항목과 확인 방식</b>을 먼저 설명합니다.
          </p>
        </div>
      </section>

      {/* 실수령을 정하는 3요소 */}
      <section className="fee-factors">
        <div className="fee-inner">
          <span className="fee-label">실수령을 정하는 것</span>
          <h2 className="fee-h2">세 가지가 수수료보다 먼저입니다</h2>
          <div className="fee-cards">
            <div className="fee-card">
              <div className="fc-num">01</div>
              <h3>품목군</h3>
              <p>제네릭·오리지널·전문/일반, 그리고 약가 수준에 따라 기준이 달라집니다. 특정 품목 의존도가 높을수록 약가 정책 변화의 영향도 커집니다.</p>
            </div>
            <div className="fee-card">
              <div className="fc-num">02</div>
              <h3>정산 주기 · 지급 시점</h3>
              <p>월 단위인지, 지급까지 얼마나 걸리는지, 조건부 유보가 있는지. 같은 %라도 현금 흐름은 전혀 다릅니다.</p>
            </div>
            <div className="fee-card">
              <div className="fc-num">03</div>
              <h3>공제 · 비용 구조</h3>
              <p>세금, 반품·감소분 처리, 부대비용 부담 주체. 계약 전에 명시되지 않으면 실수령은 예측할 수 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 계약 전 체크리스트 — 이 페이지의 실질 가치 */}
      <section className="fee-check">
        <div className="fee-inner">
          <span className="fee-label fee-label-light">계약 전 확인</span>
          <h2 className="fee-h2 light">숫자를 듣기 전에 이걸 물어보세요</h2>
          <p className="fee-check-lead">
            어디와 계약하든 아래 7가지가 계약 전에 명확하면, 그 수수료는 믿을 수 있습니다.
          </p>
          <ol className="fee-checklist">
            <li>명목 수수료율이 품목군별로 어떻게 나뉘나요?</li>
            <li>세금과 부대비용은 누가, 어떻게 부담하나요?</li>
            <li>반품·매출 감소분은 정산에서 어떻게 처리되나요?</li>
            <li>정산 주기와 실제 지급까지 걸리는 기간은요?</li>
            <li>조건부로 유보되거나 차감되는 항목이 있나요?</li>
            <li>정산 내역을 내가 직접 확인·대조할 수 있나요?</li>
            <li>약가·정책 변화 시 수수료 기준은 어떻게 조정되나요?</li>
          </ol>
        </div>
      </section>

      {/* 우리가 공개하는 것 */}
      <section className="fee-ours">
        <div className="fee-inner">
          <span className="fee-label">모두의CSO의 기준</span>
          <h2 className="fee-h2">우리가 공개하는 것</h2>
          <div className="fee-ours-grid">
            <div className="fo-item">
              <h3>계약 전 기준 안내</h3>
              <p>연결 범위, 품목군별 수수료 기준, 정산 흐름을 계약 전에 설명합니다. 서명부터 하고 나중에 알려주는 방식을 지양합니다.</p>
            </div>
            <div className="fo-item">
              <h3>공제 항목 명시</h3>
              <p>무엇이 왜 차감되는지 항목 단위로 밝힙니다. 숫자만 크게 보이는 안내를 하지 않습니다.</p>
            </div>
            <div className="fo-item">
              <h3>직접 확인 가능한 정산</h3>
              <p>직접 개발·운영하는 정산 시스템으로 내역을 확인하고 대조할 수 있습니다. 수기 방식의 누락과 오해를 구조적으로 줄입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fee-cta">
        <div className="fee-inner">
          <h2 className="fee-cta-title">
            내 품목 기준으로<br />수수료 구조를 확인하세요
          </h2>
          <p className="fee-cta-sub">
            품목군과 거래 조건을 알려주시면, 그 기준의 수수료 구조와 공제 항목을 직접 설명해 드립니다.
          </p>
          <div className="fee-cta-btns">
            <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="fee-btn-p">카카오로 상담하기</a>
            <a href="tel:01056746574" className="fee-btn-g">전화 상담 010-5674-6574</a>
          </div>
        </div>
      </section>

      <footer className="fee-footer">
        <span>
          <b>모두의CSO</b> · 주식회사 우리모두 · CSO 수수료를 구조로 설명하는 파트너 플랫폼
        </span>
        <Link href="/" className="fee-footer-link">modoocso.kr →</Link>
      </footer>
    </div>
  )
}

const css = `
.fee-root{--cream:#f2ece3;--cream2:#e8dfd3;--deep:#2c2018;--brown:#3d2b1f;--brown2:#5c3d2e;--muted:#8c7b6b;--accent:#D4846A;--line:#ddd0c4;background:var(--cream);color:var(--deep);min-height:100vh;}
.fee-root *{box-sizing:border-box;}
.fee-inner{max-width:820px;margin:0 auto;}
.fee-label{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;}
.fee-label-light{color:var(--accent);}
.fee-h2{font-size:clamp(1.5rem,3vw,2.1rem);font-weight:800;color:var(--brown);letter-spacing:-.03em;line-height:1.25;margin:0 0 1.5rem;}
.fee-h2.light{color:var(--cream);}

/* nav */
.fee-nav{border-bottom:1px solid var(--line);padding:1.1rem 6%;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:rgba(242,236,227,.92);backdrop-filter:blur(12px);z-index:10;}
.fee-logo{font-weight:800;font-size:1.15rem;color:var(--brown);text-decoration:none;}
.fee-logo b{color:var(--accent);}
.fee-back{font-size:.85rem;font-weight:600;color:var(--brown2);text-decoration:none;}
.fee-back:hover{color:var(--brown);}

/* hero */
.fee-hero{max-width:820px;margin:0 auto;padding:88px 6% 64px;}
.fee-eyebrow{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:1.5rem;}
.fee-h1{font-size:clamp(2.1rem,5vw,3.4rem);font-weight:800;color:var(--brown);line-height:1.18;letter-spacing:-.035em;margin:0 0 2rem;}
.fee-h1 .accent{color:var(--accent);}
.fee-strike{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;}
.strike-num{font-size:clamp(2.4rem,6vw,3.6rem);font-weight:800;color:var(--muted);text-decoration:line-through;text-decoration-thickness:3px;text-decoration-color:var(--accent);letter-spacing:-.03em;}
.strike-note{font-size:.95rem;color:var(--muted);font-weight:500;}
.fee-lead{font-size:1.05rem;line-height:1.9;color:var(--brown2);max-width:620px;}
.fee-lead b{color:var(--brown);font-weight:700;}

/* formula */
.fee-formula-sec{background:#fff;padding:72px 6%;border-top:1px solid var(--line);}
.fee-formula{display:flex;align-items:stretch;gap:12px;flex-wrap:wrap;margin:0 0 1.5rem;}
.ff-item{flex:1;min-width:140px;background:var(--cream);border:1px solid var(--line);border-radius:14px;padding:1.4rem 1.2rem;}
.ff-result{background:var(--brown);border-color:var(--brown);}
.ff-cap{font-size:.78rem;font-weight:700;letter-spacing:.06em;color:var(--muted);margin-bottom:.5rem;}
.ff-val{font-size:1rem;font-weight:700;color:var(--brown);}
.ff-result .ff-cap{color:var(--accent);}
.ff-result .ff-val{color:var(--cream);}
.ff-op{display:flex;align-items:center;font-size:1.6rem;font-weight:700;color:var(--muted);}
.fee-note{font-size:.97rem;line-height:1.9;color:var(--brown2);}
.fee-note b{color:var(--brown);}

/* factors */
.fee-factors{padding:72px 6%;}
.fee-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;}
.fee-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.75rem 1.5rem;transition:transform .25s,box-shadow .25s;}
.fee-card:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(61,43,31,.1);}
.fc-num{font-size:1.6rem;font-weight:800;color:var(--cream2);letter-spacing:-.03em;margin-bottom:.75rem;}
.fee-card h3{font-size:1.05rem;font-weight:800;color:var(--brown);margin:0 0 .5rem;}
.fee-card p{font-size:.9rem;line-height:1.75;color:var(--muted);margin:0;}

/* checklist */
.fee-check{background:var(--brown);padding:80px 6%;}
.fee-check-lead{font-size:1rem;line-height:1.85;color:rgba(255,255,255,.6);margin:0 0 2rem;max-width:600px;}
.fee-checklist{list-style:none;counter-reset:chk;padding:0;margin:0;display:grid;gap:.85rem;}
.fee-checklist li{counter-increment:chk;position:relative;padding:1.1rem 1.3rem 1.1rem 3.4rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;font-size:1rem;color:var(--cream);line-height:1.6;}
.fee-checklist li::before{content:counter(chk);position:absolute;left:1.1rem;top:50%;transform:translateY(-50%);width:1.7rem;height:1.7rem;border-radius:50%;background:var(--accent);color:var(--brown);font-size:.85rem;font-weight:800;display:flex;align-items:center;justify-content:center;}

/* ours */
.fee-ours{padding:72px 6%;}
.fee-ours-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;}
.fo-item{border-top:2px solid var(--accent);padding-top:1.25rem;}
.fo-item h3{font-size:1.02rem;font-weight:800;color:var(--brown);margin:0 0 .6rem;}
.fo-item p{font-size:.9rem;line-height:1.8;color:var(--brown2);margin:0;}

/* cta */
.fee-cta{background:var(--cream2);padding:88px 6%;text-align:center;}
.fee-cta-title{font-size:clamp(1.7rem,3.5vw,2.6rem);font-weight:800;color:var(--brown);line-height:1.2;letter-spacing:-.03em;margin:0 0 1rem;}
.fee-cta-sub{font-size:1rem;line-height:1.8;color:var(--brown2);max-width:520px;margin:0 auto 2.25rem;}
.fee-cta-btns{display:flex;gap:.85rem;justify-content:center;flex-wrap:wrap;}
.fee-btn-p{background:var(--brown);color:var(--cream);padding:.95rem 2rem;border-radius:100px;font-weight:700;font-size:.95rem;text-decoration:none;transition:.2s;}
.fee-btn-p:hover{background:var(--brown2);transform:translateY(-2px);}
.fee-btn-g{border:1.5px solid var(--line);color:var(--brown2);padding:.95rem 2rem;border-radius:100px;font-weight:600;font-size:.95rem;text-decoration:none;transition:.2s;}
.fee-btn-g:hover{border-color:var(--brown);color:var(--brown);}

/* footer */
.fee-footer{background:var(--brown);padding:32px 6%;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;}
.fee-footer span{font-size:.82rem;color:rgba(255,255,255,.45);}
.fee-footer b{color:var(--cream);}
.fee-footer-link{font-size:.85rem;color:rgba(255,255,255,.5);text-decoration:none;}
.fee-footer-link:hover{color:var(--cream);}

@media(max-width:720px){
  .fee-cards,.fee-ours-grid{grid-template-columns:1fr;}
  .fee-formula{flex-direction:column;}
  .ff-op{justify-content:center;}
}
`
