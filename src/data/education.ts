import type { Locale } from './site';
export type EducationItem = { period: string; institution: string; school: string; degree: string; field: string };
const entries = [
  { start: '2025.07', end: '', institution: { zh: '电子科技大学', en: 'University of Electronic Science and Technology of China' }, school: { zh: '自动化工程学院 · 长三角（湖州）高等研究院', en: 'School of Automation Engineering · Yangtze Delta Region Institute (Huzhou)' }, degree: { zh: '硕士研究生', en: 'M.S. student' }, field: { zh: '控制科学与工程', en: 'Control Science and Engineering' } },
  { start: '2021.09', end: '2025.06', institution: { zh: '浙江工业大学', en: 'Zhejiang University of Technology' }, school: { zh: '健行荣誉学院 · 信息工程学院', en: 'Jianxing Honors College · College of Information Engineering' }, degree: { zh: '本科', en: "Bachelor's degree" }, field: { zh: '自动化', en: 'Automation' } },
];
const forLocale = (locale: Locale): EducationItem[] => entries.map(({ start, end, institution, school, degree, field }) => ({
  period: `${start} – ${end || (locale === 'zh' ? '至今' : 'Present')}`,
  institution: institution[locale], school: school[locale], degree: degree[locale], field: field[locale],
}));
export const education: Record<Locale, EducationItem[]> = { zh: forLocale('zh'), en: forLocale('en') };
