# YieldCore Landing Page 구현 가이드

## 📋 Overview
실제 Landing Page Copy를 기반으로 한 구현 가이드입니다.

---

## 🏗️ Page Structure

### 1. Hero Section

```jsx
// Component: HeroSection.tsx
<section className="min-h-screen bg-gradient-to-br from-brand-ocean via-brand-midnight to-brand-slate">
  <h1 className="text-5xl md:text-7xl font-black text-white">
    Institutional-grade yield. 
    <span className="text-brand-gold">Crypto-native access.</span>
  </h1>
  
  <p className="text-xl text-brand-teal">
    Institutional origination and risk controls, paired with 
    on-chain access to real-world income products.
  </p>
  
  <div className="flex gap-4">
    <button className="bg-brand-gold hover:bg-brand-amber text-brand-midnight">
      Open dApp
    </button>
    <button className="border border-brand-teal text-white hover:bg-brand-ocean">
      View Docs
    </button>
  </div>
</section>
```

### 2. Stats Bar

```jsx
// Component: StatsBar.tsx
<section className="bg-brand-midnight border-y border-brand-teal/20">
  <div className="grid md:grid-cols-4 gap-8">
    <StatItem 
      value="500+"
      label="Stations & vendors"
      sublabel="as of Aug 2025"
    />
    <StatItem 
      value="3–45 days"
      label="Maturities"
      sublabel="investor-selectable terms"
    />
    <StatItem 
      label="Investor-directed allocation"
      sublabel="choose term, size, product"
    />
    <StatItem 
      label="On-chain auditability"
      sublabel="live positions & flows"
    />
  </div>
</section>
```

### 3. Products Section

```jsx
// Component: ProductsSection.tsx
<section className="bg-brand-slate">
  <h2 className="text-4xl font-bold text-white">Products</h2>
  <p className="text-brand-teal">
    Institutionally sourced income products with transparent, on-chain operations.
  </p>
  
  {/* Gas Station Receivables Note - Featured Product */}
  <div className="bg-brand-ocean border border-brand-gold/30 rounded-xl p-8">
    <h3 className="text-2xl font-bold text-white">
      Gas Station Receivables Note
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      <ProductFeature label="Tenor" value="3–45 days" />
      <ProductFeature label="Collateral" value="Verified card-settlement receivables" />
      <ProductFeature label="Redemption" value="At maturity" note="auto-rollover on by default" />
      <ProductFeature label="Access" value="Qualified investors · On-chain auditability" />
    </div>
    <button className="bg-brand-gold text-brand-midnight">View details</button>
  </div>
  
  {/* Investor-Directed Allocation */}
  <div className="bg-brand-midnight/50 rounded-xl p-6">
    <h3 className="text-xl font-bold text-white">
      Investor-Directed Allocation
    </h3>
    <ul className="text-brand-teal">
      <li>Build allocations across available programs</li>
      <li>Choose term, size, rollover</li>
    </ul>
    <button className="bg-brand-ocean text-white">Open dApp</button>
  </div>
</section>
```

### 4. Program Shelf

```jsx
// Component: ProgramShelf.tsx
<section className="bg-brand-midnight">
  <h3 className="text-2xl font-bold text-white">Program Shelf</h3>
  <p className="text-brand-teal">
    We're continuously sourcing institutional-grade RWA programs. 
    Get notified when new deals go live.
  </p>
  
  <div className="grid md:grid-cols-2 gap-6">
    <ProgramCard 
      title="Commercial Real-Estate–Backed Loans"
      status="In diligence"
      features={[
        "Loans collateralized by income-producing CRE",
        "SPV notes with valuation & LTV controls"
      ]}
      statusColor="brand-amber"
    />
    
    <ProgramCard 
      title="SME Card-Receivable Advances"
      status="In diligence"
      features={[
        "Working-capital advances secured by daily card sales",
        "Short to mid-tenor; transparent settlement flows"
      ]}
      statusColor="brand-amber"
    />
    
    <ProgramCard 
      title="Logistics & Equipment Lease Notes"
      status="In diligence"
      features={[
        "Lease receivables from trucks, construction equipment",
        "Asset-backed cash flows with custody controls"
      ]}
      statusColor="brand-amber"
    />
    
    <ProgramCard 
      title="Art-Backed Loans"
      status="Exploration"
      features={[
        "Loans secured by authenticated artworks",
        "Conservative LTV discipline and monitoring"
      ]}
      statusColor="brand-teal"
    />
  </div>
  
  <button className="bg-brand-ocean text-white">Get updates</button>
</section>
```

### 5. Insights Section

```jsx
// Component: InsightsSection.tsx
<section className="bg-brand-slate">
  <h2 className="text-4xl font-bold text-white">Insights</h2>
  <p className="text-brand-teal">
    Ideas and field notes from the YieldCore team.
  </p>
  
  <div className="grid md:grid-cols-2 gap-6">
    <InsightCard 
      title="The Convergence of Web2 Assets and Web3 Capital"
      category="Vision"
      date="Aug 08, 2025"
      featured={true}
    />
    
    <InsightCard 
      title="How YieldCore Builds a New Revenue Model"
      subtitle="The Flow of Tokenizing Gas Station Receivables"
      category="Product"
      date="Aug 08, 2025"
    />
    
    <InsightCard 
      title="The Real Problem in DeFi Isn't Yield – It's Sustainability"
      category="Vision"
      date="Aug 08, 2025"
    />
    
    <InsightCard 
      title="Building Real-World-Linked DeFi with 500 Gas Stations"
      subtitle="The YieldCore × OilDealer Story"
      category="Case Study"
      date="Aug 08, 2025"
    />
  </div>
  
  <button className="text-brand-gold hover:text-brand-amber">
    Read all posts →
  </button>
</section>
```

### 6. Compliance Footer

```jsx
// Component: ComplianceFooter.tsx
<footer className="bg-brand-midnight/90 border-t border-brand-teal/20">
  <div className="text-sm text-gray-400 max-w-4xl mx-auto">
    <p>
      This material is for informational purposes only and does not constitute 
      an offer to sell or a solicitation of an offer to buy any securities. 
      Products are available to qualified/accredited investors only and may not 
      be available in certain jurisdictions. Target returns are not guaranteed. 
      See documentation for risks and definitions.
    </p>
  </div>
</footer>
```

---

## 🎨 Design System

### Color Usage by Section

| Section | Background | Text Primary | Text Secondary | Accent |
|---------|------------|--------------|----------------|---------|
| Hero | Gradient (ocean→midnight→slate) | White | Teal | Gold |
| Stats Bar | Midnight | White | Teal | Gold (highlights) |
| Products | Slate | White | Teal | Gold (CTAs) |
| Program Shelf | Midnight | White | Teal | Amber/Teal (status) |
| Insights | Slate | White | Teal | Gold (links) |
| Compliance | Midnight/90 | Gray-400 | - | - |

### Typography Hierarchy

```css
/* Hero */
h1 { 
  font-size: 72px; 
  font-weight: 900; 
  line-height: 1.1; 
}

/* Section Titles */
h2 { 
  font-size: 48px; 
  font-weight: 700; 
}

/* Card Titles */
h3 { 
  font-size: 24px; 
  font-weight: 700; 
}

/* Body */
p { 
  font-size: 18px; 
  line-height: 1.6; 
}

/* Labels & Metadata */
.label { 
  font-size: 14px; 
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 0.05em; 
}
```

---

## 🔧 Component Architecture

### Reusable Components

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

// components/ui/Card.tsx
interface CardProps {
  status?: 'active' | 'in-diligence' | 'exploration'
  featured?: boolean
  children: React.ReactNode
}

// components/ui/StatItem.tsx
interface StatItemProps {
  value?: string
  label: string
  sublabel?: string
  icon?: React.ReactNode
}
```

### Data Structure

```typescript
// types/product.ts
interface Product {
  id: string
  name: string
  status: 'active' | 'in-diligence' | 'exploration'
  tenor?: string
  collateral?: string
  features: string[]
  cta: {
    text: string
    action: string
  }
}

// types/insight.ts
interface Insight {
  id: string
  title: string
  subtitle?: string
  category: 'Vision' | 'Product' | 'Case Study'
  date: string
  slug: string
  featured?: boolean
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */
/* sm: 640px+ */
/* md: 768px+ */
/* lg: 1024px+ */
/* xl: 1280px+ */
/* 2xl: 1536px+ */
```

### Layout Adjustments

- **Mobile**: Single column, stacked CTAs, hamburger menu
- **Tablet**: 2-column grids, side-by-side CTAs
- **Desktop**: Full layouts, 3-4 column grids, expanded navigation

---

## 🚀 Implementation Priority

### Phase 1: Core Structure (Week 1)
1. Hero Section with CTAs
2. Navigation (sticky header)
3. Stats Bar
4. Footer with compliance text

### Phase 2: Product Showcase (Week 2)
1. Gas Station Receivables Note card
2. Investor-Directed Allocation
3. Program Shelf grid
4. Express Interest forms

### Phase 3: Content & Polish (Week 3)
1. Insights section
2. Animations (Framer Motion)
3. Mobile optimization
4. Performance tuning

### Phase 4: Integration (Week 4)
1. dApp connection
2. Documentation links
3. Analytics setup
4. SEO optimization

---

## 💻 Tech Stack Recommendations

```javascript
{
  "core": {
    "framework": "Next.js 14 (App Router)",
    "language": "TypeScript",
    "styling": "Tailwind CSS + Brand Config"
  },
  "ui": {
    "animations": "Framer Motion",
    "icons": "React Icons / Heroicons",
    "charts": "Recharts (if needed for stats)"
  },
  "forms": {
    "validation": "React Hook Form + Zod",
    "submission": "Server Actions or API Routes"
  },
  "integrations": {
    "wallet": "RainbowKit / ConnectKit",
    "analytics": "Vercel Analytics + GA4",
    "monitoring": "Sentry"
  }
}
```

---

## 📊 Performance Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: > 90

---

## 🔗 Key Integrations

1. **dApp Connection**
   - Wallet connect button
   - Network switching
   - Transaction status

2. **Documentation**
   - GitBook / Docusaurus integration
   - API documentation
   - Smart contract docs

3. **Newsletter/Updates**
   - Email capture
   - Mailchimp/SendGrid integration
   - Update preferences

---

## 📝 Content Requirements

### Immediate Needs
- [ ] High-res logo files (all variants)
- [ ] Product detail pages content
- [ ] Team member information
- [ ] Legal disclaimers (full text)
- [ ] Blog/Insights articles

### Future Considerations
- [ ] Video content for hero
- [ ] Interactive product demos
- [ ] Investor portal design
- [ ] Multi-language support

---

*Last Updated: August 2025*
*Based on actual Landing Page Copy provided*