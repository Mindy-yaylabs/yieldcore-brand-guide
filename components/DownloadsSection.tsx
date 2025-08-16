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

  const handleCompletePackageDownload = async () => {
    try {
      // Create a ZIP file with all available assets
      const JSZip = (await import('jszip')).default
      const zip = new JSZip()
      
      // Logo files to include
      const logoFiles = [
        'Yieldcore_BI_bl.png',
        'Yieldcore_BI_wh.png', 
        'Yieldcore_logo_gr.png',
        'Yieldcore_logo_wh.png',
        'Yieldcore_wordmark_gr.png',
        'Yieldcore_wordmark_wh.png'
      ]

      // Add logo files to ZIP
      const logosFolder = zip.folder('logos')
      for (const fileName of logoFiles) {
        try {
          const response = await fetch(`/assets/logos/${fileName}`)
          if (response.ok) {
            const blob = await response.blob()
            logosFolder?.file(fileName, blob)
          }
        } catch (error) {
          console.warn(`Failed to add ${fileName} to package:`, error)
        }
      }

      // Add color palette CSS
      const colorsCSS = `/* YieldCore Brand Colors */
:root {
  /* Primary Colors */
  --brand-midnight: #0A2A2A;
  --brand-ocean: #152E2E;
  --brand-slate: #0C1B1B;
  
  /* Secondary Colors */
  --brand-gold: #F4C430;
  --brand-amber: #E6AC00;
  --brand-teal: #B6E6E6;
  --brand-white: #FFFFFF;
}

.bg-brand-midnight { background-color: var(--brand-midnight); }
.bg-brand-ocean { background-color: var(--brand-ocean); }
.bg-brand-slate { background-color: var(--brand-slate); }
.bg-brand-gold { background-color: var(--brand-gold); }
.bg-brand-amber { background-color: var(--brand-amber); }
.bg-brand-teal { background-color: var(--brand-teal); }

.text-brand-midnight { color: var(--brand-midnight); }
.text-brand-ocean { color: var(--brand-ocean); }
.text-brand-slate { color: var(--brand-slate); }
.text-brand-gold { color: var(--brand-gold); }
.text-brand-amber { color: var(--brand-amber); }
.text-brand-teal { color: var(--brand-teal); }`

      zip.file('colors/brand-colors.css', colorsCSS)

      // Add brand guidelines README
      const guidelines = `# YieldCore Brand Guidelines

## Logo Usage
- Use BI variants for official documents and presentations
- Use Logo variants for marketing materials
- Use Wordmark variants for text-heavy layouts
- Maintain minimum clear space equal to the height of 'Y'
- Never alter proportions or add effects

## Color Palette
Primary: Midnight Teal (#0A2A2A), Deep Ocean (#152E2E), Dark Slate (#0C1B1B)
Secondary: Bright Gold (#F4C430), Golden Amber (#E6AC00), Soft Teal (#B6E6E6)

## Typography
Primary: Work Sans
Weights: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700), Black (900)

## File Structure
- /logos/ - All logo variants in PNG format
- /colors/ - Color palette files and CSS variables
- README.md - These guidelines

Last updated: August 2025`

      zip.file('README.md', guidelines)

      // Generate and download ZIP
      const content = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(content)
      const link = document.createElement('a')
      link.href = url
      link.download = 'yieldcore-brand-package.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
    } catch (error) {
      console.error('Failed to create brand package:', error)
      // Fallback: open brand guide in new tab
      window.open(window.location.href, '_blank')
    }
  }

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
          <button 
            onClick={handleCompletePackageDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-ocean hover:bg-brand-midnight text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Download Complete Brand Package
          </button>
          <p className="mt-4 text-sm text-gray-300">
            Includes all logo files, color palettes, and guidelines • Last updated: August 2025
          </p>
        </div>
      </div>
    </section>
  )
}