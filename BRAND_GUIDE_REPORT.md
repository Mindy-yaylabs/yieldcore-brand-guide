# YieldCore Brand Guide & Landing Page 협의 문서

## 📋 Executive Summary

YieldCore 브랜드 가이드 웹사이트가 완성되었습니다. 이를 기반으로 Landing Page 개발을 위한 브랜드 표준과 기술 스택을 공유드립니다.

### 🌐 배포된 브랜드 가이드
- **GitHub Repository**: https://github.com/Mindy-yaylabs/yieldcore-brand-guide
- **Live Website**: [Vercel 배포 URL - 배포 후 업데이트 필요]

---

## 🎨 브랜드 아이덴티티

### 1. 로고 시스템

#### **세 가지 로고 변형**
1. **BI (Brand Identity)**: 공식 문서 및 프레젠테이션용
   - `Yieldcore_BI_bl.png` (검은색 버전)
   - `Yieldcore_BI_wh.png` (흰색 버전)

2. **Logo**: 마케팅 자료 및 일반 사용
   - `Yieldcore_logo_gr.png` (녹색 버전)
   - `Yieldcore_logo_wh.png` (흰색 버전)

3. **Wordmark**: 텍스트 중심 레이아웃
   - `Yieldcore_wordmark_gr.png` (녹색 버전)
   - `Yieldcore_wordmark_wh.png` (흰색 버전)

### 2. 색상 팔레트

#### **Primary Colors (주요 색상)**
```css
--brand-midnight: #0A2A2A;  /* 메인 배경색 */
--brand-ocean: #152E2E;     /* 보조 배경색 */
--brand-slate: #0C1B1B;     /* 어두운 배경색 */
```

#### **Secondary Colors (보조 색상)**
```css
--brand-gold: #F4C430;      /* CTA 버튼, 강조 */
--brand-amber: #E6AC00;     /* 호버 효과 */
--brand-teal: #B6E6E6;      /* 텍스트, 아이콘 */
--brand-white: #FFFFFF;     /* 기본 텍스트 */
```

### 3. 타이포그래피
- **Font Family**: Work Sans
- **Font Weights**: 300 (Light) ~ 900 (Black)
- **Heading Scale**: 72px, 48px, 36px, 30px
- **Body Text**: 18px (기본), 14px (캡션)

---

## 💻 기술 스택

### 현재 브랜드 가이드 구현
```javascript
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "deployment": "Vercel",
  "features": [
    "정적 사이트 생성 (SSG)",
    "반응형 디자인",
    "다크 모드 기본",
    "실시간 색상 테스트 도구",
    "브랜드 자산 다운로드 센터"
  ]
}
```

---

## 🚀 Landing Page 제안

### 1. 구조 제안 (실제 Copy 기반)

#### **Hero Section**
- **H1**: "Institutional-grade yield. Crypto-native access."
- **Subtitle**: "Institutional origination and risk controls, paired with on-chain access to real-world income products."
- **CTAs**: "Open dApp" (Primary) · "View Docs" (Secondary)
- 배경: Gradient (`brand-ocean` → `brand-midnight` → `brand-slate`)

#### **Stats Bar**
- 500+ Stations & vendors (as of Aug 2025)
- 3–45 days Maturities (investor-selectable terms)
- Investor-directed allocation (choose term, size, product)
- On-chain auditability (live positions & flows)

#### **주요 섹션**
1. **Products**: 
   - Gas Station Receivables Note (Featured)
   - Investor-Directed Allocation
   - Program Shelf (In diligence/Exploration)

2. **Insights**: 
   - Vision articles
   - Product deep-dives
   - Case studies

3. **Compliance Footer**: 
   - Legal disclaimers
   - Qualified investor notices

### 2. 디자인 원칙

#### **색상 사용 비율 (60-30-10 규칙)**
- 60%: `brand-midnight` (메인 배경)
- 30%: `brand-ocean`, `brand-slate` (섹션 구분)
- 10%: `brand-gold` (CTA, 강조)

#### **접근성 고려사항**
- WCAG AA 기준 충족
- 최소 대비율: 4.5:1 (일반 텍스트), 3:1 (큰 텍스트)
- 모바일 우선 반응형 디자인

### 3. 컴포넌트 라이브러리

브랜드 가이드에서 재사용 가능한 컴포넌트:
- `Logo.tsx`: 다양한 변형 지원
- `Navigation.tsx`: 반응형 네비게이션
- `ColorSection.tsx`: 색상 표시 컴포넌트
- `Footer.tsx`: 푸터 템플릿

---

## 📦 브랜드 자산 활용

### 다운로드 가능한 자산
1. **로고 패키지**: 모든 로고 변형 (PNG 형식)
2. **색상 가이드**: CSS 변수, Tailwind 설정
3. **타이포그래피 가이드**: 폰트 웨이트 및 크기 규격

### 통합 방법
```bash
# 브랜드 가이드 코드 클론
git clone https://github.com/Mindy-yaylabs/yieldcore-brand-guide.git

# 컴포넌트 복사
cp -r yieldcore-brand-guide/components/* landing-page/components/

# 색상 설정 복사
cp yieldcore-brand-guide/tailwind.config.ts landing-page/
cp yieldcore-brand-guide/lib/colors.ts landing-page/lib/
```

---

## 🎯 Landing Page 개발 로드맵

### Phase 1: 기초 구축 (1주)
- [ ] Next.js 프로젝트 초기화
- [ ] 브랜드 색상 및 타이포그래피 설정
- [ ] 기본 레이아웃 구성
- [ ] 반응형 네비게이션 구현

### Phase 2: 핵심 콘텐츠 (1-2주)
- [ ] Hero 섹션 개발
- [ ] About 섹션 (회사 소개)
- [ ] Products/Services 섹션
- [ ] Team 섹션

### Phase 3: 기능 구현 (1주)
- [ ] 애니메이션 효과
- [ ] 폼 제출 기능
- [ ] SEO 최적화
- [ ] 성능 최적화

### Phase 4: 배포 및 테스트 (3-4일)
- [ ] 크로스 브라우저 테스트
- [ ] 모바일 반응형 테스트
- [ ] 접근성 검증
- [ ] 프로덕션 배포

---

## 💡 기술적 고려사항

### 성능 최적화
- Next.js Image 컴포넌트로 이미지 최적화
- 정적 사이트 생성 (SSG) 활용
- Tailwind CSS 퍼지로 번들 크기 최소화
- Web Vitals 모니터링

### SEO 전략
- 메타데이터 최적화
- Open Graph 태그
- 구조화된 데이터 (JSON-LD)
- Sitemap.xml 생성

### 보안
- CSP (Content Security Policy) 헤더 설정
- HTTPS 강제
- 환경 변수로 민감한 정보 관리

---

## 📊 예상 리소스

### 개발 팀
- Frontend Developer: 1명
- UI/UX Designer: 1명 (선택사항, 브랜드 가이드 활용 시)
- DevOps: 0.5명 (배포 및 CI/CD)

### 예상 일정
- 총 개발 기간: 3-4주
- MVP 출시: 2-3주
- 전체 기능 완성: 4주

### 기술 스택 제안
```json
{
  "frontend": {
    "framework": "Next.js 14",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "animation": "Framer Motion",
    "forms": "React Hook Form + Zod"
  },
  "backend": {
    "api": "Next.js API Routes",
    "database": "PostgreSQL (선택사항)",
    "email": "Resend 또는 SendGrid"
  },
  "deployment": {
    "hosting": "Vercel",
    "domain": "yieldcore.io (가정)",
    "cdn": "Vercel Edge Network",
    "analytics": "Vercel Analytics + Google Analytics"
  }
}
```

---

## 🤝 협의 필요 사항

### 1. 콘텐츠 관련
- [x] Hero Copy 확정 (제공됨)
- [x] Products 설명 확정 (Gas Station Receivables Note 외)
- [ ] Insights 블로그 콘텐츠 (4개 아티클)
- [ ] Program Shelf 상세 설명 (4개 프로그램)
- [ ] Compliance Footer 전체 텍스트

### 2. 기능 관련
- [x] "Open dApp" 버튼 → dApp 연결
- [x] "View Docs" 버튼 → 문서 사이트 연결
- [ ] "Express interest" 버튼 → 관심 표현 폼
- [ ] "Get updates" → 이메일 구독
- [x] Insights 섹션 → 블로그/아티클 페이지

### 3. 기술 관련
- [ ] 도메인 및 호스팅 계획
- [ ] CI/CD 파이프라인 구성
- [ ] 모니터링 및 분석 도구
- [ ] 백엔드 API 필요 여부

---

## 📞 다음 단계

1. **브랜드 가이드 리뷰**: 현재 구현된 브랜드 가이드 웹사이트 검토
2. **Landing Page 요구사항 정의**: 필수 기능 및 콘텐츠 확정
3. **기술 스택 확정**: 제안된 스택 검토 및 승인
4. **개발 일정 수립**: 마일스톤 및 데드라인 설정
5. **킥오프 미팅**: 개발팀과 상세 계획 수립

---

## 📎 첨부 자료

- 브랜드 가이드 웹사이트: [배포 URL]
- GitHub 저장소: https://github.com/Mindy-yaylabs/yieldcore-brand-guide
- 브랜드 자산 다운로드: 웹사이트 내 Downloads 섹션

---

*작성일: 2025년 8월 15일*  
*작성자: Brand Guide Development Team*  
*문의: [연락처 정보]*