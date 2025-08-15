'use client'

import Logo from './Logo'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-brand-ocean via-brand-midnight to-brand-slate">
      <div className="container-max text-center animate-fade-in">
        <div className="mb-8">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Logo variant="logo-white" width={400} height={120} fallback={true} />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-brand-teal font-light tracking-wide mb-4">
          Real World Assets • Blockchain Innovation
        </p>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-12">
          Welcome to the YieldCore brand guide. This comprehensive resource ensures consistent 
          brand application across all platforms and materials.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#logo"
            className="px-8 py-4 bg-brand-gold hover:bg-brand-amber text-brand-midnight font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Explore Guidelines
          </a>
          <a
            href="#downloads"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all hover:scale-105 border border-white/20"
          >
            Download Assets
          </a>
        </div>
      </div>
    </section>
  )
}