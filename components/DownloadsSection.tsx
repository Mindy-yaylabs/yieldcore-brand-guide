'use client'

export default function DownloadsSection() {
  const assets = [
    {
      category: 'Logo Files',
      items: [
        { name: 'BI Black (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_BI_bl.png' },
        { name: 'BI White (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_BI_wh.png' },
        { name: 'Logo Green (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_logo_gr.png' },
        { name: 'Logo White (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_logo_wh.png' },
        { name: 'Wordmark Green (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_wordmark_gr.png' },
        { name: 'Wordmark White (PNG)', size: '180 KB', format: 'PNG', file: 'Yieldcore_wordmark_wh.png' },
      ],
    },
    {
      category: 'Color Palettes',
      items: [
        { name: 'Adobe Swatch Exchange', size: '2 KB', format: 'ASE' },
        { name: 'Sketch Palette', size: '1 KB', format: 'SKETCHPALETTE' },
        { name: 'CSS Variables', size: '1 KB', format: 'CSS' },
        { name: 'JSON Config', size: '1 KB', format: 'JSON' },
      ],
    },
    {
      category: 'Typography',
      items: [
        { name: 'Work Sans (All Weights)', size: '890 KB', format: 'TTF' },
        { name: 'Web Font Kit', size: '445 KB', format: 'WOFF2' },
        { name: 'Typography Guidelines', size: '2.3 MB', format: 'PDF' },
      ],
    },
    {
      category: 'Templates',
      items: [
        { name: 'Business Card Template', size: '1.2 MB', format: 'AI' },
        { name: 'Letterhead Template', size: '890 KB', format: 'DOCX' },
        { name: 'Presentation Template', size: '5.6 MB', format: 'PPTX' },
        { name: 'Social Media Kit', size: '3.4 MB', format: 'PSD' },
      ],
    },
  ]

  return (
    <section id="downloads" className="py-24 section-padding bg-brand-slate">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Downloads</h2>
          <p className="text-gray-300 max-w-3xl">
            Access all YieldCore brand assets in one place. These resources are available for internal use 
            and approved partners. Please ensure you have the latest versions for consistency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {assets.map((category) => (
            <div key={category.category} className="bg-brand-midnight border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-brand-ocean text-white p-6">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.items.map((item) => {
                    const hasFile = 'file' in item
                    const handleDownload = () => {
                      if (hasFile && item.file) {
                        const link = document.createElement('a')
                        link.href = `/assets/logos/${item.file}`
                        link.download = item.file
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }
                    }
                    
                    return (
                      <button
                        key={item.name}
                        onClick={handleDownload}
                        disabled={!hasFile}
                        className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors group ${
                          hasFile 
                            ? 'bg-brand-ocean/30 hover:bg-brand-ocean/50 cursor-pointer border border-brand-teal/20' 
                            : 'bg-brand-ocean/10 cursor-not-allowed opacity-50 border border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            hasFile 
                              ? 'bg-brand-teal/20 group-hover:bg-brand-teal/30' 
                              : 'bg-gray-600'
                          }`}>
                            <svg className={`w-5 h-5 ${hasFile ? 'text-brand-teal' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-brand-teal">{item.name}</p>
                            <p className="text-xs text-gray-300">
                              {item.size} • {item.format}
                              {!hasFile && ' • Coming Soon'}
                            </p>
                          </div>
                        </div>
                        <svg className={`w-5 h-5 transition-transform ${
                          hasFile 
                            ? 'text-brand-teal group-hover:translate-y-1' 
                            : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3" />
                        </svg>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-brand-ocean hover:bg-brand-midnight text-white font-semibold rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Download Complete Brand Package
          </button>
          <p className="mt-4 text-sm text-gray-500">
            ZIP Archive • 28.4 MB • Last updated: January 2025
          </p>
        </div>
      </div>
    </section>
  )
}