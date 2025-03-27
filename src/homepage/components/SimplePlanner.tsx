'use client';

import { useState } from 'react';

interface SimplePlannerProps {
  onClose: () => void;
}

const SimplePlanner = ({ onClose }: SimplePlannerProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">旅行规划</h2>
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
            <h3 className="text-xl font-semibold text-gray-700 mb-3">选择目的地</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['北京', '上海', '西安', '成都', '杭州', '桂林'].map((city) => (
                <div key={city} className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                  {city}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">旅行时间</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">开始日期</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">结束日期</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">旅行偏好</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">旅行风格</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>休闲放松</option>
                  <option>文化探索</option>
                  <option>美食之旅</option>
                  <option>自然风光</option>
                  <option>深度体验</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">预算范围</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>经济型 (¥3000以下)</option>
                  <option>标准型 (¥3000-¥6000)</option>
                  <option>高端型 (¥6000-¥10000)</option>
                  <option>奢华型 (¥10000以上)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <button
              className="w-full p-3 bg-china-red text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              生成行程
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePlanner; 