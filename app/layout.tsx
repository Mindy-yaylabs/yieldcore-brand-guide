import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YieldCore Brand Guide',
  description: 'Real World Assets • Blockchain Innovation',
  keywords: 'YieldCore, brand guide, blockchain, real world assets, RWA',
  openGraph: {
    title: 'YieldCore Brand Guide',
    description: 'Real World Assets • Blockchain Innovation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}