'use client';

import React from 'react';
import DestinationTemplate from '../utils/DestinationTemplate';
import { getDestinationContent } from '../utils/destinationContent';

export default function BeijingPage() {
  // 获取北京的内容
  const content = getDestinationContent('beijing');
  
  return <DestinationTemplate 
    title={content.title}
    subtitle={content.subtitle}
    sections={content.sections}
  />;
} 