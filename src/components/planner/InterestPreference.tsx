'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import { motion } from 'framer-motion';

interface InterestPreferenceProps {
  language: Language;
  onNext: (data: InterestPreferenceData) => void;
}

export interface InterestPreferenceData {
  interests: string[];
  pace: number; // 1-5, 1为最慢，5为最快
  accommodation: 'budget' | 'comfort' | 'luxury';
  dining: {
    spiciness: number; // 1-5, 1为不辣，5为特辣
    cuisineTypes: string[]; // ['seafood', 'meat', 'vegetarian', 'noodles', 'rice']
    diningStyle: string[]; // ['street', 'local', 'fine', 'theme']
    adventurous: number; // 1-5, 1为保守，5为冒险
  };
}

// 兴趣选项
const interests = [
  { id: 'history', icon: '🏛️' },
  { id: 'culture', icon: '🎭' },
  { id: 'nature', icon: '🏞️' },
  { id: 'food', icon: '🍜' },
  { id: 'shopping', icon: '🛍️' },
  { id: 'art', icon: '🎨' },
  { id: 'architecture', icon: '🏰' },
  { id: 'photography', icon: '📸' }
];

// 美食类型
const cuisineTypes = [
  { id: 'seafood', icon: '🦐' },
  { id: 'meat', icon: '🥩' },
  { id: 'vegetarian', icon: '🥬' },
  { id: 'noodles', icon: '🍜' },
  { id: 'rice', icon: '🍚' }
];

// 用餐环境
const diningStyles = [
  { id: 'street', icon: '🏪' },
  { id: 'local', icon: '🏮' },
  { id: 'fine', icon: '🍽️' },
  { id: 'theme', icon: '🎪' }
];

export default function InterestPreference({ language, onNext }: InterestPreferenceProps) {
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState<InterestPreferenceData>({
    interests: [],
    pace: 3,
    accommodation: 'comfort',
    dining: {
      spiciness: 3,
      cuisineTypes: [],
      diningStyle: [],
      adventurous: 3
    }
  });

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleCuisineTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      dining: {
        ...prev.dining,
        cuisineTypes: prev.dining.cuisineTypes.includes(type)
          ? prev.dining.cuisineTypes.filter(id => id !== type)
          : [...prev.dining.cuisineTypes, type]
      }
    }));
  };

  const handleDiningStyleToggle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      dining: {
        ...prev.dining,
        diningStyle: prev.dining.diningStyle.includes(style)
          ? prev.dining.diningStyle.filter(id => id !== style)
          : [...prev.dining.diningStyle, style]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.interests.length > 0) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* 兴趣选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.interests.title')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map(interest => (
            <button
              key={interest.id}
              type="button"
              onClick={() => handleInterestToggle(interest.id)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                formData.interests.includes(interest.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="text-2xl mb-2 block">{interest.icon}</span>
              {t(`planner.interests.${interest.id}`)}
            </button>
          ))}
        </div>
      </div>

      {/* 旅行节奏 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.pace.title')}
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min="1"
            max="5"
            value={formData.pace}
            onChange={(e) => setFormData(prev => ({ ...prev, pace: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t('planner.pace.relaxed')}</span>
            <span>{t('planner.pace.balanced')}</span>
            <span>{t('planner.pace.intensive')}</span>
          </div>
        </div>
      </div>

      {/* 住宿偏好 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.accommodation.title')}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {['budget', 'comfort', 'luxury'].map(type => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, accommodation: type as any }))}
              className={`p-4 border rounded-lg text-center transition-colors ${
                formData.accommodation === type
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {t(`planner.accommodation.${type}`)}
            </button>
          ))}
        </div>
      </div>

      {/* 饮食偏好 */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.dining.title')}
        </h3>

        {/* 辣度偏好 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('planner.dining.spiciness')}
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={formData.dining.spiciness}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              dining: { ...prev.dining, spiciness: parseInt(e.target.value) }
            }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t('planner.dining.notSpicy')}</span>
            <span>{t('planner.dining.medium')}</span>
            <span>{t('planner.dining.verySpicy')}</span>
          </div>
        </div>

        {/* 美食类型 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('planner.dining.cuisineTypes')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cuisineTypes.map(type => (
              <button
                key={type.id}
                type="button"
                onClick={() => handleCuisineTypeToggle(type.id)}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  formData.dining.cuisineTypes.includes(type.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl mb-2 block">{type.icon}</span>
                {t(`planner.dining.types.${type.id}`)}
              </button>
            ))}
          </div>
        </div>

        {/* 用餐环境 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('planner.dining.style')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {diningStyles.map(style => (
              <button
                key={style.id}
                type="button"
                onClick={() => handleDiningStyleToggle(style.id)}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  formData.dining.diningStyle.includes(style.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl mb-2 block">{style.icon}</span>
                {t(`planner.dining.styles.${style.id}`)}
              </button>
            ))}
          </div>
        </div>

        {/* 美食探索度 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('planner.dining.adventurous')}
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={formData.dining.adventurous}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              dining: { ...prev.dining, adventurous: parseInt(e.target.value) }
            }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t('planner.dining.conservative')}</span>
            <span>{t('planner.dining.moderate')}</span>
            <span>{t('planner.dining.adventurous')}</span>
          </div>
        </div>
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={formData.interests.length === 0}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t('planner.next')}
        </button>
      </div>
    </form>
  );
} 