'use client'

import Logo from './Logo'

export default function UsageSection() {
  const examples = [
    {
      title: 'Business Card',
      description: 'Professional contact information with brand identity',
      preview: (
        <div className="bg-brand-ocean p-6 rounded-lg text-white">
          <div className="mb-4">
            <Logo variant="logo-white" width={140} height={40} />
          </div>
          <div className="space-y-1 text-sm">
            <p className="font-semibold">John Doe</p>
            <p className="text-brand-teal">Chief Technology Officer</p>
            <p className="text-white/70 mt-2">john@yieldcore.io</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Email Signature',
      description: 'Consistent brand representation in communications',
      preview: (
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <div className="border-l-4 border-brand-gold pl-4">
            <p className="font-bold text-brand-ocean">Jane Smith</p>
            <p className="text-sm text-gray-600">Product Manager</p>
            <div className="mt-2">
              <Logo variant="logo-green" width={120} height={32} />
            </div>
            <p className="text-xs text-gray-500 mt-1">Real World Assets • Blockchain Innovation</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Social Media',
      description: 'Engaging presence across digital platforms',
      preview: (
        <div className="bg-gradient-to-br from-brand-ocean to-brand-slate p-6 rounded-lg">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
            <div className="mb-2">
              <Logo variant="logo-white" width={160} height={40} />
            </div>
            <p className="text-brand-teal text-sm">Bridging traditional finance with DeFi innovation.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-xs bg-brand-gold text-brand-midnight px-2 py-1 rounded">RWA</span>
              <span className="text-xs bg-brand-gold text-brand-midnight px-2 py-1 rounded">DeFi</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Presentation Slide',
      description: 'Impactful slides for investor meetings',
      preview: (
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-2xl font-bold text-brand-ocean">Q4 2024 Highlights</h4>
            <Logo variant="logo-green" width={100} height={28} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <p className="text-sm text-gray-700">$50M TVL Achieved</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <p className="text-sm text-gray-700">15 New Partnerships</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <p className="text-sm text-gray-700">Smart Contract v2.0</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Website Header',
      description: 'Clean navigation with clear brand presence',
      preview: (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <Logo variant="logo-green" width={140} height={36} />
            <div className="flex gap-4 text-sm">
              <span className="text-gray-600 hover:text-brand-ocean cursor-pointer">About</span>
              <span className="text-gray-600 hover:text-brand-ocean cursor-pointer">Products</span>
              <span className="text-gray-600 hover:text-brand-ocean cursor-pointer">Contact</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Mobile App Icon',
      description: 'Recognizable icon for app stores',
      preview: (
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-brand-ocean to-brand-slate p-6 rounded-2xl shadow-lg">
            <Logo variant="logo-white" width={80} height={80} />
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="usage" className="py-24 section-padding bg-brand-midnight">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Usage Examples</h2>
          <p className="text-gray-300 max-w-3xl">
            See how the YieldCore brand comes to life across various applications. 
            These examples demonstrate proper brand implementation while maintaining consistency and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.title} className="group">
              <div className="bg-brand-slate border border-white/10 p-8 rounded-xl h-64 flex items-center justify-center hover:border-brand-gold/30 transition-all">
                {example.preview}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">{example.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{example.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-ocean/20 rounded-xl border border-brand-gold/30">
          <h3 className="text-2xl font-bold text-white mb-4">Implementation Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Always maintain consistent spacing and proportions</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Use approved color combinations for maximum impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Ensure text remains readable at all sizes</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Apply the 60-30-10 rule for color distribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Test designs across different devices and contexts</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">✓</span>
                <span>Keep messaging clear and aligned with brand values</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}