'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import { TranslationValue } from '@/homepage/utils/translations';
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
  '1': {
    id: '1',
    cities: ['beijing', 'shanghai', 'guangzhou']
  },
  '2': {
    id: '2',
    cities: ['beijing', 'xian', 'chengdu']
  },
  '3': {
    id: '3',
    cities: ['guilin', 'zhangjiajie', 'huangshan']
  }
} as const;

type RouteKey = keyof typeof recommendedRoutes;

// 定义城市数据
const cities = [
  { id: 'beijing', name: 'planner.destinations.cities.beijing' as const },
  { id: 'shanghai', name: 'planner.destinations.cities.shanghai' as const },
  { id: 'guangzhou', name: 'planner.destinations.cities.guangzhou' as const },
  { id: 'xian', name: 'planner.destinations.cities.xian' as const },
  { id: 'chengdu', name: 'planner.destinations.cities.chengdu' as const },
  { id: 'guilin', name: 'planner.destinations.cities.guilin' as const },
  { id: 'zhangjiajie', name: 'planner.destinations.cities.zhangjiajie' as const },
  { id: 'huangshan', name: 'planner.destinations.cities.huangshan' as const }
] as const;

type CityName = typeof cities[number]['name'];

export default function DestinationPreference({ language, onNext }: DestinationPreferenceProps) {
  const { t } = useTranslation(language);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<RouteKey | null>(null);

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

  const handleRouteSelect = (routeId: RouteKey) => {
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
              onClick={() => handleRouteSelect(key as RouteKey)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                selectedRoute === key
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {t(`planner.destinations.route${key}` as keyof TranslationValue)}
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