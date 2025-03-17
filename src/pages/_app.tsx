import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import PerformanceMonitor from '../components/common/PerformanceMonitor';
import SkipToMain from '../components/common/SkipToMain';
import SEO from '../components/common/SEO';
import '../styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <SEO />
      <SkipToMain />
      <PerformanceMonitor />
      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
} 