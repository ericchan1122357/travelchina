"use client";

import { useEffect } from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import { beijingContent } from "../utils/destinationContent";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";

export default function BeijingPage() {
  const { language } = useLanguageContext();
  
  // 当前语言的北京内容
  const content = beijingContent[language];
  
  // 设置页面标题
  useEffect(() => {
    document.title = `${content.title} - 全球旅游指南`;
  }, [content.title]);

  return (
    <main className="min-h-screen py-8 px-4 md:px-8">
      <DestinationHeader
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage="/images/destinations/beijing/header.jpg"
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        <DestinationContent sections={content.sections} />
      </div>
    </main>
  );
} 