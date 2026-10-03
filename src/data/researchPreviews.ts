import type { Locale } from './site';

// Homepage-only summaries. Complete technical content remains in projects.ts.
export const researchPreviews: Record<string, { work: Record<Locale, string>; result?: Record<Locale, string> }> = {
  'reconfigurable-uav': {
    work: {
      zh: '围绕 ORB-SLAM3 四叉树显著性加权 BA、主动机械锁合、Legendre 伪谱轨迹规划与时变避障开展研究，并进行 Flightmare 仿真与多机实物实验。',
      en: 'Research covers quadtree-saliency-weighted bundle adjustment in ORB-SLAM3, active mechanical locking, Legendre pseudospectral trajectory planning, and time-varying obstacle avoidance, with Flightmare simulations and physical multi-UAV experiments.',
    },
    result: { zh: '完成单机及多机组合飞行演示；相关 CEP、RA-L 论文均在审稿中。', en: 'Demonstrated single-UAV and combined multi-UAV flight. Related CEP and RA-L manuscripts are under review.' },
  },
  'autonomous-landing': {
    work: {
      zh: '独立负责系统方案、ORB-SLAM3 视觉状态估计、平台偏航对准、轨迹规划与跟踪及爪夹主动捕获，开展空地协同对接验证。',
      en: 'Independently developed the system design, ORB-SLAM3 visual state estimation, platform-yaw alignment, trajectory planning and tracking, and active gripper capture for air-ground docking validation.',
    },
    result: { zh: '已构建自主设计的智能捕获式降落平台原型，课题持续推进中。', en: 'A self-designed intelligent capture landing-platform prototype has been built; the research is ongoing.' },
  },
  exoskeleton: {
    work: {
      zh: '完成柔性驱动与外骨骼结构设计，基于改进 Maxwell-Slip 模型研究迟滞建模、虚拟形变、重力与神经网络补偿，以及闭环力跟踪。',
      en: 'Developed compliant-actuator and exoskeleton mechanics, with modified Maxwell-Slip hysteresis modeling, virtual displacement, gravity and neural-network compensation, and closed-loop force tracking.',
    },
  },
};
