'use client';

import { useState } from 'react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface SimplePlannerProps {
  onClose: () => void;
  currentLanguage: Language;
}

const SimplePlanner = ({ onClose, currentLanguage }: SimplePlannerProps) => {
  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{t('planner.title')}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('planner.destinations.selectCities')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                t('planner.destinations.cities.beijing'),
                t('planner.destinations.cities.shanghai'),
                t('planner.destinations.cities.xian'),
                t('planner.destinations.cities.chengdu'),
                t('planner.destinations.cities.hangzhou'),
                t('planner.destinations.cities.guilin')
              ].map((city) => (
                <div key={city} className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                  {city}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('planner.basicInfo.travelDates')}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">{t('planner.basicInfo.startDate')}</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">{t('planner.basicInfo.endDate')}</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('planner.basicInfo.travelType')}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">{t('planner.pace.title')}</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>{t('planner.pace.relaxed')}</option>
                  <option>{t('planner.pace.balanced')}</option>
                  <option>{t('planner.pace.intensive')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">{t('planner.basicInfo.budget')}</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>{t('planner.basicInfo.travelBudget.economy')}</option>
                  <option>{t('planner.basicInfo.travelBudget.standard')}</option>
                  <option>{t('planner.basicInfo.travelBudget.premium')}</option>
                  <option>{t('planner.basicInfo.travelBudget.luxury')}</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <button
              className="w-full p-3 bg-china-red text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('planner.submit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePlanner; 