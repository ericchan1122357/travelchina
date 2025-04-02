import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Metadata } from 'next';

// 字体配置
const inter = Inter({ subsets: ['latin'] });

// 元数据
export const metadata: Metadata = {
  title: 'China Free Travel',
  description: 'China Free Travel - Your guide to exploring China',
  keywords: ['China travel', 'Chinese destinations', 'travel guide', 'China vacation', 'Chinese culture', 'travel tips'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
} 