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

    #sl-wrap {
      --ink: #2A1D14;
      --paper: #F2ECE3;
      --paper-2: #EFE4D3;
      --paper-3: #F7F1E6;
      --blue: #8B5C3E;
      --violet: #C4956A;
      --pink: #F0C9A2;
      --mint: #E8D9BC;
      --acid: #E8B04B;
      --line: rgba(42,29,20,.2);
      --shadow: 0 28px 90px rgba(61,43,31,.16);
      --ease: cubic-bezier(.16,1,.3,1);
      --radius: 34px;
      --pad: clamp(20px, 3.3vw, 58px);
    }

    #sl-wrap * { box-sizing: border-box; }
    #sl-wrap * { font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif !important; }
    #sl-wrap {
      margin: 0;
      color: var(--ink);
      background:
        radial-gradient(circle at 86% 8%, rgba(240,201,162,.55), transparent 27%),
        radial-gradient(circle at 10% 26%, rgba(232,217,188,.6), transparent 34%),
        linear-gradient(145deg, var(--paper) 0%, #EFE6D4 43%, var(--paper-2) 100%);
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
      word-break: keep-all;
      overflow-x: clip;
    }

    #sl-wrap::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 999;
      opacity: .055;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
      mix-blend-mode: multiply;
    }

    #sl-wrap a,#sl-wrap  button { color: inherit; font: inherit; }
    #sl-wrap a { text-decoration: none; }
    #sl-wrap button { border: 0; background: none; cursor: pointer; }
    #sl-wrap img { display: block; max-width: 100%; }
    #sl-wrap ::selection { background: var(--ink); color: white; }

    #sl-wrap .progress {
      position: fixed;
      left: 0;
      top: 0;
      height: 3px;
      width: 0;
      background: var(--ink);
      z-index: 2500;
    }

    #sl-wrap .nav {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1200;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      padding: 24px var(--pad);
      transition: background .4s, backdrop-filter .4s, padding .4s;
    }
    #sl-wrap .nav.scrolled {
      padding-top: 15px;
      padding-bottom: 15px;
      background: rgba(242,236,227,.75);
      backdrop-filter: blur(18px) saturate(130%);
      border-bottom: 1px solid rgba(42,29,20,.1);
    }
    #sl-wrap .brand {
      display: inline-flex;
      align-items: center;
      gap: 11px;
      justify-self: start;
      font-weight: 900;
      letter-spacing: -.04em;
      font-size: 20px;
      white-space: nowrap;
    }
    #sl-wrap .brand-accent { color: var(--blue); }
    #sl-wrap .brand-mark {
      position: relative;
      width: 28px;
      height: 28px;
      border-radius: 9px;
      background: conic-gradient(from 210deg, var(--blue), #C9986E 55%, #F0DAB8);
      flex: none;
    }
    #sl-wrap .brand-mark::after {
      content: "";
      position: absolute;
      inset: 8px;
      border-radius: 50%;
      background: var(--paper);
    }
    #sl-wrap .nav-links { display: flex; gap: 34px; font-size: 15px; font-weight: 700; }
    #sl-wrap .nav-links a { position: relative; padding: 8px 0; }
    #sl-wrap .nav-links a::after { content:""; position:absolute; left:0; right:100%; bottom:2px; height:1px; background:var(--ink); transition:right .35s var(--ease); }
    #sl-wrap .nav-links a:hover::after { right:0; }
    #sl-wrap .nav-cta {
      justify-self: end;
      display: inline-flex;
      align-items: center;
      gap: 13px;
      border: 1px solid rgba(17,17,17,.5);
      border-radius: 999px;
      padding: 12px 18px 12px 20px;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .08em;
      transition: background .3s, color .3s;
    }
    #sl-wrap .nav-cta:hover { background: var(--ink); color: white; }
    #sl-wrap .nav-cta .arr { width: 27px; height: 27px; border-radius: 50%; background: var(--ink); color:white; display:grid; place-items:center; transition: transform .35s var(--ease); }
    #sl-wrap .nav-cta:hover .arr { background:white; color:var(--ink); transform: rotate(45deg); }
    #sl-wrap .menu-button { display:none; justify-self:end; width:48px; height:48px; border:1px solid rgba(17,17,17,.4); border-radius:50%; place-items:center; }
    #sl-wrap .menu-button span,#sl-wrap  .menu-button span::before { width:18px; height:1px; background:var(--ink); display:block; content:""; transition:.35s; }
    #sl-wrap .menu-button span::before { transform: translateY(5px); }

    #sl-wrap .mobile-menu {
      position: fixed;
      inset: 0;
      z-index: 1150;
      background: #101010;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px var(--pad) 50px;
      transform: translateY(-105%);
      transition: transform .7s var(--ease);
    }
    #sl-wrap .mobile-menu.open { transform: translateY(0); }
    #sl-wrap .mobile-menu a { font-size: clamp(42px, 12vw, 84px); font-weight: 800; letter-spacing: -.07em; line-height: .96; border-bottom: 1px solid rgba(255,255,255,.22); padding: 10px 0 18px; }
    #sl-wrap .mobile-menu small { margin-top: auto; opacity:.6; }

    #sl-wrap .hero {
      position: relative;
      min-height: 100svh;
      padding: 64px var(--pad) 96px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0;
      overflow: hidden;
    }
    #sl-wrap .hero-eyebrow {
      position: absolute;
      top: clamp(90px, 12vh, 130px);
      left: var(--pad);
      z-index: 6;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--ink);
    }
    #sl-wrap .hero-eyebrow::before { content:""; width:34px; height:1px; background:currentColor; }
    #sl-wrap .hero-bg {
      position: absolute; inset: 0; z-index: 0;
      background: url("/searchlight/searchlight-hero-bg.jpg") center/cover no-repeat;
      pointer-events: none;
    }
    #sl-wrap .hero-bg::after {
      content: "";
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 62% at 50% 45%, rgba(242,236,227,.94) 0%, rgba(242,236,227,.72) 55%, rgba(242,236,227,.14) 100%);
    }
    #sl-wrap .hero-copy { position: relative; z-index: 6; width: min(1040px, 94%); display: flex; flex-direction: column; align-items: center; }
    #sl-wrap .hero-sub {
      margin: 22px 0 30px;
      max-width: 520px;
      font-size: clamp(15px, 1.4vw, 18px);
      line-height: 1.75;
      color: #5a4a3e;
      opacity: 1;
      animation: none;
      font-weight: 400;
    }
    #sl-wrap .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; opacity: 1; animation: none; }
    #sl-wrap .btn-dark, #sl-wrap .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 15px 28px; border-radius: 100px; font-size: 15px; font-weight: 700;
      text-decoration: none; transition: all .2s var(--ease);
    }
    #sl-wrap .btn-dark { background: var(--ink); color: #fff; }
    #sl-wrap .btn-dark:hover { background: #000; transform: translateY(-1px); }
    #sl-wrap .btn-outline { background: #fff; border: 1.5px solid var(--line); color: var(--ink); }
    #sl-wrap .btn-outline:hover { border-color: var(--blue); color: var(--blue); }
    #sl-wrap .hero-note-simple { position: relative; z-index: 6; font-size: 13px; color: #8a7a6b; }
    #sl-wrap h1 {
      margin: 0;
      font-size: clamp(2.6rem, 7.4vw, 6.4rem);
      line-height: 1.08;
      letter-spacing: -.04em;
      font-weight: 800;
      text-wrap: balance;
    }
    #sl-wrap h1 .line { display:block; overflow:hidden; }
    #sl-wrap h1 .line > span { display:inline-block; transform: translateY(115%); animation: rise 1.25s var(--ease) forwards; }
    #sl-wrap h1 .line:nth-child(2) > span { animation-delay: .12s; }
    #sl-wrap h1 em { font-style: normal; font-weight: 400; letter-spacing: -.05em; color: var(--blue); }
    @keyframes rise { to { transform: translateY(0); } }



    #sl-wrap .section { position:relative; padding: clamp(90px, 12vw, 190px) var(--pad); }
    #sl-wrap .section-head {
      display:grid;
      grid-template-columns: .72fr 1.28fr;
      gap:40px;
      align-items:start;
      margin-bottom: clamp(54px,8vw,110px);
    }
    #sl-wrap .section-index { font-size:14px; font-weight:900; letter-spacing:.14em; text-transform:uppercase; display:flex; align-items:center; gap:12px; }
    #sl-wrap .section-index::before { content:""; width:34px; height:1px; background:currentColor; }
    #sl-wrap .section-title { margin:0; font-size:clamp(40px,6vw,100px); line-height:1.04; letter-spacing:-.045em; font-weight:800; }
    #sl-wrap .section-title em { font-style:normal; font-weight:400; color:var(--blue); }

    #sl-wrap .showcase { background:#1A120C; color:#F5EEE3; overflow:hidden; }
    #sl-wrap .showcase::before { content:""; position:absolute; width:42vw; height:42vw; background:radial-gradient(circle,rgba(217,162,104,.3),transparent 68%); top:-12vw; right:-10vw; }
    #sl-wrap .showcase .section-head { position:relative; z-index:2; }
    #sl-wrap .projects { display:grid; gap: clamp(22px,4vw,60px); }
    #sl-wrap .project {
      position:relative;
      min-height:min(78vh,850px);
      border-radius: var(--radius);
      overflow:hidden;
      background:#F3EADA;
      color:#2A1D14;
      isolation:isolate;
      transform: translateY(50px);
      opacity:0;
      transition: transform 1s var(--ease), opacity 1s var(--ease);
    }
    #sl-wrap .project.reveal { transform:translateY(0); opacity:1; }
    #sl-wrap .project-meta {
      position:absolute;
      z-index:10;
      left:clamp(22px,3vw,44px);
      right:clamp(22px,3vw,44px);
      top:clamp(22px,3vw,38px);
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:13px;
      font-weight:900;
      letter-spacing:.12em;
      text-transform:uppercase;
    }
    #sl-wrap .project-copy { position:absolute; z-index:10; left:clamp(24px,4vw,62px); bottom:clamp(25px,4.5vw,64px); max-width:680px; }
    #sl-wrap .project-copy h3 { margin:0 0 14px; font-size:clamp(50px,7vw,118px); line-height:1.0; letter-spacing:-.08em; }
    #sl-wrap .project-copy p { margin:0; max-width:480px; font-size:clamp(14px,1.25vw,18px); line-height:1.55; }
    #sl-wrap .project-number { width:58px; height:58px; border:1px solid currentColor; border-radius:50%; display:grid; place-items:center; }
    #sl-wrap .project .view { display:inline-flex; align-items:center; gap:12px; margin-top:24px; font-size:12px; font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
    #sl-wrap .project .view i { width:37px; height:37px; border-radius:50%; background:#2A1D14; color:#fff; display:grid; place-items:center; font-style:normal; transition:transform .35s var(--ease); }
    #sl-wrap .project:hover .view i { transform:rotate(45deg) scale(1.08); }

    #sl-wrap .scene { position:absolute; inset:0; overflow:hidden; }
    #sl-wrap .scene::after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(255,255,255,.95) 0%,rgba(255,255,255,.2) 36%,transparent 64%); }

    #sl-wrap .scene-core { background:linear-gradient(135deg,#F3E7D3,#E9D6BA 48%,#F6ECDC); }
    #sl-wrap .scene-core .grid {
      position:absolute; inset:-20%; opacity:.35;
      background-image: linear-gradient(rgba(42,29,20,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(42,29,20,.15) 1px,transparent 1px);
      background-size:70px 70px;
      transform:perspective(700px) rotateX(64deg) translateY(-8%);
      transform-origin:center bottom;
    }
    #sl-wrap .scene-core .globe { position:absolute; width:min(47vw,650px); aspect-ratio:1; left:52%; top:45%; transform:translate(-50%,-50%); border-radius:50%; background:radial-gradient(circle at 30% 22%,white 0 5%,#F5DDB8 19%,#B9793F 52%,#8B5C3E 70%,#2A1708 100%); box-shadow:inset -70px -60px 90px rgba(46,26,8,.42),0 55px 100px rgba(90,58,32,.34); }
    #sl-wrap .scene-core .globe::before,#sl-wrap .scene-core .globe::after { content:""; position:absolute; inset:12%; border-radius:50%; border:1px solid rgba(255,255,255,.65); transform:rotate(33deg) scaleY(.42); }
    #sl-wrap .scene-core .globe::after { transform:rotate(-50deg) scaleX(.45); }
    #sl-wrap .node { position:absolute; width:12px; height:12px; border:3px solid white; background:#B9793F; border-radius:50%; box-shadow:0 0 0 8px rgba(255,255,255,.15); animation:pulse 2.2s infinite; }
    #sl-wrap .n1{left:38%;top:29%}#sl-wrap .n2{left:66%;top:38%;animation-delay:.5s}#sl-wrap .n3{left:54%;top:62%;animation-delay:1s}#sl-wrap .n4{left:29%;top:55%;animation-delay:1.5s}
    @keyframes pulse{50%{box-shadow:0 0 0 18px rgba(255,255,255,0)}}

    #sl-wrap .scene-pass { background:linear-gradient(145deg,#F8E5D0,#EFDCC4 55%,#E2CBA4); }
    #sl-wrap .phone { position:absolute; width:min(26vw,350px); aspect-ratio:.53; border-radius:48px; background:#2A1D14; left:50%; top:46%; transform:translate(-50%,-50%) rotate(-7deg); padding:12px; box-shadow:0 40px 90px rgba(74,48,26,.32); }
    #sl-wrap .screen { width:100%; height:100%; border-radius:38px; background:linear-gradient(#FFFDF8,#F1E6D2); padding:42px 18px 20px; position:relative; overflow:hidden; }
    #sl-wrap .screen::before { content:""; position:absolute; top:13px; left:50%; transform:translateX(-50%); width:84px; height:22px; background:#2A1D14; border-radius:30px; }
    #sl-wrap .screen-card { height:78px; border-radius:19px; background:white; margin-bottom:11px; box-shadow:0 10px 25px rgba(74,54,32,.1); padding:15px; display:flex; align-items:center; gap:12px; }
    #sl-wrap .screen-card i { width:42px; height:42px; border-radius:13px; background:linear-gradient(135deg,#8B5C3E,#C4956A); }
    #sl-wrap .screen-card span { height:8px; width:52%; background:#2A1D14; border-radius:8px; position:relative; }
    #sl-wrap .screen-card span::after { content:""; position:absolute; top:15px; left:0; width:75%; height:5px; background:#D8C7AC; border-radius:5px; }
    #sl-wrap .float-card { position:absolute; width:220px; padding:20px; border-radius:24px; background:rgba(255,255,255,.76); backdrop-filter:blur(16px); box-shadow:0 25px 70px rgba(101,72,44,.18); border:1px solid rgba(255,255,255,.8); }
    #sl-wrap .fc1{left:16%;top:23%;transform:rotate(-9deg)}#sl-wrap .fc2{right:13%;top:33%;transform:rotate(8deg)}
    #sl-wrap .float-card b{display:block;font-size:34px;letter-spacing:-.05em}#sl-wrap .float-card small{font-weight:800;opacity:.6}

    #sl-wrap .scene-factory { background:linear-gradient(145deg,#F1E8D3,#F6EEDD 58%,#FBE9C4); }
    #sl-wrap .sheet { position:absolute; width:min(30vw,420px); aspect-ratio:.76; border-radius:28px; background:rgba(255,255,255,.9); box-shadow:0 30px 90px rgba(87,64,35,.18); border:1px solid white; padding:26px; left:50%; top:44%; transform:translate(-50%,-50%) rotate(2deg); }
    #sl-wrap .sheet::before { content:"SETTLEMENT / 06"; font-size:12px; font-weight:900; letter-spacing:.13em; }
    #sl-wrap .rows { margin-top:30px; display:grid; gap:12px; }
    #sl-wrap .rows i { display:block; height:36px; border-radius:10px; background:linear-gradient(90deg,#F3EDE1 0 22%,#E3C89B 22% 24%,#F3EDE1 24% 70%,#E8B04B 70%); }
    #sl-wrap .sheet.s2 { transform:translate(-70%,-54%) rotate(-16deg); opacity:.64; }
    #sl-wrap .sheet.s3 { transform:translate(-26%,-50%) rotate(17deg); opacity:.72; }
    #sl-wrap .factory-orb { position:absolute; right:9%; top:14%; width:190px; aspect-ratio:1; border-radius:50%; background:radial-gradient(circle at 30% 25%,white,#F2CE8B 28%,#C4956A 58%,#4A2F18); box-shadow:inset -25px -28px 45px rgba(58,38,15,.25),0 24px 60px rgba(110,80,45,.22); }

    #sl-wrap .scene-light { background:linear-gradient(145deg,#F5E9D6,#EEDFC0 55%,#E4CDA0); color:var(--ink); }
    #sl-wrap .radar { position:absolute; width:min(47vw,650px); aspect-ratio:1; left:55%; top:45%; transform:translate(-50%,-50%); border-radius:50%; border:1px solid rgba(42,29,20,.3); background:repeating-radial-gradient(circle,transparent 0 12%,rgba(42,29,20,.12) 12.2% 12.45%,transparent 12.7% 24%); box-shadow:0 0 90px rgba(196,149,106,.35); }
    #sl-wrap .radar::before { content:""; position:absolute; inset:0; border-radius:50%; background:conic-gradient(from 0deg,transparent 0 72%,rgba(139,92,62,.55) 93%,transparent 100%); animation:radar 5s linear infinite; }
    #sl-wrap .radar::after { content:""; position:absolute; inset:48%; border-radius:50%; background:#2A1D14; box-shadow:0 0 20px rgba(42,29,20,.35),0 0 60px #D9A268; }
    @keyframes radar { to{transform:rotate(360deg)} }
    #sl-wrap .ping { position:absolute; width:16px;height:16px;border-radius:50%;background:#F2C879;box-shadow:0 0 0 11px rgba(242,200,121,.15),0 0 25px #F2C879;z-index:4; }
    #sl-wrap .p1{left:38%;top:28%}#sl-wrap .p2{left:68%;top:37%}#sl-wrap .p3{left:61%;top:62%}

    #sl-wrap .project:nth-child(even) .project-copy { left:auto; right:clamp(24px,4vw,62px); text-align:right; }
    #sl-wrap .project:nth-child(even) .project-copy p { margin-left:auto; }
    #sl-wrap .project:nth-child(even) .view { justify-content:flex-end; }

    #sl-wrap .statement { background:#F7F2E9; overflow:hidden; }
    #sl-wrap .statement-text { margin:0; max-width:1500px; font-size:clamp(38px,6.4vw,116px); line-height:1.08; letter-spacing:-.045em; font-weight:800; }
    #sl-wrap .statement-text span { color:#A6937D; }
    #sl-wrap .statement-text em { font-style:normal; font-weight:400; color:var(--blue); }
    #sl-wrap .statement-bottom { margin-top:clamp(56px,8vw,100px); display:grid; grid-template-columns:1fr 1fr; gap:40px; border-top:1px solid var(--line); padding-top:28px; }
    #sl-wrap .statement-bottom p { margin:0; max-width:820px; font-size:clamp(17px,1.8vw,27px); line-height:1.45; letter-spacing:-.035em; }
    #sl-wrap .pill-list { display:flex; flex-wrap:wrap; gap:9px; justify-content:flex-end; align-content:start; }
    #sl-wrap .pill-list span { border:1px solid var(--ink); border-radius:999px; padding:12px 17px; font-size:12px; font-weight:800; }

    #sl-wrap .services { background:#E8B04B; }
    #sl-wrap .service-list { border-top:1px solid rgba(42,29,20,.34); }
    #sl-wrap .service-row {
      display:grid;
      grid-template-columns:90px 1fr auto;
      gap:25px;
      align-items:center;
      padding:clamp(26px,4vw,56px) 0;
      border-bottom:1px solid rgba(42,29,20,.34);
      position:relative;
      overflow:hidden;
    }
    #sl-wrap .service-row::before { content:""; position:absolute; inset:0; background:#2A1D14; transform:translateY(101%); transition:transform .5s var(--ease); }
    #sl-wrap .service-row:hover::before { transform:translateY(0); }
    #sl-wrap .service-row > * { position:relative; z-index:2; transition:color .35s; }
    #sl-wrap .service-row:hover > * { color:white; }
    #sl-wrap .service-row .no { font-size:12px; font-weight:900; letter-spacing:.12em; }
    #sl-wrap .service-row h3 { margin:0; font-size:clamp(34px,5vw,76px); letter-spacing:-.04em; line-height:1; }
    #sl-wrap .service-row p { margin:0; max-width:360px; font-size:16px; line-height:1.55; }

    #sl-wrap .numbers { background:#201711; color:#F5EEE3; }
    #sl-wrap .number-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid rgba(255,255,255,.2); border-left:1px solid rgba(255,255,255,.2); }
    #sl-wrap .metric { min-height:260px; border-right:1px solid rgba(255,255,255,.2); border-bottom:1px solid rgba(255,255,255,.2); padding:30px; display:flex; flex-direction:column; justify-content:space-between; }
    #sl-wrap .metric strong { font-size:clamp(54px,7vw,112px); line-height:.85; letter-spacing:-.08em; font-weight:700; }
    #sl-wrap .metric span { font-size:12px; opacity:.68; line-height:1.5; }

    #sl-wrap .contact { background:linear-gradient(145deg,#F0E0C8,#F6ECDD 56%,#EFE3CB); overflow:hidden; padding-bottom: clamp(45px, 6vw, 95px); }
    #sl-wrap .cta-box { position:relative; border-radius:28px; padding:clamp(50px,9vw,96px) clamp(24px,6vw,56px); text-align:center; color:#F5EEE3; overflow:hidden; box-shadow:0 30px 80px rgba(42,29,20,.28); background-color:#33220F; }
    #sl-wrap .cta-bg { position:absolute; inset:0; background:url("/searchlight/searchlight-cta-bg.jpg") center/cover no-repeat; z-index:0; }
    #sl-wrap .cta-bg::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg,rgba(28,17,7,.42),rgba(28,17,7,.68)); }
    #sl-wrap .cta-box::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 80% at 50% 120%, rgba(239,194,142,.28), transparent 70%); pointer-events:none; z-index:1; }
    #sl-wrap .cta-box h2, #sl-wrap .cta-box p, #sl-wrap .cta-box .cta-btns { position:relative; z-index:2; }
    #sl-wrap .cta-box h2 { margin:0 0 18px; font-size:clamp(2.5rem,5.4vw,4rem); font-weight:800; letter-spacing:-.03em; line-height:1.2; }
    #sl-wrap .cta-box p { margin:0 auto 36px; max-width:520px; font-size:1.02rem; color:rgba(245,238,227,.72); line-height:1.85; }
    #sl-wrap .cta-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    #sl-wrap .btn { display:inline-flex; align-items:center; gap:8px; padding:16px 28px; border-radius:100px; font-size:15px; font-weight:700; text-decoration:none; transition:all .2s var(--ease); }
    #sl-wrap .btn-cream { background:#F5EEE3; color:#33220F; }
    #sl-wrap .btn-cream:hover { background:#fff; transform:translateY(-1px); }
    #sl-wrap .btn-outline-dark { border:1.5px solid rgba(245,238,227,.35); color:rgba(245,238,227,.9); }
    #sl-wrap .btn-outline-dark:hover { border-color:#EFC28E; color:#EFC28E; }
    #sl-wrap .sl-footer { position:relative; z-index:3; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:24px; margin-top:100px; padding-top:26px; border-top:1px solid var(--line); }
    #sl-wrap .sl-footer .brand { font-size:16px; margin-bottom:10px; }
    #sl-wrap .foot-meta { font-size:12px; letter-spacing:.02em; color:var(--ink); opacity:.5; line-height:1.8; }
    #sl-wrap .foot-links { display:flex; align-items:center; gap:18px; font-size:13px; font-weight:700; }
    #sl-wrap .foot-links a { opacity:.7; transition:opacity .2s; }
    #sl-wrap .foot-links a:hover { opacity:1; }

    #sl-wrap .soon { display:inline-block; margin-bottom:14px; border:1.5px solid currentColor; border-radius:999px; padding:7px 14px; font-size:11px; font-weight:900; letter-spacing:.14em; text-transform:uppercase; }

    #sl-wrap .reveal-text { opacity:0; transform:translateY(42px); transition:opacity .9s var(--ease),transform .9s var(--ease); }
    #sl-wrap .reveal-text.in { opacity:1; transform:none; }

    @media (max-width: 950px) {
      #sl-wrap .nav { grid-template-columns:1fr auto; }
      #sl-wrap .nav-links,#sl-wrap .nav-cta { display:none; }
      #sl-wrap .menu-button { display:grid; }
      #sl-wrap .hero { padding: 96px var(--pad) 60px; }
      #sl-wrap .hero-eyebrow { top: 74px; font-size: 12px; }
      #sl-wrap h1 { font-size:clamp(2.3rem,8vw,3.6rem); }
      #sl-wrap .section-head { grid-template-columns:1fr; gap:20px; }
      #sl-wrap .project { min-height:720px; }
      #sl-wrap .phone { width:260px; }
      #sl-wrap .float-card { width:170px; }
      #sl-wrap .number-grid { grid-template-columns:1fr 1fr; }
      #sl-wrap .statement-bottom { grid-template-columns:1fr; }
      #sl-wrap .pill-list { justify-content:flex-start; }
      #sl-wrap .service-row { grid-template-columns:50px 1fr; }
      #sl-wrap .service-row p { display:none; }
    }

    @media (max-width: 640px) {
      #sl-wrap { --radius:24px; }
      #sl-wrap .nav { padding-top:18px; }
      #sl-wrap .brand { font-size:17px; }
      #sl-wrap .hero { padding: 88px var(--pad) 40px; }
      #sl-wrap h1 { font-size:clamp(2rem,10.5vw,3rem); }
      #sl-wrap .project { min-height:650px; }
      #sl-wrap .project-copy,#sl-wrap .project:nth-child(even) .project-copy { left:22px; right:22px; text-align:left; bottom:28px; }
      #sl-wrap .project:nth-child(even) .project-copy p { margin-left:0; }
      #sl-wrap .project:nth-child(even) .view { justify-content:flex-start; }
      #sl-wrap .project-copy h3 { font-size:54px; }
      #sl-wrap .scene-core .globe { width:96vw; top:39%; }
      #sl-wrap .phone { width:215px; top:40%; }
      #sl-wrap .float-card { width:135px; padding:14px; }
      #sl-wrap .float-card b { font-size:25px; }
      #sl-wrap .fc1 { left:3%;top:22% }#sl-wrap .fc2 { right:2%;top:32% }
      #sl-wrap .sheet { width:68vw; top:38%; padding:18px; }
      #sl-wrap .factory-orb { width:110px; right:2%; }
      #sl-wrap .radar { width:105vw; top:38%; }
      #sl-wrap .number-grid { grid-template-columns:1fr; }
      #sl-wrap .metric { min-height:190px; }
      #sl-wrap .cta-box { padding:56px 24px; border-radius:22px; }
      #sl-wrap .sl-footer { flex-direction:column; gap:16px; margin-top:60px; }
    }

    @media (prefers-reduced-motion: reduce) {
      #sl-wrap *,#sl-wrap *::before,#sl-wrap *::after { animation-duration:.01ms!important; animation-iteration-count:1!important; scroll-behavior:auto!important; transition-duration:.01ms!important; }
    }

    html { scroll-behavior: smooth; }

      ` }} />
      <div id="sl-wrap">
  <div className="progress" aria-hidden="true"></div>

  <header className="nav">
    <a className="brand magnetic" href="#top" aria-label="모두의CSO 홈">
      <span className="brand-mark" aria-hidden="true"></span>
      <span>CSO<span className="brand-accent">써치라이트</span></span>
    </a>
    <div className="nav-links" role="navigation" aria-label="주요 메뉴">
      <a href="#work">무엇이 다른가</a>
      <a href="#approach">우리 생각</a>
      <a href="#services">핵심</a>
      <a href="#contact">시작하기</a>
    </div>
    <a className="nav-cta magnetic" href="https://www.modoocso.kr/" target="_blank" rel="noopener"><span>모두의CSO 파트너 문의</span><span className="arr">↗</span></a>
    <button className="menu-button" aria-label="메뉴 열기" aria-expanded="false"><span></span></button>
  </header>

  <div className="mobile-menu" role="navigation" aria-label="모바일 메뉴">
    <a href="#work">무엇이 다른가</a>
    <a href="#approach">우리 생각</a>
    <a href="#services">핵심</a>
    <a href="#contact">시작하기</a>
    <small>CSO 실무 관리 시스템 / 2026</small>
  </div>

  <main>
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-eyebrow">CSO의 방향을 제시합니다</div>
      <div className="hero-copy">
        <h1>
          <span className="line"><span>아직 써보지 못한</span></span>
          <span className="line"><span><em>CSO 시스템.</em></span></span>
        </h1>
        <p className="hero-sub">시장은 변했습니다. 도구도 바뀌어야 합니다.<br />써치라이트는 기존 방식과 다르게 설계되었습니다.</p>
        <div className="hero-btns">
          <a href="https://www.modoocso.kr/" target="_blank" rel="noopener" className="btn-dark">파트너 문의하기 →</a>
          <a href="#work" className="btn-outline">어떻게 다른가요</a>
        </div>
        <div className="hero-note-simple">by 모두의CSO · © 2026</div>
      </div>
    </section>

    <section className="section showcase" id="work">
      <div className="section-head reveal-text">
        <div className="section-index">01 / 무엇이 다른가</div>
        <h2 className="section-title">공개할 수 있는 <em>것들만.</em></h2>
      </div>

      <div className="projects">
        <article className="project">
          <div className="project-meta"><span>AI / 문서 인식</span><span className="project-number">01</span></div>
          <div className="scene scene-core">
            <div className="grid"></div>
            <div className="globe"><i className="node n1"></i><i className="node n2"></i><i className="node n3"></i><i className="node n4"></i></div>
          </div>
          <div className="project-copy">
            <h3>올리면,<br />읽힙니다.</h3>
            <p>형식을 가리지 않습니다. 어떤 파일이든 올리면 시스템이 읽고 데이터가 됩니다. 반복 입력은 이제 없습니다.</p>
            <span className="view">AI 문서 인식 <i>↗</i></span>
          </div>
        </article>

        <article className="project">
          <div className="project-meta"><span>Search / 실시간</span><span className="project-number">02</span></div>
          <div className="scene scene-pass">
            <div className="float-card fc1"><small>DOCUMENTS</small><b>08/08</b></div>
            <div className="phone">
              <div className="screen">
                <div className="screen-card"><i></i><span></span></div>
                <div className="screen-card"><i></i><span></span></div>
                <div className="screen-card"><i></i><span></span></div>
                <div className="screen-card"><i></i><span></span></div>
              </div>
            </div>
            <div className="float-card fc2"><small>STATUS</small><b>PASS</b></div>
          </div>
          <div className="project-copy">
            <h3>찾으면,<br />바로.</h3>
            <p>46,474개 품목, 약가와 수수료까지 검색 한 번에. 필요한 숫자가 그 자리에서 나옵니다.</p>
            <span className="view">실시간 수수료 계산 <i>↗</i></span>
          </div>
        </article>

        <article className="project">
          <div className="project-meta"><span>Automation / Settlement</span><span className="project-number">03</span></div>
          <div className="scene scene-factory">
            <div className="factory-orb"></div>
            <div className="sheet s2"><div className="rows"><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="sheet s3"><div className="rows"><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="sheet"><div className="rows"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
          </div>
          <div className="project-copy">
            <h3>오차가<br />숨을 곳 없이.</h3>
            <p>심평원 EDI 실적과 정산서를 매월 시스템이 대조합니다. 사람이 놓치는 것을 시스템이 잡습니다.</p>
            <span className="view">정산 자동 대조 <i>↗</i></span>
          </div>
        </article>

        <article className="project">
          <div className="project-meta"><span>Partner Only / 전용</span><span className="project-number">04</span></div>
          <div className="scene scene-light">
            <div className="radar"></div>
            <i className="ping p1"></i><i className="ping p2"></i><i className="ping p3"></i>
          </div>
          <div className="project-copy">
            <h3>파트너만<br />아는 것들.</h3>
            <p>직접 써봐야 보이는 기능들이 있습니다. 모두의CSO 파트너가 되면 전부 함께 제공됩니다.</p>
            <span className="view">파트너 되기 <i>↗</i></span>
          </div>
        </article>
      </div>
    </section>

    <section className="section statement" id="approach">
      <div className="section-index reveal-text">02 / 우리 생각</div>
      <p className="statement-text reveal-text" style={{marginTop: '70px'}}>
        우리는 기존 CSO 툴을 <span>개선하지 않았습니다.</span> 처음부터 <em>다시 만들었습니다.</em>
      </p>
      <div className="statement-bottom reveal-text">
        <p>현장에서 20년을 보낸 사람이 직접 설계한 시스템은 다릅니다. 반복되는 입력·확인·대조에 시간을 쓰지 않도록, 처음부터 그렇게 만들었습니다.</p>
        <div className="pill-list">
          <span>자동 입력</span><span>자동 대조</span><span>즉시 검색</span><span>이력 보존</span><span>혼자서도 가능</span><span>계속 진화</span>
        </div>
      </div>
    </section>

    <section className="section services" id="services">
      <div className="section-head reveal-text">
        <div className="section-index">03 / 핵심</div>
        <h2 className="section-title">기능의 수가 아니라,<br /><em>설계가 다릅니다.</em></h2>
      </div>
      <div className="service-list">
        <div className="service-row reveal-text"><span className="no">01</span><h3>입력이 알아서</h3><p>파일을 올리면 시스템이 읽습니다. 매월 반복되던 입력 작업이 사라집니다.</p></div>
        <div className="service-row reveal-text"><span className="no">02</span><h3>숫자가 바로</h3><p>검색 한 번으로 품목·약가·수수료 구조가 보입니다.</p></div>
        <div className="service-row reveal-text"><span className="no">03</span><h3>데이터가 쌓이게</h3><p>모든 이력이 기록됩니다. 언제든 꺼내볼 수 있습니다.</p></div>
        <div className="service-row reveal-text"><span className="no">04</span><h3>혼자서도</h3><p>전담 인력 없이 전문가 수준의 정산 관리가 됩니다.</p></div>
      </div>
    </section>

    <section className="section numbers">
      <div className="section-head reveal-text">
        <div className="section-index">04 / 숫자로 보는 시스템</div>
        <h2 className="section-title">설명보다<br /><em>숫자가 빠릅니다.</em></h2>
      </div>
      <div className="number-grid reveal-text">
        <div className="metric"><strong data-count="20" data-suffix="년">0</strong><span>제약 영업 현장 경력<br />YEARS IN FIELD</span></div>
        <div className="metric"><strong data-count="80" data-suffix="+">0</strong><span>거래 제약사<br />PHARMA PARTNERS</span></div>
        <div className="metric"><strong data-count="46474">0</strong><span>보유 약가·품목 데이터<br />DRUG PRICE RECORDS</span></div>
        <div className="metric"><strong data-count="12" data-suffix="회">0</strong><span>매월 자동 정산 대조<br />MONTHLY RECONCILIATION</span></div>
      </div>
    </section>

    <section className="section contact" id="contact">
      <div className="section-index reveal-text">05 / 시작하기</div>
      <div className="cta-box reveal-text" style={{marginTop: '48px'}}>
        <div className="cta-bg" aria-hidden="true"></div>
        <h2>설명보다 경험이 빠릅니다</h2>
        <p>모두의CSO 파트너가 되면 써치라이트가 함께합니다.<br />조건이 궁금하면 지금 물어보세요. 물어본 것에만, 숫자로 답합니다.</p>
        <div className="cta-btns">
          <a href="https://www.modoocso.kr/" target="_blank" rel="noopener" className="btn btn-cream">모두의CSO 파트너 문의 →</a>
          <a href="http://pf.kakao.com/_uxiUfn" target="_blank" rel="noopener" className="btn btn-outline-dark">카카오로 문의하기</a>
        </div>
      </div>
      <div className="sl-footer">
        <div>
          <a href="#top" className="brand"><span className="brand-mark" aria-hidden="true"></span><span>CSO<span className="brand-accent">써치라이트</span></span></a>
          <div className="foot-meta">모두의CSO가 직접 개발·운영하는 CSO 실무 관리 시스템<br />© 2026 CSO써치라이트</div>
        </div>
        <div className="foot-links">
          <a href="#services">핵심</a>
          <a href="/searchlight/privacy.html">개인정보처리방침</a>
          <a href="https://www.modoocso.kr/" target="_blank" rel="noopener">모두의CSO ↗</a>
        </div>
      </div>
    </section>
  </main>

  
      </div>

      <script dangerouslySetInnerHTML={{ __html: `

    (() => {
      const body = document.body;

      const nav = document.querySelector('#sl-wrap .nav');
      const progress = document.querySelector('#sl-wrap .progress');
      window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.width = (((scrollY / max) * 100) + '%');
        nav.classList.toggle('scrolled', scrollY > 30);
      }, {passive:true});

      const observer = new IntersectionObserver(entries => entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add(e.target.classList.contains('project') ? 'reveal' : 'in');
          if(e.target.classList.contains('number-grid')) animateCounters(e.target);
          observer.unobserve(e.target);
        }
      }), {threshold:.14});
      document.querySelectorAll('#sl-wrap .reveal-text,#sl-wrap .project,#sl-wrap .number-grid').forEach(el=>observer.observe(el));

      function animateCounters(scope){
        scope.querySelectorAll('[data-count]').forEach(el=>{
          const target = +el.dataset.count;
          const duration = 1500;
          const start = performance.now();
          const suffix = el.dataset.suffix || '';
          const format = n => Math.floor(n).toLocaleString('ko-KR') + suffix;
          function frame(now){
            const t = Math.min(1,(now-start)/duration);
            const eased = 1-Math.pow(1-t,4);
            el.textContent = format(target*eased);
            if(t<1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        });
      }

      document.querySelectorAll('#sl-wrap .magnetic').forEach(el=>{
        el.addEventListener('pointermove', e=>{
          const r=el.getBoundingClientRect(); const x=e.clientX-r.left-r.width/2; const y=e.clientY-r.top-r.height/2;
          el.style.transform=('translate(' + (x*.16) + 'px,' + (y*.16) + 'px)');
        });
        el.addEventListener('pointerleave',()=>el.style.transform='');
      });

      const menuBtn = document.querySelector('#sl-wrap .menu-button');
      const mobileMenu = document.querySelector('#sl-wrap .mobile-menu');
      menuBtn.addEventListener('click',()=>{
        const open = mobileMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded',open);
        body.style.overflow = open ? 'hidden' : '';
      });
      mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
        mobileMenu.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); body.style.overflow='';
      }));

    })();
  
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
