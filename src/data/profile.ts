import { site, type Locale } from './site';

export const profile = {
  name: '洪陈源', nameEn: 'Chenyuan Hong', shortName: '洪陈源',
  title: { zh: '电子科技大学控制科学与工程硕士研究生', en: 'M.S. student in Control Science and Engineering' } as Record<Locale, string>,
  affiliation: { zh: '电子科技大学自动化工程学院 · 长三角（湖州）高等研究院', en: 'School of Automation Engineering, UESTC · Yangtze Delta Region Institute (Huzhou)' } as Record<Locale, string>,
  location: { zh: '浙江', en: 'Zhejiang, China' } as Record<Locale, string>,
  email: '15857735995@163.com', website: site.url, github: '', googleScholar: '', orcid: '', portrait: '',
  bio: { zh: '电子科技大学控制科学与工程硕士研究生，研究方向聚焦飞行器控制、可重构无人机、视觉 SLAM 与多机器人自主协同。围绕 GNSS 受限环境下的无人机自主定位、组合飞行、故障与外扰补偿、自主降落等问题开展研究，并持续进行真实无人机系统集成与实验验证。', en: 'I am an M.S. student in Control Science and Engineering at UESTC, working on flight control, reconfigurable UAVs, visual SLAM, and multi-robot autonomy. My research addresses autonomous UAV localization in GNSS-constrained environments, combined flight, compensation for rotor faults and external disturbances, and autonomous landing. I also integrate these methods into physical UAV systems and validate them experimentally.' } as Record<Locale, string>,
  researchInterests: { zh: ['飞行器控制', '可重构无人机', '视觉 SLAM', '多机器人自主协同'], en: ['Flight Control', 'Reconfigurable UAVs', 'Visual SLAM', 'Multi-Robot Autonomy'] } as Record<Locale, string[]>,
};
