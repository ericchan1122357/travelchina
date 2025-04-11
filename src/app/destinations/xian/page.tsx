"use client";

import React from "react";
import DestinationTemplate from "../utils/DestinationTemplate";
import { getDestinationContent } from '../utils/destinationContent';

export default function XianPage() {
  // 获取西安的内容
  const content = getDestinationContent('xian');
  
  return <DestinationTemplate 
    title={content.title}
    subtitle={content.subtitle}
    sections={content.sections}
  />;
} 