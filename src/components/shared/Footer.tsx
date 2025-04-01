'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { currentLanguage } = useLanguage();

  const getTranslatedString = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'about': {
        'zh': '关于我们',
        'en': 'About Us',
        'fr': 'À propos',
        'de': 'Über uns',
        'es': 'Sobre nosotros',
        'ja': '私たちについて',
        'ko': '회사 소개',
        'ru': 'О нас',
      },
      'contact': {
        'zh': '联系我们',
        'en': 'Contact',
        'fr': 'Contact',
        'de': 'Kontakt',
        'es': 'Contacto',
        'ja': 'お問い合わせ',
        'ko': '연락처',
        'ru': 'Контакты',
      },
      'privacy': {
        'zh': '隐私政策',
        'en': 'Privacy Policy',
        'fr': 'Politique de confidentialité',
        'de': 'Datenschutz',
        'es': 'Política de privacidad',
        'ja': 'プライバシーポリシー',
        'ko': '개인정보 처리방침',
        'ru': 'Политика конфиденциальности',
      },
      'terms': {
        'zh': '使用条款',
        'en': 'Terms of Service',
        'fr': 'Conditions d\'utilisation',
        'de': 'Nutzungsbedingungen',
        'es': 'Términos de servicio',
        'ja': '利用規約',
        'ko': '이용약관',
        'ru': 'Условия использования',
      },
      'copyright': {
        'zh': '© 2024 中国旅游攻略. 保留所有权利.',
        'en': '© 2024 Travel China. All rights reserved.',
        'fr': '© 2024 Voyage Chine. Tous droits réservés.',
        'de': '© 2024 Reisen China. Alle Rechte vorbehalten.',
        'es': '© 2024 Viajar China. Todos los derechos reservados.',
        'ja': '© 2024 中国旅行. All rights reserved.',
        'ko': '© 2024 중국 여행. All rights reserved.',
        'ru': '© 2024 Путешествие по Китаю. Все права защищены.',
      },
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {getTranslatedString('about')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  {getTranslatedString('about')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {getTranslatedString('contact')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  {getTranslatedString('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {getTranslatedString('privacy')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  {getTranslatedString('privacy')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {getTranslatedString('terms')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  {getTranslatedString('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            {getTranslatedString('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 