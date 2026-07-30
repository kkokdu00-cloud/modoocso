import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSO써치라이트 | CSO 정산·수수료·EDI 관리 시스템',
  description: 'CSO 정산 자동화, 수수료 계산, EDI 관리, AI 문서 인식까지. 4만 6천여 품목 실시간 검색. CSO 파트너를 위한 실무 관리 시스템 CSO써치라이트.',
  keywords: [
    'CSO', 'CSO써치라이트', 'CSO 정산', 'CSO 수수료', 'CSO 관리',
    'CSO 시스템', 'CSO 솔루션', 'CSO 플랫폼', 'CSO EDI',
    'CSO 자동화', 'CSO 정산 자동화', 'CSO 수수료 계산',
    'CSO 파트너', 'CSO 업무', 'CSO 실무',
    '의약품 CSO', '의약품 정산', '의약품 수수료',
    'EDI 관리', 'EDI 정산', '의약품 EDI',
    '모두의CSO', 'modoocso', 'CSO써치라이트',
    '정산 자동화', '수수료 자동 계산', 'AI 문서 인식',
    '의약품 유통', '의약품 영업대행', '제약 CSO',
    'CSO 수수료율', 'CSO 수수료 조회', 'CSO 정산 프로그램',
    'CSO 관리 시스템', 'CSO 프로그램', '의약품 판촉영업자',
  ],
  verification: {
    other: {
      'naver-site-verification': 'fd9aaa3cb2953ebee125aaf30e7e456cd1cb0f2e',
    },
  },
  openGraph: {
    title: 'CSO써치라이트 | CSO 정산·수수료·EDI 관리 시스템',
    description: 'CSO 정산 자동화, 수수료 계산, EDI 관리, AI 문서 인식까지. 4만 6천여 품목 실시간 검색. CSO 파트너를 위한 실무 관리 시스템.',
    url: 'https://www.modoocso.kr/searchlight',
    siteName: 'CSO써치라이트',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSO써치라이트 | CSO 정산·수수료·EDI 관리 시스템',
    description: 'CSO 정산 자동화, 수수료 계산, EDI 관리, AI 문서 인식까지. 모두의CSO 파트너 전용 실무 시스템.',
  },
  alternates: {
    canonical: 'https://www.modoocso.kr/searchlight',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function SearchlightPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
#sl-wrap * { font-family: var(--font) !important; }

#sl-wrap{
  --bg:#FBF8F2; --card:#FFFFFF; --ink:#2A1D14; --soft:#8A7A6B; --faint:#B3A899;
  --line:#EAE0D0; --line-soft:#F1EADD;
  --brand:#8B5C3E; --brand-deep:#6E4630; --accent:#C4956A; --tint:#F5EDE0;
  --ok:#4C7A52; --ok-bg:#EBF2EA; --warn:#A6692F; --warn-bg:#F8EEDF;
  --font:"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;
  --r:18px;
  --shadow:0 1px 2px rgba(42,29,20,.04),0 12px 32px rgba(42,29,20,.06);
  --shadow-lg:0 2px 4px rgba(42,29,20,.05),0 24px 60px rgba(42,29,20,.1);
}
#sl-wrap *{margin:0;padding:0;box-sizing:border-box}
#sl-wrap{font-family:var(--font);background:var(--bg);color:var(--ink);word-break:keep-all;-webkit-font-smoothing:antialiased;overflow-x:hidden}
#sl-wrap a{text-decoration:none;color:inherit}
#sl-wrap .wrap{max-width:1120px;margin:0 auto;padding:0 24px}
#sl-wrap .reveal{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}
#sl-wrap .reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){#sl-wrap .reveal{transition:none;opacity:1;transform:none}}

#sl-wrap .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 26px;border-radius:12px;font-weight:700;font-size:.94rem;transition:all .2s;white-space:nowrap}
#sl-wrap .btn-dark{background:var(--ink);color:#FFF}
#sl-wrap .btn-dark:hover{background:#000;transform:translateY(-1px);box-shadow:var(--shadow-lg)}
#sl-wrap .btn-soft{background:var(--card);border:1px solid var(--line);color:var(--ink)}
#sl-wrap .btn-soft:hover{border-color:var(--accent);color:var(--brand)}

/* ── NAV ── */
#sl-wrap .sl-nav{position:sticky;top:0;z-index:100;background:rgba(251,248,242,.85);backdrop-filter:blur(14px);border-bottom:1px solid var(--line-soft)}
#sl-wrap .nav-in{max-width:1200px;margin:0 auto;padding:0 24px;height:66px;display:flex;align-items:center;justify-content:space-between}
#sl-wrap .logo{font-weight:800;font-size:1.1rem;letter-spacing:-.02em;display:inline-flex;align-items:center;gap:9px;color:var(--ink)}
#sl-wrap .logo .mark{width:26px;height:26px;border-radius:8px;background:conic-gradient(from 210deg,var(--brand),var(--accent) 55%,#EFD9BC);position:relative;flex:none}
#sl-wrap .logo .mark::after{content:'';position:absolute;inset:8px;border-radius:50%;background:var(--bg)}
#sl-wrap .logo em{font-style:normal;color:var(--brand)}
#sl-wrap .nav-links{display:flex;align-items:center;gap:28px;list-style:none}
#sl-wrap .nav-links a{font-size:.88rem;font-weight:600;color:var(--soft);transition:color .2s;min-height:44px;display:inline-flex;align-items:center}
#sl-wrap .nav-links a:hover{color:var(--ink)}
#sl-wrap .nav-cta{min-height:40px;padding:0 20px;font-size:.85rem;border-radius:10px}

/* ── HERO ── */
#sl-wrap .hero{padding:108px 0 130px;text-align:center;position:relative;overflow:hidden;display:block;min-height:auto}
#sl-wrap .hero-bg{position:absolute;inset:0;background:url("/searchlight/searchlight-hero-bg.jpg") center/cover no-repeat}
#sl-wrap .hero-bg:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 58% 62% at 50% 44%,rgba(251,248,242,.94) 0%,rgba(251,248,242,.72) 55%,rgba(251,248,242,.12) 100%)}
#sl-wrap .hero .wrap{position:relative;z-index:2}

#sl-wrap .kicker{display:inline-flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:100px;padding:8px 16px;font-size:.78rem;font-weight:700;color:var(--brand);margin-bottom:26px;box-shadow:var(--shadow)}
#sl-wrap .kicker::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
#sl-wrap h1{font-size:clamp(2.3rem,5.4vw,4rem);font-weight:800;line-height:1.14;letter-spacing:-.04em;margin-bottom:20px;position:relative}
#sl-wrap h1 em{font-style:normal;color:var(--brand)}
#sl-wrap .hero-sub{font-size:clamp(.98rem,1.6vw,1.12rem);color:var(--soft);line-height:1.8;max-width:560px;margin:0 auto 34px;position:relative;opacity:1;animation:none;font-weight:400}
#sl-wrap .hero-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;position:relative;margin-bottom:18px;opacity:1;animation:none}
#sl-wrap .hero-note{font-size:.8rem;color:var(--faint)}

/* ── 질문 카드 마퀴 ── */
#sl-wrap .marquee-zone{padding:52px 0 26px;overflow:hidden;position:relative}
#sl-wrap .marquee-zone::before,#sl-wrap .marquee-zone::after{content:'';position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none}
#sl-wrap .marquee-zone::before{left:0;background:linear-gradient(90deg,var(--bg),transparent)}
#sl-wrap .marquee-zone::after{right:0;background:linear-gradient(-90deg,var(--bg),transparent)}
#sl-wrap .track{display:flex;gap:16px;width:max-content;margin-bottom:16px;animation:scroll 46s linear infinite}
#sl-wrap .track.rev{animation:scroll-rev 52s linear infinite}
#sl-wrap .track:hover{animation-play-state:paused}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes scroll-rev{from{transform:translateX(-50%)}to{transform:translateX(0)}}
@media(prefers-reduced-motion:reduce){#sl-wrap .track,#sl-wrap .track.rev{animation:none;width:auto;flex-wrap:wrap;justify-content:center}}
#sl-wrap .qcard{width:330px;flex:none;background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px;box-shadow:var(--shadow);text-align:left}
#sl-wrap .qcard .q{font-size:.95rem;font-weight:700;line-height:1.55;margin-bottom:14px;min-height:46px}
#sl-wrap .qcard .q::before{content:'Q.';color:var(--accent);font-weight:800;margin-right:7px}
#sl-wrap .qcard .ans{border-top:1px solid var(--line-soft);padding-top:13px;display:flex;gap:8px;flex-wrap:wrap;align-items:center}
#sl-wrap .qcard .ans-label{font-size:.68rem;font-weight:800;color:var(--faint);letter-spacing:.1em;text-transform:uppercase;width:100%;margin-bottom:2px}
#sl-wrap .pill{display:inline-flex;align-items:center;gap:5px;font-size:.76rem;font-weight:700;padding:5px 11px;border-radius:100px;background:var(--tint);color:var(--brand)}
#sl-wrap .pill.ok{background:var(--ok-bg);color:var(--ok)}
#sl-wrap .pill.ok::before{content:'✓';font-weight:900}
#sl-wrap .pill.warn{background:var(--warn-bg);color:var(--warn)}
#sl-wrap .pill .up{color:var(--ok);font-weight:800}
#sl-wrap .mask{display:inline-block;filter:blur(4px);user-select:none}

/* ── 섹션 공통 ── */
#sl-wrap .section{padding:96px 0}
#sl-wrap .sec-head{max-width:660px;margin:0 auto 54px;text-align:center}
#sl-wrap .sec-eyebrow{font-size:.76rem;font-weight:800;color:var(--brand);letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}
#sl-wrap .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:800;line-height:1.25;letter-spacing:-.035em;margin-bottom:14px}
#sl-wrap .sec-head p{font-size:.98rem;color:var(--soft);line-height:1.8}

/* ── 벤토 ── */
#sl-wrap .bento{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
#sl-wrap .feat{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:30px;box-shadow:var(--shadow);transition:all .25s;display:flex;flex-direction:column;gap:10px;overflow:hidden}
#sl-wrap .feat:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
#sl-wrap .feat h3{font-size:1.14rem;font-weight:800;letter-spacing:-.02em}
#sl-wrap .feat>p{font-size:.9rem;color:var(--soft);line-height:1.8}
#sl-wrap .feat .ui{margin-top:14px;background:var(--bg);border:1px solid var(--line-soft);border-radius:14px;padding:16px;flex:1}
/* 미니 UI: 검색 */
#sl-wrap .mini-search{display:flex;gap:8px;margin-bottom:12px}
#sl-wrap .mini-search .box{flex:1;background:var(--card);border:1.5px solid var(--line);border-radius:9px;padding:9px 13px;font-size:.83rem;color:var(--soft)}
#sl-wrap .mini-search .go{background:var(--brand);color:#FFF;border-radius:9px;padding:0 16px;display:flex;align-items:center;font-size:.8rem;font-weight:800}
#sl-wrap .row{display:flex;justify-content:space-between;align-items:center;padding:9px 2px;border-top:1px solid var(--line-soft);font-size:.82rem}
#sl-wrap .row:first-of-type{border-top:none}
#sl-wrap .row b{font-variant-numeric:tabular-nums}
#sl-wrap .row .pct{color:var(--brand);font-weight:800}
/* 미니 UI: 대조 */
#sl-wrap .match{display:flex;justify-content:space-between;align-items:center;background:var(--card);border:1px solid var(--line-soft);border-radius:10px;padding:10px 13px;font-size:.82rem;font-weight:600;margin-bottom:8px}
#sl-wrap .match:last-child{margin-bottom:0}
/* 미니 UI: 업로드 */
#sl-wrap .drop{border:1.5px dashed var(--accent);border-radius:12px;background:var(--tint);padding:22px;text-align:center;font-size:.84rem;font-weight:700;color:var(--brand);margin-bottom:12px}
#sl-wrap .drop small{display:block;font-weight:500;color:var(--soft);margin-top:5px;font-size:.74rem}
#sl-wrap .prog{height:8px;border-radius:100px;background:var(--line-soft);overflow:hidden;margin-top:8px}
#sl-wrap .prog i{display:block;height:100%;width:78%;border-radius:100px;background:linear-gradient(90deg,var(--accent),var(--brand))}
#sl-wrap .prog-label{display:flex;justify-content:space-between;font-size:.74rem;color:var(--soft);margin-top:6px}
/* 미니 UI: 바 차트 */
#sl-wrap .bars{display:flex;align-items:flex-end;gap:9px;height:96px;margin-bottom:10px}
#sl-wrap .bars i{flex:1;border-radius:7px 7px 3px 3px;background:var(--tint)}
#sl-wrap .bars i.hi{background:linear-gradient(180deg,var(--accent),var(--brand))}
#sl-wrap .bars-label{display:flex;gap:9px;font-size:.68rem;color:var(--faint)}
#sl-wrap .bars-label span{flex:1;text-align:center}

/* ── 스텝 ── */
#sl-wrap .steps-zone{background:var(--card);border-top:1px solid var(--line-soft);border-bottom:1px solid var(--line-soft)}
#sl-wrap .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
#sl-wrap .step{background:var(--bg);border:1px solid var(--line-soft);border-radius:20px;padding:30px;position:relative}
#sl-wrap .step .n{width:34px;height:34px;border-radius:10px;background:var(--ink);color:#FFF;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:800;margin-bottom:18px}
#sl-wrap .step h3{font-size:1.05rem;font-weight:800;margin-bottom:8px;letter-spacing:-.02em}
#sl-wrap .step p{font-size:.88rem;color:var(--soft);line-height:1.8}

/* ── 스탯 ── */
#sl-wrap .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
#sl-wrap .stat{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:28px 22px;text-align:center;box-shadow:var(--shadow)}
#sl-wrap .stat b{display:block;font-size:2rem;font-weight:800;letter-spacing:-.03em;font-variant-numeric:tabular-nums;color:var(--brand)}
#sl-wrap .stat span{font-size:.8rem;color:var(--soft);margin-top:6px;display:block}

/* ── CTA ── */
#sl-wrap .cta{padding:110px 0}
#sl-wrap .cta-box{background:linear-gradient(180deg,rgba(28,17,7,.42),rgba(28,17,7,.68)),url("/searchlight/searchlight-cta-bg.jpg") center/cover no-repeat #33220F;border-radius:28px;padding:80px 40px;text-align:center;color:#F5EEE3;position:relative;overflow:hidden;box-shadow:var(--shadow-lg)}
#sl-wrap .cta-box::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 120%,rgba(239,194,142,.28),transparent 70%);pointer-events:none}
#sl-wrap .cta-box h2{font-size:clamp(1.8rem,3.8vw,2.7rem);font-weight:800;letter-spacing:-.035em;line-height:1.25;margin-bottom:14px;position:relative}
#sl-wrap .cta-box p{font-size:.98rem;color:rgba(245,238,227,.65);line-height:1.85;margin-bottom:34px;position:relative}
#sl-wrap .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;position:relative}
#sl-wrap .btn-cream{background:#F5EEE3;color:#33220F}
#sl-wrap .btn-cream:hover{background:#FFF;transform:translateY(-1px)}
#sl-wrap .btn-outline{border:1.5px solid rgba(245,238,227,.35);color:rgba(245,238,227,.9)}
#sl-wrap .btn-outline:hover{border-color:#EFC28E;color:#EFC28E}

#sl-wrap .sl-footer{border-top:1px solid var(--line-soft);padding:44px 0;background:var(--card)}
#sl-wrap .foot-in{max-width:1120px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:flex-start;gap:24px;flex-wrap:wrap}
#sl-wrap .foot-meta{font-size:.78rem;color:var(--faint);line-height:1.9;margin-top:10px}
#sl-wrap .foot-links{display:flex;gap:22px;font-size:.84rem}
#sl-wrap .foot-links a{color:var(--soft);min-height:44px;display:inline-flex;align-items:center}
#sl-wrap .foot-links a:hover{color:var(--ink)}

@media(max-width:880px){
  #sl-wrap .bento,#sl-wrap .steps{grid-template-columns:1fr}
  #sl-wrap .stats{grid-template-columns:repeat(2,1fr)}
  #sl-wrap .nav-links li:not(.keep){display:none}
  #sl-wrap .section{padding:72px 0}
  #sl-wrap .qcard{width:290px}
  #sl-wrap .cta-box{padding:60px 24px;border-radius:22px}
}
@media(max-width:480px){}

    html { scroll-behavior: smooth; }

      ` }} />
      <div id="sl-wrap">
<div className="sl-nav" role="navigation">
  <div className="nav-in">
    <a href="#" className="logo"><span className="mark"></span>CSO<em>써치라이트</em></a>
    <ul className="nav-links">
      <li><a href="#features">기능</a></li>
      <li><a href="#how">진행 방식</a></li>
      <li><a href="#numbers">숫자</a></li>
      <li className="keep"><a href="https://www.modoocso.kr/" target="_blank" rel="noopener" className="btn btn-dark nav-cta">파트너 문의 →</a></li>
    </ul>
  </div>
</div>

{/* HERO */}
<header className="hero">
  <div className="hero-bg" aria-hidden="true"></div>
  <div className="wrap">
    <div className="kicker">모두의CSO 파트너 전용 시스템</div>
    <h1>현장의 질문에,<br /><em>시스템이 답합니다</em></h1>
    <p className="hero-sub">수수료·약가·정산 대조까지 검색 한 번에. 매달 반복하던 확인 작업을 CSO써치라이트가 대신합니다.</p>
    <div className="hero-btns">
      <a href="https://www.modoocso.kr/" target="_blank" rel="noopener" className="btn btn-dark">파트너 문의하기 →</a>
      <a href="#features" className="btn btn-soft">어떻게 다른가요</a>
    </div>
    <div className="hero-note">파트너 계약과 동시에 계정이 발급됩니다 · 별도 비용 없음</div>
  </div>
</header>

{/* 질문 카드 마퀴 */}
<div className="marquee-zone" aria-hidden="true">
  <div className="track" id="sl-row1">
    <div className="qcard"><div className="q">○○○정 5/50mg 수수료율이 몇이었지?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill">약가 712원</span><span className="pill">수수료 <span className="mask">00%</span></span><span className="pill ok">0.4초 조회</span></div></div>
    <div className="qcard"><div className="q">A제약 6월 정산서, EDI 실적이랑 맞나?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill ok">대조 일치</span><span className="pill">오차 0건</span><span className="pill">자동 대조</span></div></div>
    <div className="qcard"><div className="q">이 품목, 약가 인하 반영된 금액 맞아?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill ok">최신 고시 반영</span><span className="pill">712원 → 688원</span></div></div>
    <div className="qcard"><div className="q">새로 받은 품목 보험코드가 뭐더라?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill">보험코드 64○○○</span><span className="pill ok">즉시 검색</span></div></div>
    <div className="qcard"><div className="q">정산서 수기 입력, 이번 달도 밤새워야 하나?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill ok">AI 문서 인식</span><span className="pill">수기 입력 0건</span></div></div>
  </div>
  <div className="track rev" id="sl-row2">
    <div className="qcard"><div className="q">C제약 정산, 품목 하나가 이상한데 어디지?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill warn">오차 1건 검출</span><span className="pill">품목 자동 표시</span></div></div>
    <div className="qcard"><div className="q">지난달 거래처별 실적 자료 어디 갔지?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill">이력 전체 보존</span><span className="pill ok">즉시 조회</span></div></div>
    <div className="qcard"><div className="q">고혈압 복합제 중에 조건 좋은 품목 뭐 있지?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill">46,474 품목 검색</span><span className="pill">수수료 <span className="mask">00%</span>~</span></div></div>
    <div className="qcard"><div className="q">이 품목 생동 인정 품목인가?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill ok">생동 정보 확인</span><span className="pill">데이터 반영</span></div></div>
    <div className="qcard"><div className="q">직원 없이 혼자서 정산 관리가 되나?</div><div className="ans"><span className="ans-label">Searchlight</span><span className="pill ok">1인 운영 가능</span><span className="pill">시스템이 대조</span></div></div>
  </div>
</div>

{/* 기능 벤토 */}
<section className="section" id="features">
  <div className="wrap">
    <div className="sec-head reveal">
      <div className="sec-eyebrow">Features</div>
      <h2>입력, 검색, 대조.<br />하나의 시스템에서.</h2>
      <p>기능의 수가 아니라 설계가 다릅니다. 파트너가 매달 실제로 쓰는 화면입니다.</p>
    </div>
    <div className="bento">
      <div className="feat reveal">
        <h3>품목·수수료 검색</h3>
        <p>46,474개 품목의 약가와 수수료 구조가 검색 한 번에 나옵니다.</p>
        <div className="ui">
          <div className="mini-search"><div className="box">고혈압 복합제</div><div className="go">검색</div></div>
          <div className="row"><span>○○○정 5/50mg</span><b className="pct"><span className="mask">00%</span></b></div>
          <div className="row"><span><span className="mask">△△△정 10/40mg</span></span><b className="pct"><span className="mask">00%</span></b></div>
          <div className="row"><span><span className="mask">□□□정 5/20mg</span></span><b className="pct"><span className="mask">00%</span></b></div>
        </div>
      </div>
      <div className="feat reveal">
        <h3>정산 자동 대조</h3>
        <p>심평원 EDI 실적과 정산서를 매월 시스템이 대조합니다. 오차는 숨을 곳이 없습니다.</p>
        <div className="ui">
          <div className="match"><span>A제약 6월 정산</span><span className="pill ok">일치</span></div>
          <div className="match"><span>B제약 6월 정산</span><span className="pill ok">일치</span></div>
          <div className="match"><span>C제약 6월 정산</span><span className="pill warn">오차 1건</span></div>
        </div>
      </div>
      <div className="feat reveal">
        <h3>AI 문서 인식</h3>
        <p>형식을 가리지 않습니다. 파일을 올리면 시스템이 읽고 데이터가 됩니다.</p>
        <div className="ui">
          <div className="drop">정산서 파일을 끌어다 놓으세요<small>PDF · 엑셀 · 사진 무엇이든</small></div>
          <div className="prog"><i></i></div>
          <div className="prog-label"><span>인식 중…</span><span>78%</span></div>
        </div>
      </div>
      <div className="feat reveal">
        <h3>이력이 쌓이는 데이터</h3>
        <p>모든 실적과 정산 이력이 기록됩니다. 언제든 꺼내볼 수 있습니다.</p>
        <div className="ui">
          <div className="bars"><i style={{height: '38%'}}></i><i style={{height: '52%'}}></i><i style={{height: '44%'}}></i><i style={{height: '66%'}}></i><i style={{height: '58%'}}></i><i className="hi" style={{height: '88%'}}></i></div>
          <div className="bars-label"><span>1월</span><span>2월</span><span>3월</span><span>4월</span><span>5월</span><span>6월</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 진행 방식 */}
<section className="section steps-zone" id="how">
  <div className="wrap">
    <div className="sec-head reveal">
      <div className="sec-eyebrow">How it works</div>
      <h2>상담부터 정산까지, 세 단계</h2>
    </div>
    <div className="steps">
      <div className="step reveal"><div className="n">1</div><h3>편하게 상담</h3><p>카카오 또는 전화로 현재 상황을 얘기합니다. 영업 전화 없습니다. 물어본 것에만 답합니다.</p></div>
      <div className="step reveal"><div className="n">2</div><h3>계약과 계정 발급</h3><p>모두의CSO 파트너 계약과 동시에 써치라이트 계정이 발급됩니다. 기존 거래처 이관은 필요 없습니다.</p></div>
      <div className="step reveal"><div className="n">3</div><h3>첫 달부터 확인</h3><p>첫 정산부터 EDI 실적 대비 자동 대조 결과를 직접 확인합니다.</p></div>
    </div>
  </div>
</section>

{/* 숫자 */}
<section className="section" id="numbers">
  <div className="wrap">
    <div className="sec-head reveal">
      <div className="sec-eyebrow">Numbers</div>
      <h2>설명보다 숫자가 빠릅니다</h2>
    </div>
    <div className="stats">
      <div className="stat reveal"><b data-count="46474">0</b><span>보유 약가·품목 데이터</span></div>
      <div className="stat reveal"><b data-count="80" data-suffix="+">0</b><span>연결된 제약사</span></div>
      <div className="stat reveal"><b data-count="20" data-suffix="년">0</b><span>현장 경력의 설계자</span></div>
      <div className="stat reveal"><b data-count="12" data-suffix="회">0</b><span>연간 자동 정산 대조</span></div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="cta">
  <div className="wrap">
    <div className="cta-box reveal">
      <h2>설명보다 경험이 빠릅니다</h2>
      <p>모두의CSO 파트너가 되면 써치라이트가 함께합니다.<br />조건이 궁금하면 지금 물어보세요. 물어본 것에만, 숫자로 답합니다.</p>
      <div className="cta-btns">
        <a href="https://www.modoocso.kr/" target="_blank" rel="noopener" className="btn btn-cream">모두의CSO 파트너 문의 →</a>
        <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="btn btn-outline">카카오로 문의하기</a>
      </div>
    </div>
  </div>
</section>

<div className="sl-footer">
  <div className="foot-in">
    <div>
      <a href="#" className="logo"><span className="mark"></span>CSO<em>써치라이트</em></a>
      <div className="foot-meta">모두의CSO가 직접 개발·운영하는 CSO 실무 관리 시스템<br />© 2026 CSO써치라이트</div>
    </div>
    <div className="foot-links">
      <a href="#features">기능</a>
      <a href="#how">진행 방식</a>
      <a href="https://www.modoocso.kr/" target="_blank" rel="noopener">모두의CSO ↗</a>
    </div>
  </div>
</div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `

// 마퀴: 카드 복제로 무한 루프
['sl-row1','sl-row2'].forEach(id=>{
  const t=document.getElementById(id);
  if (t) t.innerHTML+=t.innerHTML;
});
// 리빌
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('#sl-wrap .reveal').forEach(el=>io.observe(el));
// 카운터
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;co.unobserve(e.target);
  const el=e.target,target=+el.dataset.count,suffix=el.dataset.suffix||'';
  const t0=performance.now(),dur=1400;
  (function tick(now){
    const p=Math.min((now-t0)/dur,1),v=target*(1-Math.pow(1-p,3));
    el.textContent=Math.floor(v).toLocaleString('ko-KR')+suffix;
    if(p<1)requestAnimationFrame(tick);
  })(t0);
}),{threshold:.5});
document.querySelectorAll('#sl-wrap [data-count]').forEach(el=>co.observe(el));

      ` }} />
      {/* SEO 키워드 블록 */}
      <div style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}}>
        CSO써치라이트 CSO 정산 CSO 수수료 CSO 관리 시스템 CSO 솔루션 CSO 플랫폼 CSO EDI 관리
        의약품 CSO 의약품 정산 의약품 수수료 계산 의약품 유통 제약 CSO 의약품 영업대행
        CSO 자동화 CSO 정산 자동화 수수료 자동 계산 AI 문서 인식 EDI 정산 자동 대조
        모두의CSO modoocso CSO 파트너 CSO 실무 CSO 업무 효율화
        4만6천 품목 검색 실시간 수수료 계산 정산 오류 방지
      </div>
    </>
  )
}
