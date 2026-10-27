import type { Locale } from './site';
export type Publication = { title: string; venue: string; year: string; status: string; contribution: string; projectSlug: string };
const papers = [
  { title: 'Wrench-residual-based Compensation for Rotor Loss of Effectiveness and External Force in Quadrotors', venue: 'ISA Transactions', status: { zh: '已投稿', en: 'Submitted to ISA Transactions' }, year: '', contribution: { zh: '第一作者', en: 'First Author' }, projectSlug: 'reconfigurable-uav' },
  { title: 'Connection Modeling and Disturbance-Resistant Distributed Control for Reconfigurable Quadrotor', venue: 'IEEE Robotics and Automation Letters (RA-L)', year: '', contribution: { zh: '第二作者', en: 'Second Author' }, projectSlug: 'reconfigurable-uav' },
];
const forLocale = (locale: Locale): Publication[] => papers.map(({ contribution, status, ...facts }) => ({ ...facts, status: status?.[locale] ?? (locale === 'zh' ? '审稿中' : 'Under Review'), contribution: contribution[locale] }));
export const publications: Record<Locale, Publication[]> = { zh: forLocale('zh'), en: forLocale('en') };
