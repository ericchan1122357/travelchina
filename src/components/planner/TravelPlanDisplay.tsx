'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import { TravelPlan } from '@/services/travelPlanService';

interface TravelPlanDisplayProps {
  language: Language;
  plan: TravelPlan;
}

export default function TravelPlanDisplay({ language, plan }: TravelPlanDisplayProps) {
  const { t } = useTranslation(language);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 计划概览 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">{t('planner.plan.duration')}</h3>
            <p>{plan.duration} {t('planner.plan.days')}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('planner.plan.budget')}</h3>
            <p>¥{plan.budget.total}</p>
          </div>
        </div>
      </motion.div>

      {/* 每日行程 */}
      <div className="space-y-6">
        {plan.dailyPlans.map((dailyPlan, index) => (
          <motion.div
            key={dailyPlan.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">
              {t('planner.plan.day')} {dailyPlan.day} - {dailyPlan.date}
            </h3>
            
            {/* 住宿信息 */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{t('planner.plan.accommodation')}</h4>
              <p>{dailyPlan.accommodation}</p>
            </div>

            {/* 活动列表 */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{t('planner.plan.activities')}</h4>
              <div className="space-y-4">
                {dailyPlan.activities.map((activity) => (
                  <div key={activity.id} className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium">{activity.name}</h5>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span>{activity.duration} {t('planner.plan.hours')}</span>
                      <span className="mx-2">•</span>
                      <span>¥{activity.price}</span>
                    </div>
                    {activity.tips && activity.tips.length > 0 && (
                      <ul className="mt-2 text-sm text-gray-500">
                        {activity.tips.map((tip, i) => (
                          <li key={i}>• {tip}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 餐饮信息 */}
            <div>
              <h4 className="font-semibold mb-2">{t('planner.plan.meals')}</h4>
              <div className="grid grid-cols-3 gap-4">
                {dailyPlan.meals.breakfast && (
                  <div>
                    <h5 className="font-medium">{t('planner.plan.breakfast')}</h5>
                    <p className="text-gray-600">{dailyPlan.meals.breakfast}</p>
                  </div>
                )}
                {dailyPlan.meals.lunch && (
                  <div>
                    <h5 className="font-medium">{t('planner.plan.lunch')}</h5>
                    <p className="text-gray-600">{dailyPlan.meals.lunch}</p>
                  </div>
                )}
                {dailyPlan.meals.dinner && (
                  <div>
                    <h5 className="font-medium">{t('planner.plan.dinner')}</h5>
                    <p className="text-gray-600">{dailyPlan.meals.dinner}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 特殊注意事项 */}
      {plan.specialNotes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-yellow-50 rounded-lg p-6 mt-8"
        >
          <h3 className="text-xl font-bold mb-4">{t('planner.plan.specialNotes')}</h3>
          <ul className="space-y-2">
            {plan.specialNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
} 