import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'J써치라이트 | 당신이 아직 써보지 못한 CSO 시스템',
  description: '시장은 변했습니다. 도구도 바뀌어야 합니다. J써치라이트는 기존 방식과 다르게 설계되었습니다.',
}

export default function SearchlightPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        #sl-wrap {
          --cream:#f2ece3;--cream-dark:#e8dfd3;--brown:#3d2b1f;--brown-mid:#5c3d2e;--brown-light:#8b5c3e;--brown-pale:#c4956a;--white:#ffffff;--text:#2a1f18;--text-mid:#5a4a3e;--text-muted:#9a8a7e;--border:#ddd0c4;--border-light:#ede5dc;
          font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;
          background:var(--cream);color:var(--text);overflow-x:hidden;-webkit-font-smoothing:antialiased;
          display:block;
        }
        #sl-wrap * { box-sizing:border-box; margin:0; padding:0; }
        #sl-wrap .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
        #sl-wrap .reveal.visible{opacity:1;transform:translateY(0)}
        #sl-wrap .reveal-delay-1{transition-delay:.1s}
        #sl-wrap .reveal-delay-2{transition-delay:.2s}
        #sl-wrap .reveal-delay-3{transition-delay:.3s}

        #sl-wrap nav{position:sticky;top:0;z-index:100;background:rgba(242,236,227,.95);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 6%;height:60px;display:flex;align-items:center;justify-content:space-between;}
        #sl-wrap .nav-logo{font-weight:800;font-size:1.15rem;color:var(--brown);letter-spacing:-.02em}
        #sl-wrap .nav-slogan{position:absolute;left:50%;transform:translateX(-50%);font-size:.9rem;font-weight:700;color:var(--brown-light);letter-spacing:.04em;pointer-events:none}
        #sl-wrap .nav-logo span{color:var(--brown-light)}
        #sl-wrap .nav-links{display:flex;align-items:center;gap:2rem;list-style:none;}
        #sl-wrap .nav-links a{color:var(--text-muted);text-decoration:none;font-size:.875rem;font-weight:500;transition:color .2s}
        #sl-wrap .nav-links a:hover{color:var(--brown)}
        #sl-wrap .nav-cta{background:var(--brown)!important;color:var(--white)!important;padding:.5rem 1.25rem!important;border-radius:100px!important;font-weight:600!important;font-size:.85rem!important}

        #sl-wrap .hero{min-height:65vh;background:var(--cream);display:flex;align-items:center;padding:80px 6% 60px;position:relative;overflow:hidden}
        #sl-wrap .hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.08;pointer-events:none}
        #sl-wrap .hero-inner{max-width:1060px;margin:0 auto;width:100%;position:relative;z-index:1}
        #sl-wrap .hero-title{font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:800;color:var(--brown);line-height:1.15;letter-spacing:-.035em;margin-bottom:1.5rem;animation:sl-fadeUp .6s .08s ease both}
        #sl-wrap .hero-title em{font-style:normal;color:var(--brown-light);display:block}
        #sl-wrap .hero-sub{font-size:1rem;color:var(--text-mid);line-height:1.85;margin-bottom:2.5rem;max-width:480px;animation:sl-fadeUp .6s .16s ease both}
        #sl-wrap .hero-btns{display:flex;gap:1rem;flex-wrap:wrap;animation:sl-fadeUp .6s .24s ease both}
        #sl-wrap .btn-dark{background:var(--brown);color:var(--white);padding:.9rem 2.2rem;border-radius:100px;font-weight:700;font-size:.95rem;text-decoration:none;transition:all .2s;display:inline-block}
        #sl-wrap .btn-dark:hover{background:var(--brown-mid);transform:translateY(-2px);box-shadow:0 8px 24px rgba(61,43,31,.2)}
        #sl-wrap .btn-outline{border:1.5px solid var(--border);color:var(--text-mid);padding:.9rem 2.2rem;border-radius:100px;font-weight:500;font-size:.95rem;text-decoration:none;transition:all .2s;display:inline-block}
        #sl-wrap .btn-outline:hover{border-color:var(--brown-light);color:var(--brown)}

        #sl-wrap .statement{background:var(--brown);padding:0;text-align:center;min-height:65vh;display:flex;flex-direction:column;justify-content:center;position:relative}
        #sl-wrap .statement-inner{max-width:820px;margin:0 auto;padding:120px 6%}
        #sl-wrap .statement h2{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;color:var(--white);line-height:1.25;letter-spacing:-.03em;margin-bottom:1.75rem}
        #sl-wrap .statement h2 em{font-style:normal;color:var(--brown-pale)}
        #sl-wrap .statement p{font-size:1.1rem;color:rgba(255,255,255,.5);line-height:1.9;max-width:560px;margin:0 auto}

        #sl-wrap .split{padding:88px 6%;background:var(--white)}
        #sl-wrap .split-inner{max-width:1060px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
        #sl-wrap .split-inner.reverse{direction:rtl}
        #sl-wrap .split-inner.reverse>*{direction:ltr}
        #sl-wrap .split-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 20px 60px rgba(61,43,31,.12);position:relative;background:var(--cream-dark)}
        #sl-wrap .split-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease}
        #sl-wrap .split-img:hover img{transform:scale(1.03)}
        #sl-wrap .split-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--brown-light);margin-bottom:1rem}
        #sl-wrap .split h2{font-size:clamp(1.6rem,2.8vw,2.2rem);font-weight:800;color:var(--brown);line-height:1.25;letter-spacing:-.03em;margin-bottom:1rem}
        #sl-wrap .split p{font-size:.975rem;color:var(--text-mid);line-height:1.9;margin-bottom:1.5rem}
        #sl-wrap .split-link{font-size:.9rem;font-weight:700;color:var(--brown-light);text-decoration:none;display:inline-flex;align-items:center;gap:.4rem;transition:gap .2s}
        #sl-wrap .split-link:hover{gap:.7rem}

        #sl-wrap .pillars{background:var(--cream);padding:88px 6%}
        #sl-wrap .pillars-inner{max-width:1060px;margin:0 auto}
        #sl-wrap .pillars-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:4rem}
        #sl-wrap .pillars-header h2{font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800;color:var(--brown);line-height:1.25;letter-spacing:-.03em}
        #sl-wrap .pillars-header p{font-size:.975rem;color:var(--text-mid);line-height:1.85}
        #sl-wrap .pillars-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
        #sl-wrap .pillar-card{background:var(--white);border:1px solid var(--border-light);border-radius:18px;padding:2.25rem;transition:all .3s;position:relative;overflow:hidden}
        #sl-wrap .pillar-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--brown-pale),var(--brown-light));transform:scaleX(0);transform-origin:left;transition:transform .3s}
        #sl-wrap .pillar-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(61,43,31,.1)}
        #sl-wrap .pillar-card:hover::after{transform:scaleX(1)}
        #sl-wrap .pillar-num{font-size:2.5rem;font-weight:800;color:var(--cream-dark);letter-spacing:-.05em;margin-bottom:1.25rem;line-height:1}
        #sl-wrap .pillar-card h3{font-size:1rem;font-weight:700;color:var(--brown);margin-bottom:.6rem}
        #sl-wrap .pillar-card p{font-size:.875rem;color:var(--text-muted);line-height:1.75}

        #sl-wrap .dark-feature{background:var(--brown);padding:88px 6%}
        #sl-wrap .dark-feature-header{max-width:1060px;margin:0 auto 4rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end}
        #sl-wrap .dark-feature-header h2{font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800;color:var(--white);line-height:1.25;letter-spacing:-.03em}
        #sl-wrap .dark-feature-header p{font-size:.975rem;color:rgba(255,255,255,.45);line-height:1.9}
        #sl-wrap .feat-grid{max-width:1060px;margin:0 auto;display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
        #sl-wrap .feat-card{position:relative;overflow:hidden;border-radius:20px;min-height:320px;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:transform .3s ease}
        #sl-wrap .feat-card:hover{transform:translateY(-4px)}
        #sl-wrap .feat-card-bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .6s ease;z-index:0}
        #sl-wrap .feat-card:hover .feat-card-bg{transform:scale(1.05)}
        #sl-wrap .feat-card-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,8,4,.93) 0%,rgba(15,8,4,.55) 50%,rgba(15,8,4,.15) 100%);z-index:1}
        #sl-wrap .feat-card-content{position:relative;z-index:2}
        #sl-wrap .feat-num{font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brown-pale);margin-bottom:.6rem}
        #sl-wrap .feat-card h3{font-size:1.2rem;font-weight:800;color:var(--white);line-height:1.25;letter-spacing:-.02em;margin-bottom:.4rem}
        #sl-wrap .feat-card p{font-size:.82rem;color:rgba(255,255,255,.55);line-height:1.6}
        #sl-wrap .feat-card-tag{display:inline-block;margin-top:.85rem;background:rgba(196,149,106,.2);border:1px solid rgba(196,149,106,.35);color:var(--brown-pale);font-size:.7rem;font-weight:600;padding:.25rem .75rem;border-radius:100px;letter-spacing:.03em}

        #sl-wrap .cta-section{background:var(--cream-dark);padding:140px 6%;text-align:center;position:relative;overflow:hidden}
        #sl-wrap .cta-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.07;pointer-events:none}
        #sl-wrap .cta-inner{position:relative;z-index:1;max-width:640px;margin:0 auto}
        #sl-wrap .cta-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--brown-light);margin-bottom:1.25rem}
        #sl-wrap .cta-title{font-size:clamp(2.4rem,5vw,4rem);font-weight:800;color:var(--brown);line-height:1.1;letter-spacing:-.04em;margin-bottom:1.5rem}
        #sl-wrap .cta-title .t-sm{font-size:.72em;font-weight:700;color:var(--brown-light);vertical-align:baseline}
        #sl-wrap .cta-title .t-lg{font-size:1em}
        #sl-wrap .cta-title .t-mid{font-size:.88em;color:var(--brown-mid)}
        #sl-wrap .cta-section p{font-size:1rem;color:var(--text-mid);line-height:1.85;margin-bottom:2.5rem}
        #sl-wrap .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}

        #sl-wrap footer{background:var(--brown);border-top:1px solid rgba(255,255,255,.06);padding:36px 6%}
        #sl-wrap .footer-inner{max-width:1060px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
        #sl-wrap .footer-logo{font-weight:800;font-size:1rem;color:var(--white);letter-spacing:-.02em}
        #sl-wrap .footer-logo span{color:var(--brown-pale)}
        #sl-wrap .footer-note{font-size:.78rem;color:rgba(255,255,255,.3)}
        #sl-wrap .footer-note a{color:rgba(255,255,255,.5);text-decoration:none}
        #sl-wrap .footer-link{font-size:.83rem;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s}
        #sl-wrap .footer-link:hover{color:var(--white)}

        @keyframes sl-fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

        @media(max-width:860px){
          #sl-wrap .split-inner,#sl-wrap .split-inner.reverse{grid-template-columns:1fr;gap:2.5rem;direction:ltr}
          #sl-wrap .pillars-header{grid-template-columns:1fr;gap:1rem}
          #sl-wrap .pillars-grid{grid-template-columns:1fr}
          #sl-wrap .dark-feature-header{grid-template-columns:1fr;gap:1rem}
          #sl-wrap .feat-grid{grid-template-columns:1fr}
          #sl-wrap .nav-links li:not(:last-child){display:none}
        }
      `}} />

      <div id="sl-wrap">
        <nav>
          <div className="nav-logo">J<span>써치라이트</span></div>
          <div className="nav-slogan">CSO의 방향을 제시합니다</div>
          <ul className="nav-links">
            <li><a href="#why">소개</a></li>
            <li><a href="#pillars">핵심</a></li>
            <li><a href="#feature">기능</a></li>
            <li><a href="https://www.modoocso.kr/" target="_blank" className="nav-cta">파트너 문의</a></li>
          </ul>
        </nav>

        <section className="hero">
          <div className="hero-bg" id="sl-heroBg"></div>
          <div className="hero-inner">
            <h1 className="hero-title">당신이 아직<br />써보지 못한<em>CSO 시스템</em></h1>
            <p className="hero-sub">시장은 변했습니다. 도구도 바뀌어야 합니다.<br />J써치라이트는 기존 방식과 다르게 설계되었습니다.</p>
            <div className="hero-btns">
              <a href="https://www.modoocso.kr/" target="_blank" className="btn-dark">모두의CSO 파트너 문의</a>
              <a href="#why" className="btn-outline">어떻게 다른가요 →</a>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <h2 className="reveal">우리는 기존 CSO 툴을<br /><em>개선하지 않았습니다</em></h2>
            <p className="reveal reveal-delay-1">처음부터 다시 만들었습니다.<br />현장에서 20년을 보낸 사람이 직접 설계한 시스템은 다릅니다.</p>
          </div>
        </section>

        <section className="split" id="why">
          <div className="split-inner">
            <div className="split-img reveal">
              <img id="sl-img1" src="" alt="CSO 현장" />
            </div>
            <div className="reveal reveal-delay-1">
              <div className="split-eyebrow">왜 J써치라이트인가</div>
              <h2>반복되는 일에<br />시간을 쓰지 않아도<br />됩니다</h2>
              <p>매월 반복되는 입력, 확인, 대조 작업에 몇 시간씩 쓰고 있다면 — 그건 시스템이 없어서가 아닙니다. 맞는 시스템이 없었던 겁니다.</p>
              <a href="#pillars" className="split-link">어떻게 해결하나요 <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="pillars" id="pillars">
          <div className="pillars-inner">
            <div className="pillars-header">
              <h2 className="reveal">다른 곳에서는<br />보기 어려운 것들</h2>
              <p className="reveal reveal-delay-1">J써치라이트의 핵심은 기능의 수가 아닙니다. 어떻게 설계되었느냐입니다.</p>
            </div>
            <div className="pillars-grid">
              <div className="pillar-card reveal"><div className="pillar-num">01</div><h3>입력이 알아서 됩니다</h3><p>파일을 올리면 시스템이 읽습니다.</p></div>
              <div className="pillar-card reveal reveal-delay-1"><div className="pillar-num">02</div><h3>오차가 숨을 곳이 없습니다</h3><p>대조는 자동입니다. 사람이 놓치는 것을 잡습니다.</p></div>
              <div className="pillar-card reveal reveal-delay-2"><div className="pillar-num">03</div><h3>필요한 숫자가 바로 나옵니다</h3><p>검색 한 번으로 수수료 구조가 보입니다.</p></div>
              <div className="pillar-card reveal reveal-delay-1"><div className="pillar-num">04</div><h3>데이터가 쌓입니다</h3><p>모든 이력이 기록됩니다. 언제든 꺼내볼 수 있습니다.</p></div>
              <div className="pillar-card reveal reveal-delay-2"><div className="pillar-num">05</div><h3>계속 진화합니다</h3><p>현장의 피드백이 기능이 됩니다.</p></div>
              <div className="pillar-card reveal reveal-delay-3"><div className="pillar-num">06</div><h3>혼자서도 됩니다</h3><p>전담 인력 없이도 전문가 수준의 정산 관리.</p></div>
            </div>
          </div>
        </section>

        <section className="split" style={{background:'var(--cream-dark)'}}>
          <div className="split-inner reverse">
            <div className="split-img reveal">
              <img id="sl-img2" src="" alt="데이터 정산" />
            </div>
            <div className="reveal reveal-delay-1">
              <div className="split-eyebrow">모두의CSO 패밀리</div>
              <h2>시스템이 하나로<br />연결됩니다</h2>
              <p>J써치라이트는 단독 툴이 아닙니다. 파트너십 구조, 정산 흐름, 품목 데이터가 하나의 생태계로 연결됩니다.</p>
              <a href="https://www.modoocso.kr/" target="_blank" className="split-link">모두의CSO 알아보기 <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="dark-feature" id="feature">
          <div className="dark-feature-header">
            <h2 className="reveal">공개할 수 있는<br />것들만 보여드립니다</h2>
            <p className="reveal reveal-delay-1">현장에서 써봐야 보이는 것들이 있습니다.</p>
          </div>
          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-bg" id="sl-feat1bg"></div>
              <div className="feat-card-overlay"></div>
              <div className="feat-card-content">
                <div className="feat-num">01 · AI</div>
                <h3>어떤 파일이든<br />데이터가 됩니다</h3>
                <p>형식을 가리지 않습니다. 올리면 읽힙니다.</p>
                <span className="feat-card-tag">AI 문서 인식</span>
              </div>
            </div>
            <div className="feat-card reveal reveal-delay-1">
              <div className="feat-card-bg" id="sl-feat2bg"></div>
              <div className="feat-card-overlay"></div>
              <div className="feat-card-content">
                <div className="feat-num">02 · SEARCH</div>
                <h3>찾으면<br />바로 나옵니다</h3>
                <p>4만 6천여 품목, 수수료까지 한번에.</p>
                <span className="feat-card-tag">실시간 수수료 계산</span>
              </div>
            </div>
            <div className="feat-card reveal reveal-delay-1">
              <div className="feat-card-bg" id="sl-feat3bg"></div>
              <div className="feat-card-overlay"></div>
              <div className="feat-card-content">
                <div className="feat-num">03 · VERIFY</div>
                <h3>오차가<br />숨을 곳이 없습니다</h3>
                <p>대조는 시스템이 합니다.</p>
                <span className="feat-card-tag">정산 자동 대조</span>
              </div>
            </div>
            <div className="feat-card reveal reveal-delay-2">
              <div className="feat-card-bg" id="sl-feat4bg"></div>
              <div className="feat-card-overlay"></div>
              <div className="feat-card-content">
                <div className="feat-num">04 · MORE</div>
                <h3>파트너만 아는<br />기능들</h3>
                <p>직접 써봐야 알 수 있습니다.</p>
                <span className="feat-card-tag">파트너 전용</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-bg" id="sl-ctaBg"></div>
          <div className="cta-inner">
            <div className="cta-eyebrow reveal">지금 시작할 수 있습니다</div>
            <h2 className="cta-title reveal"><span className="t-lg">check</span><span className="t-mid">mate</span><span className="t-sm">!</span></h2>
            <p className="reveal reveal-delay-1">설명보다 경험이 빠릅니다.<br />모두의CSO 파트너가 되면 J써치라이트가 함께합니다.</p>
            <div className="cta-btns reveal reveal-delay-2">
              <a href="https://www.modoocso.kr/" target="_blank" className="btn-dark">모두의CSO 바로가기</a>
              <a href="http://pf.kakao.com/_uxiUfn" target="_blank" className="btn-outline">카카오로 문의하기</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-inner">
            <div className="footer-logo">J<span>써치라이트</span></div>
            <div className="footer-note"><a href="https://www.modoocso.kr/" target="_blank">모두의CSO</a>가 직접 개발·운영하는 CSO 실무 관리 시스템</div>
            <a href="https://www.modoocso.kr/" target="_blank" className="footer-link">modoocso.kr →</a>
          </div>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var U = {
            hero:  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&fit=crop',
            split1:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop',
            split2:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop',
            feat1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&fit=crop',
            feat2: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&fit=crop',
            feat3: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=80&fit=crop',
            feat4: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop',
            cta:   'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1400&q=80&fit=crop',
          };
          function setBg(id, url) {
            var el = document.getElementById(id);
            if (!el) return;
            var i = new Image();
            i.onload = function() { el.style.backgroundImage = "url('" + url + "')"; };
            i.src = url;
          }
          function setImg(id, url) {
            var el = document.getElementById(id);
            if (el) el.src = url;
          }
          setBg('sl-heroBg', U.hero);
          setBg('sl-ctaBg', U.cta);
          setImg('sl-img1', U.split1);
          setImg('sl-img2', U.split2);
          setBg('sl-feat1bg', U.feat1);
          setBg('sl-feat2bg', U.feat2);
          setBg('sl-feat3bg', U.feat3);
          setBg('sl-feat4bg', U.feat4);

          var obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(x) {
              if (x.isIntersecting) x.target.classList.add('visible');
            });
          }, { threshold: .05, rootMargin: '0px 0px -40px 0px' });

          document.querySelectorAll('#sl-wrap .reveal').forEach(function(el) {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
            obs.observe(el);
          });

          window.addEventListener('scroll', function() {
            document.querySelectorAll('#sl-wrap .reveal').forEach(function(el) {
              if (el.getBoundingClientRect().top < window.innerHeight - 40) el.classList.add('visible');
            });
          }, { passive: true });
        })();
      `}} />
    </>
  )
}
