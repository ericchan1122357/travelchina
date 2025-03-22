'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

// 这个页面用于处理从Pages Router到App Router的跳转
export default function PlannerRedirect() {
  const router = useRouter();

  useEffect(() => {
    // 重定向到App Router下的planner页面
    // 在Pages Router中，我们需要使用window.location进行跳转
    window.location.href = '/planner';
  }, []);

  // 渲染加载状态
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-4"></div>
        <p className="text-lg">正在加载问卷页面...</p>
      </div>
    </div>
  );
} 