'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import BasicInfo, { BasicInfoData } from './BasicInfo';
import DestinationPreference, { DestinationPreferenceData } from './DestinationPreference';
import InterestPreference, { InterestPreferenceData } from './InterestPreference';
import SpecialRequirements, { SpecialRequirementsData } from './SpecialRequirements';
import { Language } from '@/homepage/types';
import { TranslationValue } from '@/homepage/utils/translations/types';

interface QuestionnaireProps {
  language: Language;
}

interface QuestionnaireData {
  basicInfo: BasicInfoData;
  destinationPreference: DestinationPreferenceData;
  interestPreference: InterestPreferenceData;
  specialRequirements: SpecialRequirementsData;
}

export default function Questionnaire({ language }: QuestionnaireProps) {
  const { t } = useTranslation(language);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<QuestionnaireData>>({});

  const handleBasicInfoNext = async (data: BasicInfoData) => {
    setLoading(true);
    setError(null);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(prev => ({ ...prev, basicInfo: data }));
      setCurrentStep(2);
    } catch (err) {
      setError(t('planner.error.general'));
    } finally {
      setLoading(false);
    }
  };

  const handleDestinationPreferenceNext = async (data: DestinationPreferenceData) => {
    setLoading(true);
    setError(null);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(prev => ({ ...prev, destinationPreference: data }));
      setCurrentStep(3);
    } catch (err) {
      setError(t('planner.error.general'));
    } finally {
      setLoading(false);
    }
  };

  const handleInterestPreferenceNext = async (data: InterestPreferenceData) => {
    setLoading(true);
    setError(null);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(prev => ({ ...prev, interestPreference: data }));
      // TODO: 进入下一步或完成问卷
      setCurrentStep(4);
    } catch (err) {
      setError(t('planner.error.general'));
    } finally {
      setLoading(false);
    }
  };

  const handleSpecialRequirementsNext = async (data: SpecialRequirementsData) => {
    setLoading(true);
    setError(null);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(prev => ({ ...prev, specialRequirements: data }));
      // TODO: 完成问卷,生成旅行计划
      console.log('Questionnaire completed:', { ...formData, specialRequirements: data });
    } catch (err) {
      setError(t('planner.error.general'));
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <BasicInfo language={language} onNext={handleBasicInfoNext} />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <DestinationPreference language={language} onNext={handleDestinationPreferenceNext} />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <InterestPreference language={language} onNext={handleInterestPreferenceNext} />
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <SpecialRequirements language={language} onNext={handleSpecialRequirementsNext} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 进度指示器 */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === currentStep
                  ? 'bg-blue-500 text-white'
                  : step < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step < currentStep ? '✓' : step}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-gray-600">
          {(() => {
            const stepKeys: Record<number, keyof TranslationValue> = {
              1: 'planner.step1',
              2: 'planner.step2',
              3: 'planner.step3',
              4: 'planner.step4'
            };
            return t(stepKeys[currentStep] || 'planner.step');
          })()}
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* 加载状态 */}
      {loading && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* 表单步骤 */}
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
} 