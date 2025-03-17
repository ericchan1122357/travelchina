import { useEffect } from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  data: {
    '@context': string;
    '@type': string;
    [key: string]: any;
  };
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    // 添加结构化数据到页面
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return (
    <Head>
      <meta name="description" content={data.description || '中国旅游攻略网站'} />
      <meta property="og:title" content={data.name || '中国旅游攻略'} />
      <meta property="og:description" content={data.description || '发现中国的魅力，体验独特的文化之旅'} />
      <meta property="og:image" content={data.image || '/images/og-image.jpg'} />
      <meta property="og:url" content={data.url || 'https://chinatravel.com'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.name || '中国旅游攻略'} />
      <meta name="twitter:description" content={data.description || '发现中国的魅力，体验独特的文化之旅'} />
      <meta name="twitter:image" content={data.image || '/images/og-image.jpg'} />
    </Head>
  );
};

export default StructuredData; 