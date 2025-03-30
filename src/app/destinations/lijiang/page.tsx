"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  getChineseContent, 
  getEnglishContent, 
  getGermanContent, 
  getFrenchContent, 
  getSpanishContent, 
  getKoreanContent 
} from './index';

export default function Lijiang() {
  // 设置默认语言为中文
  const [currentLanguage, setCurrentLanguage] = useState("chinese");

  // 根据当前语言返回对应的内容
  const getContent = () => {
    switch (currentLanguage) {
      case "chinese":
        return getChineseContent();
      case "english":
        return getEnglishContent();
      case "german":
        return getGermanContent();
      case "french":
        return getFrenchContent();
      case "spanish":
        return getSpanishContent();
      case "korean":
        return getKoreanContent();
      default:
        return getChineseContent();
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">丽江 / Lijiang</h1>
          <div className="relative w-full h-[50vh] rounded-xl overflow-hidden">
            <Image
              src="/images/lijiang/lijiang-banner.jpg"
              alt="丽江古城风景"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* 语言选择按钮 */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button 
            onClick={() => setCurrentLanguage("chinese")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "chinese" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            中文
          </button>
          <button 
            onClick={() => setCurrentLanguage("english")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "english" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            English
          </button>
          <button 
            onClick={() => setCurrentLanguage("german")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "german" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Deutsch
          </button>
          <button 
            onClick={() => setCurrentLanguage("french")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "french" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Français
          </button>
          <button 
            onClick={() => setCurrentLanguage("spanish")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "spanish" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Español
          </button>
          <button 
            onClick={() => setCurrentLanguage("korean")}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLanguage === "korean" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            한국어
          </button>
        </div>
        
        {/* 内容区域 */}
        <div className="space-y-6">
          {getContent()}
        </div>
      </div>
    </main>
  );
}