export const BRAND_COLORS = {
  primary: {
    midnight: '#0A2A2A',
    deepOcean: '#152E2E', 
    darkSlate: '#0C1B1B'
  },
  secondary: {
    brightGold: '#F4C430',
    goldenAmber: '#E6AC00',
    softTeal: '#B6E6E6',
    white: '#FFFFFF'
  }
} as const

export type BrandColors = typeof BRAND_COLORS