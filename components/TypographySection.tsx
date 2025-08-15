export default function TypographySection() {
  const weights = [
    { name: 'Light', weight: 300, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Regular', weight: 400, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Medium', weight: 500, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Semibold', weight: 600, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Bold', weight: 700, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Black', weight: 900, sample: 'The quick brown fox jumps over the lazy dog' },
  ]

  const sizes = [
    { name: 'Display', class: 'text-6xl md:text-7xl', size: '72px', usage: 'Hero headlines' },
    { name: 'H1', class: 'text-4xl md:text-5xl', size: '48px', usage: 'Page titles' },
    { name: 'H2', class: 'text-3xl md:text-4xl', size: '36px', usage: 'Section headers' },
    { name: 'H3', class: 'text-2xl md:text-3xl', size: '30px', usage: 'Subsection headers' },
    { name: 'Body', class: 'text-base md:text-lg', size: '18px', usage: 'Body text' },
    { name: 'Small', class: 'text-sm', size: '14px', usage: 'Captions, labels' },
  ]

  return (
    <section id="typography" className="py-24 section-padding bg-brand-slate">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Typography</h2>
          <p className="text-gray-300 max-w-3xl">
            Work Sans is our primary typeface, chosen for its clean geometry and excellent readability 
            across all mediums. Its versatile weight range allows for clear hierarchy and emphasis.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Type Scale</h3>
          <div className="space-y-6">
            {sizes.map((size) => (
              <div key={size.name} className="bg-brand-midnight border border-white/10 p-8 rounded-xl hover:border-brand-gold/30 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <p className={`${size.class} font-bold text-white leading-tight`}>
                      {size.name === 'Display' ? 'YieldCore' : `${size.name} Typography`}
                    </p>
                  </div>
                  <div className="flex gap-8 text-sm text-gray-400">
                    <div>
                      <span className="font-semibold">Size:</span> {size.size}
                    </div>
                    <div>
                      <span className="font-semibold">Usage:</span> {size.usage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Font Weights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {weights.map((weight) => (
              <div key={weight.name} className="bg-brand-midnight border border-white/10 p-6 rounded-xl hover:border-brand-gold/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-semibold text-brand-gold">{weight.name}</span>
                  <span className="text-xs text-gray-400 font-mono">{weight.weight}</span>
                </div>
                <p 
                  className="text-xl text-white leading-relaxed"
                  style={{ fontWeight: weight.weight }}
                >
                  {weight.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-ocean text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Headlines</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• Use Bold or Black weight</li>
              <li>• Tight letter spacing</li>
              <li>• Sentence case preferred</li>
              <li>• Short and impactful</li>
            </ul>
          </div>

          <div className="bg-brand-midnight border border-white/10 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Body Text</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Regular weight (400)</li>
              <li>• 1.5-1.7 line height</li>
              <li>• 16-18px base size</li>
              <li>• Max 75 characters/line</li>
            </ul>
          </div>

          <div className="bg-brand-gold text-brand-midnight p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Emphasis</h3>
            <ul className="space-y-2 text-brand-midnight/90 text-sm">
              <li>• Semibold for emphasis</li>
              <li>• Color for links</li>
              <li>• Avoid ALL CAPS</li>
              <li>• Use sparingly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}