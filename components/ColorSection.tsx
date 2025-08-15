'use client'

import { useState } from 'react'
import { BRAND_COLORS } from '@/lib/colors'

export default function ColorSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = async (color: string, name: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopiedColor(name)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const primaryColors = [
    { name: 'Midnight Teal', hex: BRAND_COLORS.primary.midnight, key: 'midnight' },
    { name: 'Deep Ocean', hex: BRAND_COLORS.primary.deepOcean, key: 'deepOcean' },
    { name: 'Dark Slate', hex: BRAND_COLORS.primary.darkSlate, key: 'darkSlate' },
  ]

  const secondaryColors = [
    { name: 'Bright Gold', hex: BRAND_COLORS.secondary.brightGold, key: 'brightGold' },
    { name: 'Golden Amber', hex: BRAND_COLORS.secondary.goldenAmber, key: 'goldenAmber' },
    { name: 'Soft Teal', hex: BRAND_COLORS.secondary.softTeal, key: 'softTeal' },
    { name: 'Pure White', hex: BRAND_COLORS.secondary.white, key: 'white' },
  ]

  return (
    <section id="colors" className="py-24 section-padding bg-brand-midnight">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Color Palette</h2>
          <p className="text-gray-300 max-w-3xl">
            Our color palette reflects the stability and innovation of YieldCore. 
            The deep teals represent trust and technology, while gold accents signify value and premium quality.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Primary Colors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryColors.map((color) => (
              <button
                key={color.key}
                onClick={() => copyToClipboard(color.hex, color.key)}
                className="group relative bg-brand-slate rounded-xl overflow-hidden border border-white/10 hover:border-brand-gold/50 transition-all hover:scale-105"
              >
                <div
                  className="h-32 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    {color.name}
                  </h4>
                  <p className="text-gray-400 font-mono text-sm">{color.hex}</p>
                  <div className="mt-3 text-xs text-brand-gold">
                    {copiedColor === color.key ? 'Copied!' : 'Click to copy'}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Secondary Colors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryColors.map((color) => (
              <button
                key={color.key}
                onClick={() => copyToClipboard(color.hex, color.key)}
                className="group relative bg-brand-slate rounded-xl overflow-hidden border border-white/10 hover:border-brand-gold/50 transition-all hover:scale-105"
              >
                <div
                  className="h-32 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    {color.name}
                  </h4>
                  <p className="text-gray-400 font-mono text-sm">{color.hex}</p>
                  <div className="mt-3 text-xs text-brand-gold">
                    {copiedColor === color.key ? 'Copied!' : 'Click to copy'}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 bg-brand-ocean rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Usage Guidelines</h3>
            <ul className="space-y-2 text-white/90">
              <li>• Use Deep Ocean (#152E2E) as the primary brand color</li>
              <li>• Apply gold accents sparingly for emphasis and CTAs</li>
              <li>• Maintain 60-30-10 color distribution ratio</li>
              <li>• Ensure WCAG AA contrast compliance</li>
            </ul>
          </div>
          
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-brand-ocean mb-4">Accessibility</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="text-sm font-medium">Ocean on White</span>
                <span className="text-green-600 font-semibold">AAA ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="text-sm font-medium">Gold on Ocean</span>
                <span className="text-green-600 font-semibold">AA ✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="text-sm font-medium">White on Ocean</span>
                <span className="text-green-600 font-semibold">AAA ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}