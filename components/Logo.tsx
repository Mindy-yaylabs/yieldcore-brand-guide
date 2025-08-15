'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  variant?: 'bi-black' | 'bi-white' | 'logo-green' | 'logo-white' | 'wordmark-green' | 'wordmark-white'
  width?: number
  height?: number
  className?: string
  fallback?: boolean
}

export default function Logo({ 
  variant = 'bi-black', 
  width = 200, 
  height = 60,
  className = '',
  fallback = true
}: LogoProps) {
  const [imageError, setImageError] = useState(false)
  
  // Map variants to actual available file paths
  const logoFileMap = {
    'bi-black': '/assets/logos/Yieldcore_BI_bl.png',
    'bi-white': '/assets/logos/Yieldcore_BI_wh.png',
    'logo-green': '/assets/logos/Yieldcore_logo_gr.png',
    'logo-white': '/assets/logos/Yieldcore_logo_wh.png',
    'wordmark-green': '/assets/logos/Yieldcore_wordmark_gr.png',
    'wordmark-white': '/assets/logos/Yieldcore_wordmark_wh.png',
  }

  const imageSrc = logoFileMap[variant]

  // Helper function to render text fallback
  const renderTextFallback = () => {
    const isWhite = variant.includes('white')
    const isGreen = variant.includes('green')
    const isWordmark = variant.includes('wordmark')
    
    const textColor = isWhite ? 'text-white' : isGreen ? 'text-brand-teal' : 'text-brand-ocean'
    
    if (isWordmark) {
      return (
        <div className={`inline-flex items-center ${className}`} style={{ minWidth: width }}>
          <span className={`font-black tracking-tight ${textColor}`} style={{ fontSize: height * 0.6 }}>
            YIELDCORE
          </span>
        </div>
      )
    }
    
    return (
      <div className={`inline-flex items-center ${className}`} style={{ minWidth: width }}>
        <span className={`font-black tracking-tight ${textColor}`} style={{ fontSize: height * 0.5 }}>
          YIELD<span className="text-brand-gold">CORE</span>
        </span>
      </div>
    )
  }

  // Handle error case
  const handleImageError = () => {
    console.log(`Logo image failed to load: ${imageSrc}`)
    setImageError(true)
  }

  // Show text fallback if error and fallback is enabled
  if (imageError && fallback) {
    return renderTextFallback()
  }

  // Show image if we have a source
  if (imageSrc) {
    return (
      <div className={`relative inline-block ${className}`} style={{ width, height }}>
        <Image
          src={imageSrc}
          alt="YieldCore Logo"
          width={width}
          height={height}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          onError={handleImageError}
          priority
          unoptimized
        />
      </div>
    )
  }

  // Default fallback
  return renderTextFallback()
}