import type { Locale } from './site';
import { publications, type Publication } from './publications';

export type Localized = { zh: string; en: string };
export type ProjectMediaCategory = 'system' | 'method' | 'simulation' | 'experiment' | 'localization' | 'result';
export type ProjectMedia = { type: 'image'; src: string; category: ProjectMediaCategory; alt: Localized; caption: Localized };
export type ProjectVideo = { type: 'video'; src: string; title: Localized; category: ProjectMediaCategory; poster: string; caption: Localized; featured: boolean };
export type Project = {
  slug: string; order: number; period: Localized; year: string; title: Localized; type: Localized; role: Localized; summary: Localized;
  overview: Localized; technicalWork: Localized; result: Localized; bullets: { zh: string[]; en: string[] }; heroImage: string; heroCaption?: Localized; gallery: ProjectMedia[]; videos: ProjectVideo[]; publications: Publication[];
};

export const projects: Project[] = [
  {
    slug: 'reconfigurable-uav', order: 1, period: { zh: '2025.06 – 至今', en: '2025.06 – Present' }, year: '2025',
    title: { zh: '基于 ORB-SLAM3 纯视觉定位的可重构无人机系统', en: 'Reconfigurable UAV System with ORB-SLAM3 Visual-Only Localization' }, type: { zh: '持续研究课题', en: 'Ongoing research project' }, role: { zh: '主要研究成员', en: 'Core research team member' },
    summary: { zh: '面向 GNSS 受限环境下的多旋翼自主协同与构型重构，研究纯视觉定位、组合飞行与分布式控制。', en: 'Research on visual-only localization, combined flight, and distributed control for autonomous multirotor coordination and configuration changes in GNSS-constrained environments.' },
    overview: { zh: '课题面向 GNSS 受限环境下多旋翼自主协同与构型重构需求，构建基于 ORB-SLAM3 纯视觉定位的可重构四旋翼无人机系统。', en: 'This research develops a reconfigurable quadrotor system using ORB-SLAM3 visual-only localization to support autonomous multirotor coordination and configuration changes in GNSS-constrained environments.' },
    technicalWork: { zh: '围绕视觉定位算法、系统建模与控制、多机轨迹规划及仿真与实物验证展开研究。', en: 'The work covers visual localization algorithms, system modeling and control, multi-UAV trajectory planning, simulation, and validation on physical platforms.' }, result: { zh: '', en: '' },
    bullets: { zh: ['ORB-SLAM3 纯视觉定位与四叉树深度显著性加权 BA', '可重构四旋翼系统与主动锁合机构', 'Legendre pseudospectral trajectory generation', '时变避障约束与多机并行对接', '旋翼故障与外扰补偿、组合状态分布式抗扰控制'], en: ['ORB-SLAM3 visual-only localization and quadtree depth-saliency-weighted bundle adjustment', 'Reconfigurable quadrotor system and active locking mechanism', 'Legendre pseudospectral trajectory generation', 'Time-varying obstacle avoidance constraints and parallel multi-UAV docking', 'Compensation for rotor faults and external disturbances, and distributed disturbance-resistant control in the combined configuration'] },
    heroImage: '/media/research/reconfigurable-uav/reconfigurable-uav-real.jpg',
    heroCaption: { zh: '实物可重构四旋翼无人机系统，外围集成多方向组合框架与主动对接机构。', en: 'Physical reconfigurable quadrotor platform with peripheral modular docking structures and active locking mechanisms.' },
    gallery: [
      { type: 'image', src: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', category: 'system', alt: { zh: '可重构四旋翼系统模型', en: 'Reconfigurable quadrotor system model' }, caption: { zh: 'SolidWorks 中的可重构四旋翼系统模型，用于展示模块化机体与外围对接结构。', en: 'SolidWorks model of the reconfigurable quadrotor system, showing the modular airframe and peripheral docking structure.' } },
    ],
    videos: [
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/reconfigurable-uav-3uav-motion-capture.mp4', title: { zh: '三机组合飞行实物演示', en: 'Three-UAV modular flight demonstration' }, category: 'experiment', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-real.jpg', caption: { zh: '三机组合飞行实物实验演示。', en: 'Real-flight demonstration of multi-UAV modular flight.' }, featured: true },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/reconfigurable-uav-3uav-ground-still.mp4', title: { zh: '三机地面组合演示', en: 'Three-UAV ground configuration demonstration' }, category: 'experiment', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-real.jpg', caption: { zh: '三架可重构无人机在地面状态下的组合展示。', en: 'Ground-state demonstration of three reconfigurable UAV modules.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/reconfigurable-uav-4uav-motion-capture.mp4', title: { zh: '四机组合飞行实物演示', en: 'Four-UAV modular flight demonstration' }, category: 'experiment', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-real.jpg', caption: { zh: '四机组合飞行实物实验演示。', en: 'Real-flight demonstration of four-UAV modular flight.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/reconfigurable-uav-version3-flight.mp4', title: { zh: '可重构无人机组合飞行', en: 'Reconfigurable UAV modular flight' }, category: 'experiment', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-real.jpg', caption: { zh: '可重构无人机组合飞行与视觉定位实物演示。', en: 'Physical demonstration of reconfigurable UAV flight with visual localization.' }, featured: true },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/flightmare-simulation-01.mp4', title: { zh: 'Flightmare 多机仿真一', en: 'Flightmare multi-UAV simulation 01' }, category: 'simulation', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'Flightmare 环境中的多机并行接近与组合轨迹仿真。', en: 'Simulation of multi-UAV parallel approach and modular flight in Flightmare.' }, featured: true },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/flightmare-simulation-02.mp4', title: { zh: 'Flightmare 多机仿真二', en: 'Flightmare multi-UAV simulation 02' }, category: 'simulation', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'Flightmare 环境中的另一组多机轨迹与组合飞行仿真。', en: 'A second Flightmare simulation of multi-UAV trajectories and modular flight.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/orbslam3-depth-hsv.mp4', title: { zh: 'ORB-SLAM3 深度与 HSV 图像', en: 'ORB-SLAM3 depth and HSV images' }, category: 'localization', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'ORB-SLAM3 视觉定位过程中的深度与 HSV 图像可视化。', en: 'Depth and HSV image visualization in the ORB-SLAM3 localization pipeline.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/orbslam3-feature-tracking.mp4', title: { zh: 'ORB-SLAM3 特征跟踪', en: 'ORB-SLAM3 feature tracking' }, category: 'localization', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'ORB-SLAM3 视觉定位过程中的特征提取与跟踪。', en: 'Feature extraction and tracking in the ORB-SLAM3 localization pipeline.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/orbslam3-rgb-target.mp4', title: { zh: 'ORB-SLAM3 RGB 目标图像', en: 'ORB-SLAM3 RGB target images' }, category: 'localization', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'ORB-SLAM3 视觉定位过程中的 RGB 目标图像与匹配结果。', en: 'RGB target images and matching results in the ORB-SLAM3 localization pipeline.' }, featured: false },
      { type: 'video', src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/orbslam3-rviz-mapping.mp4', title: { zh: 'ORB-SLAM3 RViz 建图', en: 'ORB-SLAM3 RViz mapping' }, category: 'localization', poster: '/media/research/reconfigurable-uav/reconfigurable-uav-model.png', caption: { zh: 'ORB-SLAM3 视觉定位过程中的图像、特征与地图可视化。', en: 'Visualization of image processing, feature tracking, and mapping in the ORB-SLAM3 localization pipeline.' }, featured: false },
    ], publications: publications.zh.filter(item => item.projectSlug === 'reconfigurable-uav'),
  },
  {
    slug: 'autonomous-landing', order: 2, period: { zh: '2025.12 – 至今', en: '2025.12 – Present' }, year: '2025',
    title: { zh: '面向智能捕获式降落平台的四旋翼空地协同视觉引导与自主对接研究', en: 'Air-Ground Visual Guidance and Autonomous Quadrotor Docking with an Intelligent Capture Landing Platform' }, type: { zh: '硕士课题', en: "Master's research project" }, role: { zh: '独立负责', en: 'Independent lead' },
    summary: { zh: '研究基于 ORB-SLAM3 的视觉状态估计与空地协同对接方法，构建无人机、NUC 智能降落平台和主动捕获机构组成的协同系统。', en: 'Research on ORB-SLAM3-based visual state estimation and air-ground coordinated docking, integrating a UAV, a NUC-based intelligent landing platform, and an active capture mechanism.' },
    overview: { zh: '课题针对四旋翼降落过程中的定位漂移、姿态不对准和落地后易受扰动等问题，研究空地协同视觉引导与自主对接。', en: 'The research addresses localization drift, yaw misalignment during quadrotor landing, and susceptibility to disturbances after touchdown through air-ground coordinated visual guidance and autonomous docking.' },
    technicalWork: { zh: '独立负责系统方案、视觉定位、轨迹规划与跟踪、协同控制及实验验证。', en: 'Independently responsible for the system design, visual localization, trajectory planning and tracking, cooperative control, and experimental validation.' }, result: { zh: '', en: '' },
    bullets: { zh: ['ORB-SLAM3 视觉状态估计', '无人机与 NUC 智能降落平台空地协同', '平台偏航自主对准与爪夹主动捕获', '视觉定位、轨迹规划与跟踪、协同控制'], en: ['ORB-SLAM3 visual state estimation', 'Air-ground coordination between the UAV and NUC-based intelligent landing platform', 'Autonomous platform yaw alignment and active capture with grippers', 'Visual localization, trajectory planning and tracking, and cooperative control'] },
    heroImage: '/media/research/autonomous-landing/autonomous-landing-platform.jpg',
    heroCaption: { zh: '自主设计的智能捕获式降落平台原型。', en: 'Prototype of the self-designed intelligent capture landing platform.' },
    gallery: [], videos: [], publications: [],
  },
  {
    slug: 'exoskeleton', order: 3, period: { zh: '2023.09 – 2024.06', en: '2023.09 – 2024.06' }, year: '2023',
    title: { zh: '一种基于柔性驱动的仿生下肢外骨骼机器人', en: 'Bioinspired Lower-Limb Exoskeleton Robot with Compliant Actuation' }, type: { zh: '国家级大学生创新项目', en: 'National undergraduate innovation project' }, role: { zh: '项目负责人', en: 'Project lead' },
    summary: { zh: '面向下肢运动障碍患者的行走助力需求，研究柔性驱动外骨骼的非线性建模、力跟踪与机械结构设计。', en: 'Research on nonlinear modeling, force tracking, and mechanical design of a compliant-actuation exoskeleton to assist walking for people with lower-limb mobility impairments.' },
    overview: { zh: '基于修正的 Maxwell-Slip 模型提出虚拟形变与重力补偿思想，建立柔性驱动外骨骼及其力矩精确建模方法。', en: 'Based on a modified Maxwell-Slip model, the work introduces virtual deformation and gravity compensation and develops a precise torque model for a compliant-actuation exoskeleton.' },
    technicalWork: { zh: '负责迟滞模型理论推导、力跟踪性能分析，以及以柔性变刚度驱动器 rSEA 为核心的外骨骼机械结构设计。', en: 'Responsible for the theoretical derivation of the hysteresis model, analysis of force-tracking performance, and mechanical design of the exoskeleton around an rSEA compliant variable-stiffness actuator.' }, result: { zh: '发明专利《基于柔性驱动的仿生人体膝关节外骨骼机器人》，第一作者。', en: 'First inventor on an invention patent for a bioinspired human knee exoskeleton robot with compliant actuation.' },
    bullets: { zh: ['Maxwell-Slip 非线性模型与迟滞建模', '柔性驱动、虚拟形变与重力补偿', '力跟踪性能分析', 'rSEA 柔性变刚度驱动器与外骨骼机械结构'], en: ['Maxwell-Slip nonlinear and hysteresis modeling', 'Compliant actuation, virtual deformation, and gravity compensation', 'Force-tracking performance analysis', 'rSEA compliant variable-stiffness actuator and exoskeleton mechanical structure'] },
    heroImage: '/media/research/exoskeleton/exoskeleton-design.png',
    heroCaption: { zh: '仿生下肢外骨骼及柔顺驱动机构的三维结构设计。', en: 'Three-dimensional design of the bio-inspired lower-limb exoskeleton and its compliant actuation mechanism.' },
    gallery: [
      { type: 'image', src: '/media/research/exoskeleton/exoskeleton-rsea-core.png', category: 'system', alt: { zh: 'rSEA 柔顺驱动器核心机构', en: 'rSEA compliant actuator core mechanism' }, caption: { zh: 'rSEA 柔顺变刚度驱动器的核心机构。', en: 'Core mechanism of the rSEA compliant variable-stiffness actuator.' } },
      { type: 'image', src: '/media/research/exoskeleton/exoskeleton-nonlinear-hysteresis.png', category: 'method', alt: { zh: '驱动器非线性迟滞模型', en: 'Nonlinear hysteresis model of the actuator' }, caption: { zh: '驱动器非线性迟滞特性及其建模结果。', en: 'Nonlinear hysteresis behavior and modeling of the compliant actuator.' } },
      { type: 'image', src: '/media/research/exoskeleton/exoskeleton-compensation-hysteresis.png', category: 'result', alt: { zh: '迟滞补偿模型', en: 'Hysteresis compensation model' }, caption: { zh: '用于迟滞补偿的逆模型与反馈闭环控制框架。', en: 'Closed-loop control framework combining hysteresis compensation with feedback control.' } },
      { type: 'image', src: '/media/research/exoskeleton/exoskeleton-closed-loop-control.jpg', category: 'result', alt: { zh: '闭环控制系统', en: 'Closed-loop control system' }, caption: { zh: '柔性驱动外骨骼的迟滞补偿与反馈闭环控制系统。', en: 'Feedback control system for hysteresis compensation in the compliant-actuation exoskeleton.' } },
    ], videos: [], publications: [],
  },
];

export const projectFor = (locale: Locale, slug: string) => projects.find(project => project.slug === slug);
