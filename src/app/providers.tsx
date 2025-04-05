"use client";

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
} 