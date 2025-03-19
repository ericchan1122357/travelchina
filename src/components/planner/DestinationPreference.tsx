'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import Image from 'next/image';

interface DestinationPreferenceProps {
  language: Language;
  onNext: (data: DestinationPreferenceData) => void;
}

export interface DestinationPreferenceData {
  cities: string[];
  recommendedRoute: string | null;
}

// 推荐路线类型
type RecommendedRoute = {
  id: string;
  cities: string[];
};

// 定义推荐路线
const recommendedRoutes: Record<string, RecommendedRoute> = {
  'classic': {
    id: 'classic',
    cities: ['beijing', 'shanghai', 'guangzhou']
  },
  'cultural': {
    id: 'cultural',
    cities: ['beijing', 'xian', 'chengdu']
  },
  'nature': {
    id: 'nature',
    cities: ['guilin', 'zhangjiajie', 'huangshan']
  }
};

// 定义城市数据
const cities = [
  { id: 'beijing', name: 'planner.cities.beijing' },
  { id: 'shanghai', name: 'planner.cities.shanghai' },
  { id: 'guangzhou', name: 'planner.cities.guangzhou' },
  { id: 'xian', name: 'planner.cities.xian' },
  { id: 'chengdu', name: 'planner.cities.chengdu' },
  { id: 'guilin', name: 'planner.cities.guilin' },
  { id: 'zhangjiajie', name: 'planner.cities.zhangjiajie' },
  { id: 'huangshan', name: 'planner.cities.huangshan' }
];

export default function DestinationPreference({ language, onNext }: DestinationPreferenceProps) {
  const { t } = useTranslation(language);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const handleCityToggle = (cityId: string) => {
    setSelectedCities(prev => {
      if (prev.includes(cityId)) {
        return prev.filter(id => id !== cityId);
      } else {
        return [...prev, cityId];
      }
    });
    // 当手动选择城市时，清除已选择的推荐路线
    setSelectedRoute(null);
  };

  const handleRouteSelect = (routeId: string) => {
    setSelectedRoute(routeId);
    setSelectedCities(recommendedRoutes[routeId].cities);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCities.length > 0) {
      onNext({
        cities: selectedCities,
        recommendedRoute: selectedRoute
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* 推荐路线选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.destinations.recommendedRoutes')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(recommendedRoutes).map(([key, route]) => (
            <button
              key={key}
              type="button"
              onClick={() => handleRouteSelect(route.id)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                selectedRoute === route.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {t(`planner.destinations.routes.${key}`)}
            </button>
          ))}
        </div>
      </div>

      {/* 城市选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.destinations.selectCities')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map(city => (
            <button
              key={city.id}
              type="button"
              onClick={() => handleCityToggle(city.id)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                selectedCities.includes(city.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {t(city.name)}
            </button>
          ))}
        </div>
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={selectedCities.length === 0}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t('planner.next')}
        </button>
      </div>
    </form>
  );
} 