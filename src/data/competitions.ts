import type { Locale } from './site';
export type Competition = { period: string; competition: string; track: string; award: string; contribution: string };
export const competitions: Record<Locale, Competition[]> = {
  zh: [
    { period: '2023.11 – 2024.05', competition: '中国机器人大赛暨 RoboCup 机器人世界杯中国赛', track: '无人机挑战赛', award: '国家一等奖 · 冠军', contribution: '负责多环 PID 调节、视觉标定与去畸变、移动目标跟踪，以及 A* 与 EGO-Planner 路径规划和避障优化。' },
    { period: '2022.08 – 2024.08', competition: '第十九届全国大学生智能汽车竞赛', track: '百度智慧交通组', award: '国家一等奖', contribution: '负责轮式里程计与惯性导航定位、yaw 闭环调整、CNN 偏差模型自主巡航，以及车模机械结构和主控板设计。' },
    { period: '2026.03 – 2026.08', competition: '第二十一届中国研究生电子设计竞赛', track: '纯视觉定位的四旋翼无人机组合飞行', award: '国家三等奖', contribution: '' },
  ], en: [],
};
