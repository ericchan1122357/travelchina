'use client';

import React from 'react';
import DestinationTemplate from '../utils/DestinationTemplate';
import { getDestinationContent } from '../utils/destinationContent';

export default function ShanghaiPage() {
  // 获取上海的内容
  const content = getDestinationContent('shanghai');
  
  return <DestinationTemplate 
    title={content.title}
    subtitle={content.subtitle}
    sections={content.sections}
  />;
} 