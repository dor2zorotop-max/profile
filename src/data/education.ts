import type { Locale } from './site';
export type EducationItem = { period: string; institution: string; school: string; degree: string; field: string };
export const education: Record<Locale, EducationItem[]> = {
  zh: [
    { period: '2025.07 – 至今', institution: '电子科技大学', school: '自动化工程学院 · 长三角（湖州）高等研究院', degree: '硕士研究生', field: '控制科学与工程' },
    { period: '2021.09 – 2025.06', institution: '浙江工业大学', school: '健行荣誉学院 · 信息工程学院', degree: '本科', field: '自动化' },
  ], en: [],
};
