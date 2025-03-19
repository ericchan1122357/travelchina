import { Language } from '@/homepage/types';

// 旅行计划类型定义
export interface TravelPlan {
  id: string;
  title: string;
  description: string;
  duration: number;
  budget: {
    total: number;
    breakdown: {
      accommodation: number;
      transportation: number;
      food: number;
      activities: number;
      other: number;
    };
  };
  dailyPlans: DailyPlan[];
  specialNotes: string[];
}

export interface DailyPlan {
  day: number;
  date: string;
  activities: Activity[];
  accommodation: string;
  meals: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

export interface Activity {
  id: string;
  name: string;
  type: 'attraction' | 'food' | 'culture' | 'nature' | 'shopping';
  description: string;
  duration: number;
  location: string;
  price: number;
  tips?: string[];
}

// 生成旅行计划的服务
export class TravelPlanService {
  private language: Language;
  private apiKey: string;
  private apiEndpoint: string;

  constructor(language: Language, apiKey: string, apiEndpoint: string) {
    this.language = language;
    this.apiKey = apiKey;
    this.apiEndpoint = apiEndpoint;
  }

  // 根据问卷数据生成旅行计划
  async generatePlan(questionnaireData: any): Promise<TravelPlan> {
    try {
      // 构建提示词
      const prompt = this.buildPrompt(questionnaireData);
      
      // 调用Deepseek API
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "你是一个专业的旅行规划助手,请根据用户提供的信息生成详细的旅行计划。请确保返回的是合法的JSON格式。"
            },
            {
              role: "user",
              content: prompt
            }
          ],
          model: "deepseek-chat",
          temperature: 0.7,
          max_tokens: 2000,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        throw new Error(`API调用失败: ${response.statusText}`);
      }

      const data = await response.json();
      
      // 解析API响应并转换为TravelPlan格式
      return this.parseResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('生成旅行计划失败:', error);
      throw new Error('生成旅行计划失败');
    }
  }

  // 构建提示词
  private buildPrompt(questionnaireData: any): string {
    const languageMap = {
      zh: '中文',
      en: 'English',
      ja: '日本語',
      ko: '한국어',
      fr: 'Français',
      de: 'Deutsch',
      es: 'Español',
      ru: 'Русский'
    };

    return `请用${languageMap[this.language]}生成一个详细的旅行计划。基于以下信息：

旅行时间：${questionnaireData.startDate} 到 ${questionnaireData.endDate}
旅行类型：${questionnaireData.travelType}
预算范围：${questionnaireData.budget}

目的地偏好：
${questionnaireData.destinationPreferences.map((pref: string) => `- ${pref}`).join('\n')}

兴趣偏好：
${questionnaireData.interests.map((interest: string) => `- ${interest}`).join('\n')}

特殊需求：
${questionnaireData.specialRequirements.map((req: string) => `- ${req}`).join('\n')}

请生成一个包含以下内容的JSON格式旅行计划：
1. 计划标题和描述
2. 总预算和预算明细
3. 每日行程安排（包括住宿、活动和餐饮）
4. 特别注意事项

请确保生成的JSON格式符合以下接口：
{
  id: string;
  title: string;
  description: string;
  duration: number;
  budget: {
    total: number;
    breakdown: {
      accommodation: number;
      transportation: number;
      food: number;
      activities: number;
      other: number;
    };
  };
  dailyPlans: Array<{
    day: number;
    date: string;
    activities: Array<{
      id: string;
      name: string;
      type: 'attraction' | 'food' | 'culture' | 'nature' | 'shopping';
      description: string;
      duration: number;
      location: string;
      price: number;
      tips?: string[];
    }>;
    accommodation: string;
    meals: {
      breakfast?: string;
      lunch?: string;
      dinner?: string;
    };
  }>;
  specialNotes: string[];
}`;
  }

  // 解析API响应
  private parseResponse(response: string): TravelPlan {
    try {
      // 尝试直接解析JSON
      const plan = JSON.parse(response);
      return this.validateAndFormatPlan(plan);
    } catch (error) {
      // 如果直接解析失败,尝试提取JSON部分
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const plan = JSON.parse(jsonMatch[0]);
        return this.validateAndFormatPlan(plan);
      }
      throw new Error('无法解析API响应');
    }
  }

  // 验证和格式化计划
  private validateAndFormatPlan(plan: any): TravelPlan {
    // 验证必要字段
    if (!plan.id || !plan.title || !plan.description || !plan.duration || !plan.budget || !plan.dailyPlans || !plan.specialNotes) {
      throw new Error('计划缺少必要字段');
    }

    // 确保所有字段类型正确
    return {
      id: String(plan.id),
      title: String(plan.title),
      description: String(plan.description),
      duration: Number(plan.duration),
      budget: {
        total: Number(plan.budget.total),
        breakdown: {
          accommodation: Number(plan.budget.breakdown?.accommodation || 0),
          transportation: Number(plan.budget.breakdown?.transportation || 0),
          food: Number(plan.budget.breakdown?.food || 0),
          activities: Number(plan.budget.breakdown?.activities || 0),
          other: Number(plan.budget.breakdown?.other || 0)
        }
      },
      dailyPlans: plan.dailyPlans.map((day: any) => ({
        day: Number(day.day),
        date: String(day.date),
        activities: day.activities.map((activity: any) => ({
          id: String(activity.id),
          name: String(activity.name),
          type: activity.type,
          description: String(activity.description),
          duration: Number(activity.duration),
          location: String(activity.location),
          price: Number(activity.price),
          tips: activity.tips?.map((tip: string) => String(tip))
        })),
        accommodation: String(day.accommodation),
        meals: {
          breakfast: day.meals?.breakfast ? String(day.meals.breakfast) : undefined,
          lunch: day.meals?.lunch ? String(day.meals.lunch) : undefined,
          dinner: day.meals?.dinner ? String(day.meals.dinner) : undefined
        }
      })),
      specialNotes: plan.specialNotes.map((note: string) => String(note))
    };
  }
} 