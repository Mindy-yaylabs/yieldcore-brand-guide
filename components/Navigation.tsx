'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const navItems = [
  { label: 'Logo', href: '#logo' },
  { label: 'Colors', href: '#colors' },
  { label: 'Color Test', href: '#color-test' },
  { label: 'Typography', href: '#typography' },
  { label: 'Usage', href: '#usage' },
  { label: 'Downloads', href: '#downloads' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-midnight/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo variant="wordmark-white" width={140} height={40} />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-brand-gold transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-slide-down">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white hover:text-brand-gold transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}