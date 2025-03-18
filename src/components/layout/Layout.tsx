import React, { Suspense } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import LoadingSpinner from '../common/LoadingSpinner';
import PerformanceMonitor from '../common/PerformanceMonitor';

// 懒加载组件
const Header = React.lazy(() => import('@/components/layout/Header'));
const Footer = React.lazy(() => import('@/components/layout/Footer'));
const PageTransition = React.lazy(() => import('@/components/layout/PageTransition'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Layout; 