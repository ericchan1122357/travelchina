'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent } from './destinationContent';

export interface DestinationTemplateProps {
  params: {
    slug: string;
  };
}

export default function DestinationTemplate({ params }: DestinationTemplateProps) {
  const { slug } = params;
  const { currentLanguage } = useLanguage();
  const [content, setContent] = useState<any>(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // 添加一个刷新计时器，确保在语言变更时重新加载内容
    const loadContent = async () => {
      try {
        console.log(`Loading destination content for: ${slug}, language: ${currentLanguage}`);
        const destinationContent = getDestinationContent(slug, currentLanguage);
        
        if (isMounted) {
          setContent(destinationContent);
          setContentLoaded(true);
          
          // 如果内容为空或缺少关键部分，尝试重新加载几次
          if (!destinationContent || 
              !destinationContent.title || 
              destinationContent.sections.length === 0) {
            if (retryCount < 3) {
              console.log(`Empty content received, retrying (${retryCount + 1}/3)...`);
              setRetryCount(prev => prev + 1);
              setTimeout(loadContent, 500); // 500ms后重试
            } else {
              console.log('Max retries reached, unable to load content');
            }
          } else {
            // 内容加载成功，重置重试计数
            setRetryCount(0);
          }
        }
      } catch (error) {
        console.error('Error loading destination content:', error);
        if (isMounted && retryCount < 3) {
          setRetryCount(prev => prev + 1);
          setTimeout(loadContent, 500); // 500ms后重试
        }
      }
    };

    loadContent();

    // 添加返回按钮处理
    const handlePopState = () => {
      // 当用户点击浏览器返回按钮时，检查是否从目的地详情页返回
      if (document.body.hasAttribute('data-city-detail')) {
        // 获取当前URL并解析出基础路径和语言前缀
        const currentUrl = new URL(window.location.href);
        const pathParts = currentUrl.pathname.split('/').filter(Boolean);
        
        // 检查是否有语言前缀
        let basePath = '';
        if (pathParts.length > 0 && pathParts[0].length === 2) {
          basePath = `/${pathParts[0]}`;
        }
        
        // 构造目的地列表页URL
        const destinationsUrl = `${basePath}/destinations`;
        
        // 替换当前历史记录，这样会跳过当前页面
        window.location.replace(destinationsUrl);
      }
    };

    // 注册popstate事件监听器
    window.addEventListener('popstate', handlePopState);

    return () => {
      isMounted = false;
      window.removeEventListener('popstate', handlePopState);
    };
  }, [slug, currentLanguage, retryCount]);

  // 添加返回列表页的函数
  const goToDestinationsList = () => {
    // 获取当前URL并解析出基础路径和语言前缀
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && pathParts[0].length === 2) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造目的地列表页URL
    const destinationsUrl = `${basePath}/destinations`;
    
    // 使用replace方法替换当前历史记录，确保点击返回按钮时不会返回到详情页
    window.location.replace(destinationsUrl);
  };

  // 渲染加载状态
  if (!contentLoaded || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={goToDestinationsList}
            className="mb-4 flex items-center text-gray-600 hover:text-china-red transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {currentLanguage === 'zh' ? '返回目的地列表' : 'Back to Destinations'}
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{content.subtitle}</p>
        </div>

        {content.sections.map((section: any, index: number) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            {section.content.map((paragraph: string, pIndex: number) => (
              <p key={pIndex} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
            {section.imageUrl && (
              <div className="my-6">
                <img
                  src={section.imageUrl}
                  alt={section.imageAlt || content.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                {section.imageCaption && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {section.imageCaption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <button
            onClick={goToDestinationsList}
            className="px-4 py-2 bg-china-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {currentLanguage === 'zh' ? '浏览其他城市' : 'Browse Other Cities'}
          </button>
        </div>
      </div>
    </div>
  );
} 