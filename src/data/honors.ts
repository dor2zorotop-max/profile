import type { Locale } from './site';
export type Honor = { title: string; note: string; year: string };
const entries = [
  { year: '2025', title: { zh: '电子科技大学优秀研究生学业奖学金', en: 'Outstanding Graduate Academic Scholarship, UESTC' }, note: { zh: '前 5%', en: 'Top 5%' } },
  { year: '2024', title: { zh: '浙江省政府奖学金', en: 'Zhejiang Provincial Government Scholarship' }, note: { zh: '前 3%', en: 'Top 3%' } },
  { year: '2024', title: { zh: '校级学业奖学金', en: 'University Academic Scholarship' }, note: { zh: '前 10%', en: 'Top 10%' } },
];
const forLocale = (locale: Locale): Honor[] => entries.map(({ year, title, note }) => ({ year, title: title[locale], note: note[locale] }));
export const honors: Record<Locale, Honor[]> = { zh: forLocale('zh'), en: forLocale('en') };
