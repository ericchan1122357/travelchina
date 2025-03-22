'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PlannerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部导航 */}
      <header className="bg-china-red text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">旅行规划</h1>
          <Link href="/" className="hover:underline">
            返回首页
          </Link>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">创建您的个性化旅行计划</h2>
          
          {/* 目的地选择 */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">选择目的地</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['北京', '上海', '西安', '成都', '杭州', '桂林', '广州', '深圳'].map((city) => (
                <div key={city} className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                  {city}
                </div>
              ))}
            </div>
          </section>
          
          {/* 旅行时间 */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">旅行时间</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">出发日期</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">返回日期</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </section>
          
          {/* 旅行偏好 */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">旅行偏好</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <div>
                <label className="block text-gray-700 mb-2">住宿偏好</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>经济型酒店</option>
                  <option>中端酒店</option>
                  <option>豪华酒店</option>
                  <option>特色民宿</option>
                  <option>青年旅舍</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">饮食偏好</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>地方特色</option>
                  <option>高级餐厅</option>
                  <option>家常美食</option>
                  <option>街头小吃</option>
                  <option>素食/特殊饮食</option>
                </select>
              </div>
            </div>
          </section>
          
          {/* 额外需求 */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">额外需求</h3>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              placeholder="请告诉我们您的任何特殊需求或期望..."
            ></textarea>
          </section>
          
          {/* 提交按钮 */}
          <div className="flex justify-center">
            <button className="bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
              生成旅行计划
            </button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2023 中国旅游攻略. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
} 