'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import { motion } from 'framer-motion';
import { TranslationValue } from '@/homepage/utils/translations';

interface SpecialRequirementsProps {
  language: Language;
  onNext: (data: SpecialRequirementsData) => void;
}

export interface SpecialRequirementsData {
  accessibility: {
    wheelchair: boolean;
    elevator: boolean;
    groundFloor: boolean;
  };
  medical: {
    firstAid: boolean;
    hospitalNearby: boolean;
    medicineStorage: boolean;
  };
  dietary: {
    halal: boolean;
    kosher: boolean;
    allergies: string[];
  };
  other: string;
}

// 常见食物过敏原
const commonAllergies = [
  { id: 'peanuts', icon: '🥜', translationKey: 'planner.special.dietary.allergy.peanuts' as const },
  { id: 'seafood', icon: '🦐', translationKey: 'planner.special.dietary.allergy.seafood' as const },
  { id: 'dairy', icon: '🥛', translationKey: 'planner.special.dietary.allergy.dairy' as const },
  { id: 'eggs', icon: '🥚', translationKey: 'planner.special.dietary.allergy.eggs' as const },
  { id: 'gluten', icon: '🌾', translationKey: 'planner.special.dietary.allergy.gluten' as const },
  { id: 'soy', icon: '🫘', translationKey: 'planner.special.dietary.allergy.soy' as const }
] as const;

export default function SpecialRequirements({ language, onNext }: SpecialRequirementsProps) {
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState<SpecialRequirementsData>({
    accessibility: {
      wheelchair: false,
      elevator: false,
      groundFloor: false
    },
    medical: {
      firstAid: false,
      hospitalNearby: false,
      medicineStorage: false
    },
    dietary: {
      halal: false,
      kosher: false,
      allergies: []
    },
    other: ''
  });

  const handleAccessibilityChange = (key: keyof SpecialRequirementsData['accessibility']) => {
    setFormData(prev => ({
      ...prev,
      accessibility: {
        ...prev.accessibility,
        [key]: !prev.accessibility[key]
      }
    }));
  };

  const handleMedicalChange = (key: keyof SpecialRequirementsData['medical']) => {
    setFormData(prev => ({
      ...prev,
      medical: {
        ...prev.medical,
        [key]: !prev.medical[key]
      }
    }));
  };

  const handleDietaryChange = (key: keyof Omit<SpecialRequirementsData['dietary'], 'allergies'>) => {
    setFormData(prev => ({
      ...prev,
      dietary: {
        ...prev.dietary,
        [key]: !prev.dietary[key]
      }
    }));
  };

  const handleAllergyToggle = (allergyId: string) => {
    setFormData(prev => ({
      ...prev,
      dietary: {
        ...prev.dietary,
        allergies: prev.dietary.allergies.includes(allergyId)
          ? prev.dietary.allergies.filter(id => id !== allergyId)
          : [...prev.dietary.allergies, allergyId]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* 无障碍设施需求 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.special.accessibility.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.accessibility.wheelchair}
              onChange={() => handleAccessibilityChange('wheelchair')}
              className="h-4 w-4 text-blue-600"
            />
            <span>♿ {t('planner.special.accessibility.wheelchair')}</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.accessibility.elevator}
              onChange={() => handleAccessibilityChange('elevator')}
              className="h-4 w-4 text-blue-600"
            />
            <span>🛗 {t('planner.special.accessibility.elevator')}</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.accessibility.groundFloor}
              onChange={() => handleAccessibilityChange('groundFloor')}
              className="h-4 w-4 text-blue-600"
            />
            <span>🏠 {t('planner.special.accessibility.groundFloor')}</span>
          </label>
        </div>
      </div>

      {/* 医疗需求 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.special.medical.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.medical.firstAid}
              onChange={() => handleMedicalChange('firstAid')}
              className="h-4 w-4 text-blue-600"
            />
            <span>🩹 {t('planner.special.medical.firstAid')}</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.medical.hospitalNearby}
              onChange={() => handleMedicalChange('hospitalNearby')}
              className="h-4 w-4 text-blue-600"
            />
            <span>🏥 {t('planner.special.medical.hospitalNearby')}</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.medical.medicineStorage}
              onChange={() => handleMedicalChange('medicineStorage')}
              className="h-4 w-4 text-blue-600"
            />
            <span>💊 {t('planner.special.medical.medicineStorage')}</span>
          </label>
        </div>
      </div>

      {/* 饮食限制 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.special.dietary.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.dietary.halal}
              onChange={() => handleDietaryChange('halal')}
              className="h-4 w-4 text-blue-600"
            />
            <span>🕌 {t('planner.special.dietary.halal')}</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-blue-300">
            <input
              type="checkbox"
              checked={formData.dietary.kosher}
              onChange={() => handleDietaryChange('kosher')}
              className="h-4 w-4 text-blue-600"
            />
            <span>✡️ {t('planner.special.dietary.kosher')}</span>
          </label>
        </div>

        {/* 食物过敏 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('planner.special.dietary.allergies')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {commonAllergies.map(allergy => (
              <button
                key={allergy.id}
                type="button"
                onClick={() => handleAllergyToggle(allergy.id)}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  formData.dietary.allergies.includes(allergy.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl mb-2 block">{allergy.icon}</span>
                {t(allergy.translationKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 其他需求 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('planner.special.other.title')}
        </h3>
        <textarea
          value={formData.other}
          onChange={(e) => setFormData(prev => ({ ...prev, other: e.target.value }))}
          placeholder={t('planner.special.other.placeholder')}
          className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {t('planner.finish')}
        </button>
      </div>
    </form>
  );
} 