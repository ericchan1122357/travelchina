import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Travel China - Your Ultimate Guide to China',
    template: '%s | Travel China'
  },
  description: 'Discover the best destinations, travel guides, and stories about China. Plan your perfect trip with our comprehensive travel resources.',
  keywords: ['China travel', 'China tourism', 'Chinese destinations', 'travel guide', 'China vacation', 'Chinese culture', 'travel tips'],
  authors: [{ name: 'Travel China Team' }],
  creator: 'Travel China',
  publisher: 'Travel China',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://travelchina.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'zh': '/zh',
      'fr': '/fr',
      'de': '/de',
      'es': '/es',
      'ja': '/ja',
      'ko': '/ko',
      'ru': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://travelchina.com',
    siteName: 'Travel China',
    title: 'Travel China - Your Ultimate Guide to China',
    description: 'Discover the best destinations, travel guides, and stories about China. Plan your perfect trip with our comprehensive travel resources.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Travel China - Your Ultimate Guide to China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel China - Your Ultimate Guide to China',
    description: 'Discover the best destinations, travel guides, and stories about China. Plan your perfect trip with our comprehensive travel resources.',
    images: ['/images/twitter-image.jpg'],
    creator: '@travelchina',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
} 