'use client'

import Logo from './Logo'

export default function LogoSection() {
  const biVariants = [
    { name: 'BI Black', bg: 'bg-white', variant: 'bi-black' as const },
    { name: 'BI White', bg: 'bg-brand-ocean', variant: 'bi-white' as const },
  ]

  const logoVariants = [
    { name: 'Logo Green', bg: 'bg-white', variant: 'logo-green' as const },
    { name: 'Logo White', bg: 'bg-brand-midnight', variant: 'logo-white' as const },
  ]

  const wordmarkVariants = [
    { name: 'Wordmark Green', bg: 'bg-white', variant: 'wordmark-green' as const },
    { name: 'Wordmark White', bg: 'bg-brand-midnight', variant: 'wordmark-white' as const },
  ]

  return (
    <section id="logo" className="py-24 section-padding bg-brand-slate">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Logo Guidelines</h2>
          <p className="text-gray-300 max-w-3xl">
            The YieldCore logo represents our commitment to bridging real-world assets with blockchain technology.
            It should be used consistently across all brand materials.
          </p>
        </div>

        {/* BI Variants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">BI (Brand Identity) Variants</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {biVariants.map((item) => (
              <div key={item.name} className="group">
                <div className={`${item.bg} p-12 rounded-xl flex items-center justify-center h-48 transition-all group-hover:shadow-lg`}>
                  <Logo variant={item.variant} width={250} height={80} />
                </div>
                <p className="mt-4 text-center text-gray-300 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Variants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Logo Variants</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {logoVariants.map((item) => (
              <div key={item.name} className="group">
                <div className={`${item.bg} p-12 rounded-xl flex items-center justify-center h-48 transition-all group-hover:shadow-lg`}>
                  <Logo variant={item.variant} width={250} height={80} />
                </div>
                <p className="mt-4 text-center text-gray-300 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wordmark Variants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Wordmark Variants</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {wordmarkVariants.map((item) => (
              <div key={item.name} className="group">
                <div className={`${item.bg} p-12 rounded-xl flex items-center justify-center h-48 transition-all group-hover:shadow-lg`}>
                  <Logo variant={item.variant} width={250} height={80} />
                </div>
                <p className="mt-4 text-center text-gray-300 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Clear Space</h3>
            <div className="bg-brand-ocean/20 p-8 rounded-xl border-2 border-dashed border-brand-teal">
              <div className="bg-brand-teal/10 p-8 rounded-lg relative">
                <div className="bg-white text-brand-ocean px-4 py-2 text-xl font-black inline-block">
                  YIELDCORE
                </div>
                <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-lg" style={{ margin: '24px' }}></div>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Maintain minimum clear space equal to the height of the letter &apos;Y&apos; around the logo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Minimum Size</h3>
            <div className="bg-brand-ocean/20 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Digital (min. 120px)</p>
                  <div className="text-white font-black" style={{ fontSize: '16px' }}>YIELDCORE</div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Print (min. 30mm)</p>
                  <div className="text-white font-black text-2xl">YIELDCORE</div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Never display the logo smaller than the specified minimum sizes.
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-4">Don&apos;ts</h3>
          <ul className="space-y-2 text-red-700">
            <li>• Don&apos;t alter the logo proportions or typography</li>
            <li>• Don&apos;t use unapproved color combinations</li>
            <li>• Don&apos;t add effects like shadows or gradients</li>
            <li>• Don&apos;t place the logo on busy backgrounds</li>
          </ul>
        </div>
      </div>
    </section>
  )
}