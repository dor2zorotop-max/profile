import type { Locale } from './site';
export type Honor = { title: string; note: string; year: string };
export const honors: Record<Locale, Honor[]> = { zh: [
  { title: '电子科技大学优秀研究生学业奖学金', note: '前 5%', year: '2025' },
  { title: '浙江省政府奖学金', note: '前 3%', year: '2024' },
  { title: '校级学业奖学金', note: '前 10%', year: '2024' },
], en: [] };
