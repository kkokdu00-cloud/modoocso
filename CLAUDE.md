@AGENTS.md

# 모두의CSO (modoocso.kr) — 프로젝트 컨텍스트

CSO 업계 정보 허브 + 모두의CSO 유입 창구. 운영자는 형(제약 업계 20년+), 코드는 거의 전부 AI 협업.
업계 도메인 지식(용어·규제·정산 원칙)은 `cso-pharma-domain` 스킬에 있다. 여기엔 이 레포 작업에 필요한 것만.

## 스택 / 배포

- Next.js 16 (App Router) + React 19 + TypeScript. 위 AGENTS.md 경고대로 **학습 데이터 속 Next.js와 다르다** — 코드 쓰기 전 `node_modules/next/dist/docs/` 확인
- 배포: Vercel (main 푸시 → 자동 배포). 레포 `kkokdu00-cloud/modoocso` (public)
- 형 PC 작업 폴더: `C:\Users\User\modoo\modoocso-nextjs\modoocso`
- 블로그 글: `content/blog/*.mdx`, 목록·파싱은 `lib/posts.ts`
- 화면: `app/` 아래 `blog` · `fee` · `searchlight` · `privacy` · `terms`, `sitemap.ts` · `robots.ts`

## 연결

- 홈페이지 "로그인" 버튼 = CSO써치라이트(`j-searchlight.vercel.app`, 테넌트 13 모두1)로 가는 **단순 링크.** SSO·자체 인증 만들지 말 것
- 써치라이트 랜딩은 써치를 직접 팔지 않고 modoocso.kr로 보낸다

## SEO / 콘텐츠

- 역할 분담: **modoocso.kr = 구글·정보 허브**, modoocso.co.kr = 네이버 마케팅 랜딩. 네이버 블로그 글은 modoocso.kr로 링크 유도
- Google Search Console 등록, sitemap 제출, Schema.org JSON-LD 적용 완료
- 네이버 상위 키워드: cso수수료 · cso법인 · cso업체 · cso — 새 글 쓸 때 고려
- 블로그 운영: 매일 약업계 소식 초안 1편 → 형이 좋은 것만 골라 주 3회 업로드. 그날·그주 업계 소식이 토픽, 결론은 모두의CSO 유입
- 톤: 실무자 관점, 데이터 기반, 결론 먼저. 과장·확정 못 하는 법률 해석 금지, 규제는 조문·시행일 명시(약사법 제47조, CSO 신고제 2024-10 시행)
- 경쟁사(CSO24 등) 직접 비방 금지 — 차별점은 기능·구조로만
- 내부 전략(연합 이관 프로그램 등 스킬의 「모두의CSO 전략」)을 공개 글에 그대로 노출하지 말 것
- 협회(KCSOA) 직함·협회 인증을 근거로 쓰지 말 것 — 형은 협회 탈퇴함

## 디자인

- 폰트 Pretendard만 (세리프 섞기·이탤릭 금지). 카피는 분위기형, 기능 나열 안 함
- 팔레트: 전 제품 **화이트 · 블랙 · 블루.** 옛 베이지/브라운(`#8B5C3E` / `#F2ECE3`)·네이비/골드는 폐기 — 코드에 남아 있어도 따르지 말 것
- 디자인 리뉴얼은 형이 피그마 시안을 만드는 중 — 시안 없이 큰 디자인 변경 하지 말 것

## 작업 규칙

- 반말, 짧게, 결론 먼저. 범위 설명 → "ㄱㄱ" 받고 작업. 요청 범위 밖은 안 건드림
- 수정 전 현재 코드부터 읽기. 같은 방식 3번 실패하면 접근을 바꿀 것. 이미 결정한 건 다시 제안 안 함
- 커밋 작성자 계정은 상관없음
