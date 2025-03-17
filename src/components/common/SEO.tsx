import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, any>;
}

const SEO = ({
  title = '中国旅游攻略 | AI智能定制旅行规划',
  description = '使用AI智能定制您的中国旅行计划，探索中国文化与美景，获取专业旅游建议与当地体验。',
  image = '/images/og-image.jpg',
  type = 'website',
  structuredData
}: SEOProps) => {
  const router = useRouter();
  const canonicalUrl = `https://yourwebsite.com${router.asPath}`;
  
  // 默认结构化数据
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    description: description,
    url: canonicalUrl,
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* 基本元标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph 标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter 卡片标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* 其他重要元标签 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="zh-CN,en" />
      <meta name="robots" content="index, follow" />
      
      {/* PWA相关标签 */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* 网站图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
};

export default SEO; 