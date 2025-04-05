import React from 'react';
import Image from 'next/image';

interface DestinationHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function DestinationHeader({ 
  title, 
  subtitle, 
  backgroundImage 
}: DestinationHeaderProps) {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] rounded-lg overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* 标题内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl">{subtitle}</p>
      </div>
    </div>
  );
} 