'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
import { zhCN } from 'date-fns/locale/zh-CN';
import { ja } from 'date-fns/locale/ja';
import { ko } from 'date-fns/locale/ko';
import { fr } from 'date-fns/locale/fr';
import { de } from 'date-fns/locale/de';
import { es } from 'date-fns/locale/es';
import { ru } from 'date-fns/locale/ru';

// 注册所有语言
registerLocale('zh', zhCN);
registerLocale('ja', ja);
registerLocale('ko', ko);
registerLocale('fr', fr);
registerLocale('de', de);
registerLocale('es', es);
registerLocale('ru', ru);

interface BasicInfoProps {
  language: Language;
  onNext: (data: BasicInfoData) => void;
}

export interface BasicInfoData {
  startDate: Date | null;
  endDate: Date | null;
  travelType: 'solo' | 'couple' | 'family' | 'friends';
  budget: number;
}

type TravelType = BasicInfoData['travelType'];

export default function BasicInfo({ language, onNext }: BasicInfoProps) {
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState<BasicInfoData>({
    startDate: null,
    endDate: null,
    travelType: 'solo',
    budget: 5000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.startDate && formData.endDate) {
      onNext(formData);
    }
  };

  const travelTypes: TravelType[] = ['solo', 'couple', 'family', 'friends'];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* 旅行时间选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.basicInfo.travelDates')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('planner.basicInfo.startDate')}
            </label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              locale={language}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('planner.basicInfo.endDate')}
            </label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              dateFormat="yyyy/MM/dd"
              minDate={formData.startDate || new Date()}
              locale={language}
            />
          </div>
        </div>
      </div>

      {/* 旅行类型选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.basicInfo.travelType')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {travelTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, travelType: type })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                formData.travelType === type
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {t(`planner.basicInfo.travelTypes.${type}` as const)}
            </button>
          ))}
        </div>
      </div>

      {/* 预算范围选择 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.basicInfo.budget')}
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>¥1,000</span>
            <span>¥{formData.budget.toLocaleString()}</span>
            <span>¥50,000</span>
          </div>
        </div>
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!formData.startDate || !formData.endDate}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t('planner.next')}
        </button>
      </div>
    </form>
  );
} 