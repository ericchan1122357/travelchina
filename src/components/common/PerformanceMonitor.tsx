import React, { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // 监控页面加载性能
    if (typeof window !== 'undefined') {
      const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // 记录性能指标
          console.log('Performance Entry:', entry);
          
          // 这里可以添加性能数据上报逻辑
          // 例如发送到Sentry或其他监控服务
          if (entry.entryType === 'largest-contentful-paint') {
            // 记录最大内容绘制时间
            console.log('LCP:', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            // 记录首次输入延迟
            console.log('FID:', entry.duration);
          }
        }
      });

      // 观察不同类型的性能指标
      performanceObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      // 清理函数
      return () => {
        performanceObserver.disconnect();
      };
    }
  }, []);

  // 根据指标类型和值确定评级
  const getRating = (name: string, value: number): PerformanceMetric['rating'] => {
    switch (name) {
      case 'LCP': // Largest Contentful Paint
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'FID': // First Input Delay
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'CLS': // Cumulative Layout Shift
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      default:
        return 'good';
    }
  };

  return null;
};

export default PerformanceMonitor;

// 为window.gtag添加类型声明
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
} 