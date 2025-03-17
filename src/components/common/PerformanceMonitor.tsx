import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 监控核心Web指标
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          const metric: PerformanceMetric = {
            name: entry.name,
            value: entry.value,
            rating: getRating(entry.name, entry.value)
          };

          // 发送到Sentry
          Sentry.addBreadcrumb({
            category: 'performance',
            message: `${metric.name}: ${metric.value}ms (${metric.rating})`,
            level: 'info'
          });

          // 如果性能不佳，创建Sentry事件
          if (metric.rating === 'poor') {
            Sentry.captureMessage(`Poor performance detected: ${metric.name}`, {
              level: 'warning',
              extra: {
                metricName: metric.name,
                metricValue: metric.value,
                metricRating: metric.rating
              }
            });
          }

          // 发送到Google Analytics（如果配置了）
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'performance_metric', {
              metric_name: metric.name,
              value: metric.value,
              rating: metric.rating
            });
          }
        });
      });

      // 观察关键性能指标
      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint']
      });

      // 清理函数
      return () => observer.disconnect();
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