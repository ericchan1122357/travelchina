import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import DestinationTemplate from './utils/DestinationTemplate';
import { getDestinationContent } from './utils/destinationContent';

const DestinationDetailPage = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || 'xian'; // 默认为西安

  const [content, setContent] = useState(getDestinationContent(city));

  useEffect(() => {
    // 当city参数改变时更新内容
    setContent(getDestinationContent(city));
  }, [city]);

  return (
    <div className="w-full">
      <DestinationTemplate 
        title={content.title}
        subtitle={content.subtitle}
        sections={content.sections}
      />
    </div>
  );
};

export default DestinationDetailPage; 