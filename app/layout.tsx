import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Adoraq - Instagram Ads That Actually Work for Beauty & Wellness',
  description: 'Stop wasting money on ads that don\'t work. Get custom Instagram ads designed specifically for small beauty, wellness, and fitness businesses in London.',
  keywords: 'instagram ads, beauty business marketing, wellness advertising, fitness marketing, london advertising agency',
  authors: [{ name: 'Adoraq' }],
  openGraph: {
    title: 'Adoraq - Instagram Ads That Actually Work',
    description: 'Stop wasting money on ads that don\'t work. Get custom Instagram ads designed for beauty & wellness businesses.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adoraq - Instagram Ads That Actually Work',
    description: 'Stop wasting money on ads that don\'t work. Get custom Instagram ads designed for beauty & wellness businesses.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
