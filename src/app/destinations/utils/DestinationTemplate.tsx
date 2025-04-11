'use client';

import { useState, useEffect } from 'react';
import { DestinationContent, DestinationSection } from './destinationContent';

interface DestinationTemplateProps {
  title: string;
  subtitle: string;
  sections: DestinationSection[];
}

// 将HTML字符串安全转换为React元素
export function createMarkup(html: string) {
  // 为景点名称添加样式 (h3标签)
  let styledHtml = html.replace(
    /<h3>(.*?)<\/h3>/g, 
    '<h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">$1</h3>'
  );
  
  // 为重要信息添加样式 (strong标签)
  styledHtml = styledHtml.replace(
    /<strong>(.*?)<\/strong>/g,
    '<strong class="font-semibold text-gray-800 dark:text-gray-200">$1</strong>'
  );
  
  // 添加图片/视频容器空间 - 但跳过美食和文化历史部分的h3
  if (!html.includes("Food Guide") && !html.includes("Cultural and Historical Insights")) {
    styledHtml = styledHtml.replace(
      /<h3 class=".*?">(.*?)<\/h3>/g,
      '<h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">$1</h3><div class="media-container mb-6 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-2 border border-dashed border-gray-300 dark:border-gray-600"><p class="text-center text-gray-500 dark:text-gray-400 py-12">Image/Video placeholder</p></div>'
    );
  }
  
  // 为段落添加样式
  styledHtml = styledHtml.replace(
    /<p>(.*?)<\/p>/g,
    '<p class="mb-4 leading-relaxed">$1</p>'
  );

  // 为列表添加样式
  styledHtml = styledHtml.replace(
    /<ul>([\s\S]*?)<\/ul>/g,
    '<ul class="list-disc pl-5 my-4 space-y-2">$1</ul>'
  );
  
  styledHtml = styledHtml.replace(
    /<li>(.*?)<\/li>/g,
    '<li class="ml-4 mb-2">$1</li>'
  );
  
  return { __html: styledHtml };
}

const DestinationTemplate = ({ title, subtitle, sections }: DestinationTemplateProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  // 自动展开第一个部分
  useEffect(() => {
    setActiveSection(0);
  }, [title]); // 当城市改变时重置

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* 页面标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      {/* 内容区域 */}
      <div className="mt-8">
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 
              className="text-xl md:text-2xl font-semibold mb-4 pb-2 border-b cursor-pointer flex justify-between items-center"
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              {section.title}
              <span>{activeSection === index ? '▲' : '▼'}</span>
            </h2>
            
            {activeSection === index && (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={createMarkup(section.content)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationTemplate; 