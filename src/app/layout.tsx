import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import Providers from "./providers"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'China Free Travel - Your Ultimate Free Travel Guide to China',
    template: '%s | China Free Travel'
  },
  description: 'Plan your perfect free trip to China with our comprehensive travel resources, destination guides, and personalized planning tools.',
  keywords: ['China free travel', 'China tourism', 'Chinese destinations', 'travel guide', 'China vacation', 'Chinese culture', 'travel tips', 'independent travel'],
  authors: [{ name: 'China Free Travel Team' }],
  creator: 'China Free Travel',
  publisher: 'China Free Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chinafreetravel.com'),
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
    url: 'https://chinafreetravel.com',
    siteName: 'China Free Travel',
    title: 'China Free Travel - Your Ultimate Free Travel Guide to China',
    description: 'Plan your perfect free trip to China with our comprehensive travel resources, destination guides, and personalized planning tools.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'China Free Travel - Your Ultimate Free Travel Guide to China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Free Travel - Your Ultimate Free Travel Guide to China',
    description: 'Plan your perfect free trip to China with our comprehensive travel resources, destination guides, and personalized planning tools.',
    images: ['/images/twitter-image.jpg'],
    creator: '@chinafreetravel',
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
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 