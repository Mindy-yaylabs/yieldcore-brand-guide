'use client'

import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white py-12 section-padding">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Logo variant="wordmark-white" width={160} height={48} className="mb-2" />
            <p className="text-brand-teal text-sm">Real World Assets • Blockchain Innovation</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <a href="mailto:brand@yieldcore.io" className="text-white/70 hover:text-white transition-colors">
              brand@yieldcore.io
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <p className="text-white/70">© 2025 YieldCore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}