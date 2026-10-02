import type { Locale } from './site';
import { publications, type Publication } from './publications';

export type Localized = { zh: string; en: string };
export type ProjectMedia = { src: string; alt: Localized; caption: Localized };
export type ProjectVideo = { src: string; poster: string; caption: Localized };
export type Project = {
  slug: string; order: number; period: Localized; year: string; title: Localized; type: Localized; role: Localized; summary: Localized;
  overview: Localized; technicalWork: Localized; result: Localized; bullets: { zh: string[]; en: string[] }; heroImage: string; gallery: ProjectMedia[]; videos: ProjectVideo[]; publications: Publication[];
};

export const projects: Project[] = [
  {
    slug: 'reconfigurable-uav', order: 1, period: { zh: '2025.06 – 至今', en: '2025.06 – Present' }, year: '2025',
    title: { zh: '基于 ORB-SLAM3 纯视觉定位的可重构无人机系统', en: 'Reconfigurable UAV' }, type: { zh: '持续研究课题', en: '' }, role: { zh: '主要研究成员', en: '' },
    summary: { zh: '面向 GNSS 受限环境下的多旋翼自主协同与构型重构，研究纯视觉定位、组合飞行与分布式控制。', en: '' },
    overview: { zh: '课题面向 GNSS 受限环境下多旋翼自主协同与构型重构需求，构建基于 ORB-SLAM3 纯视觉定位的可重构四旋翼无人机系统。', en: '' },
    technicalWork: { zh: '围绕视觉定位算法、系统建模与控制、多机轨迹规划及仿真与实物验证展开研究。', en: '' }, result: { zh: '', en: '' },
    bullets: { zh: ['ORB-SLAM3 纯视觉定位与四叉树深度显著性加权 BA', '可重构四旋翼系统与主动锁合机构', 'Legendre pseudospectral trajectory generation', '时变避障约束与多机并行对接', '旋翼故障与外扰补偿、组合状态分布式抗扰控制'], en: [] },
    heroImage: '', gallery: [], videos: [], publications: publications.zh.filter(item => item.projectSlug === 'reconfigurable-uav'),
  },
  {
    slug: 'autonomous-landing', order: 2, period: { zh: '2025.12 – 至今', en: '2025.12 – Present' }, year: '2025',
    title: { zh: '面向智能捕获式降落平台的四旋翼空地协同视觉引导与自主对接研究', en: 'Autonomous Landing' }, type: { zh: '硕士课题', en: '' }, role: { zh: '独立负责', en: '' },
    summary: { zh: '研究基于 ORB-SLAM3 的视觉状态估计与空地协同对接方法，构建无人机、NUC 智能降落平台和主动捕获机构组成的协同系统。', en: '' },
    overview: { zh: '课题针对四旋翼降落过程中的定位漂移、姿态不对准和落地后易受扰动等问题，研究空地协同视觉引导与自主对接。', en: '' },
    technicalWork: { zh: '独立负责系统方案、视觉定位、轨迹规划与跟踪、协同控制及实验验证。', en: '' }, result: { zh: '', en: '' },
    bullets: { zh: ['ORB-SLAM3 视觉状态估计', '无人机与 NUC 智能降落平台空地协同', '平台偏航自主对准与爪夹主动捕获', '视觉定位、轨迹规划与跟踪、协同控制'], en: [] },
    heroImage: '', gallery: [], videos: [], publications: [],
  },
  {
    slug: 'exoskeleton', order: 3, period: { zh: '2023.09 – 2024.06', en: '2023.09 – 2024.06' }, year: '2023',
    title: { zh: '一种基于柔性驱动的仿生下肢外骨骼机器人', en: 'Exoskeleton Robot' }, type: { zh: '国家级大学生创新项目', en: '' }, role: { zh: '项目负责人', en: '' },
    summary: { zh: '面向下肢运动障碍患者的行走助力需求，研究柔性驱动外骨骼的非线性建模、力跟踪与机械结构设计。', en: '' },
    overview: { zh: '基于修正的 Maxwell-Slip 模型提出虚拟形变与重力补偿思想，建立柔性驱动外骨骼及其力矩精确建模方法。', en: '' },
    technicalWork: { zh: '负责迟滞模型理论推导、力跟踪性能分析，以及以柔性变刚度驱动器 rSEA 为核心的外骨骼机械结构设计。', en: '' }, result: { zh: '发明专利《基于柔性驱动的仿生人体膝关节外骨骼机器人》，第一作者。', en: '' },
    bullets: { zh: ['Maxwell-Slip 非线性模型与迟滞建模', '柔性驱动、虚拟形变与重力补偿', '力跟踪性能分析', 'rSEA 柔性变刚度驱动器与外骨骼机械结构'], en: [] },
    heroImage: '', gallery: [], videos: [], publications: [],
  },
];

export const projectFor = (locale: Locale, slug: string) => projects.find(project => project.slug === slug);
