import type { Locale } from './site';
export type ResearchTheme = { title: string; description: string };
export const research: Record<Locale, ResearchTheme[]> = {
  zh: [
    { title: '飞行器控制', description: '围绕多旋翼运动建模、状态估计、闭环控制与故障和外扰补偿开展研究。' },
    { title: '可重构无人机', description: '研究构型重构、主动锁合与组合飞行中的系统建模、轨迹规划和协同控制。' },
    { title: '视觉 SLAM', description: '面向 GNSS 受限环境，研究纯视觉定位与复杂环境下的位姿估计稳定性。' },
    { title: '多机器人自主协同', description: '关注多机并行对接、空地协同、自主降落与分布式抗扰控制。' },
  ],
  en: [
    { title: 'Flight Control', description: 'Research on multirotor dynamics modeling, state estimation, closed-loop control, and compensation for rotor faults and external disturbances.' },
    { title: 'Reconfigurable UAVs', description: 'System modeling, trajectory planning, and cooperative control for configuration changes, active locking, and combined flight.' },
    { title: 'Visual SLAM', description: 'Visual-only localization in GNSS-constrained environments, with a focus on robust pose estimation in complex settings.' },
    { title: 'Multi-Robot Autonomy', description: 'Parallel multi-UAV docking, air-ground coordination, autonomous landing, and distributed disturbance-resistant control.' },
  ],
};
