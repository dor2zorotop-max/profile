import type { Locale } from './site';

export type Localized = { zh: string; en: string };
export type CompetitionCertificate = { preview: string; alt: Localized };
export type CompetitionVideo = { src: string; poster: string; title: Localized };
export type CompetitionSubevent = { title: Localized; award: Localized; contribution: Localized; certificate?: CompetitionCertificate; images: string[]; videos?: CompetitionVideo[] };
export type Competition = {
  period: string;
  competition: Localized;
  track: Localized;
  award: Localized;
  contribution: Localized;
  certificate?: CompetitionCertificate;
  images: string[];
  subevents?: CompetitionSubevent[];
  related?: Localized;
  videos?: CompetitionVideo[];
};

const entries: Competition[] = [
  {
    period: '2023.11 – 2024.05',
    competition: { zh: '中国机器人大赛暨 RoboCup 机器人世界杯中国赛', en: 'China Robot Competition & RoboCup China Open' },
    track: { zh: '两个参赛组别', en: 'Two competition tracks' },
    award: { zh: '国家级奖项', en: 'National-level awards' },
    contribution: { zh: '', en: '' },
    images: [],
    subevents: [
      { title: { zh: '无人机挑战赛', en: 'UAV Challenge' }, award: { zh: '国家一等奖 · 全国冠军', en: 'National First Prize · National Champion' }, contribution: { zh: '负责多环 PID 调节、视觉标定与去畸变、移动目标跟踪，以及 A* 与 EGO-Planner 路径规划和避障优化。', en: 'Responsible for multi-loop PID tuning, camera calibration and distortion correction, moving-target tracking, and A* and EGO-Planner path planning and obstacle-avoidance optimization.' }, certificate: { preview: '/media/competitions/previews/robocup-uav-national-first-prize.png', alt: { zh: '无人机挑战赛国家一等奖证书', en: 'National First Prize certificate for the UAV Challenge' } }, images: [], videos: [{ src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/robocup-uav-obstacle-target.mp4', poster: '/media/competitions/previews/robocup-uav-obstacle-target.jpg', title: { zh: '国赛记录：避障与投靶', en: 'National Competition: Obstacle Avoidance and Target Drop' } },{ src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/robocup-uav-corridor.mp4', poster: '/media/competitions/previews/robocup-uav-corridor.jpg', title: { zh: '国赛记录：穿廊', en: 'National Competition: Corridor Flight' } }] },
      { title: { zh: '水下作业赛', en: 'Underwater Operation' }, award: { zh: '国家三等奖', en: 'National Third Prize' }, contribution: { zh: '以核心队员身份参与水下作业赛，围绕水下目标识别、机构控制与作业流程开展系统开发，结合 YOLOv5 目标检测与自主设计的两轴机械结构，实现水下目标识别、俯仰调整与抓取作业。', en: 'As a core team member in the Underwater Operation track, developed underwater target recognition, mechanism control, and task workflows, combining YOLOv5 detection with a custom two-axis mechanism for target identification, pitch adjustment, and grasping.' }, certificate: { preview: '/media/competitions/previews/underwater-national-third-prize.png', alt: { zh: '水下作业赛国家三等奖证书', en: 'National Third Prize certificate for the Underwater Operation track' } }, images: [] },
    ],
  },
  {
    period: '2022.08 – 2024.08',
    competition: { zh: '第十九届全国大学生智能汽车竞赛', en: '19th National University Intelligent Vehicle Competition' },
    track: { zh: '百度智慧交通组', en: 'Baidu Intelligent Transportation Track' },
    award: { zh: '国家一等奖 · 全国第七', en: 'National First Prize · Seventh place nationally' },
    contribution: { zh: '负责轮式里程计与惯性导航定位、yaw 闭环与 PID 调整、CNN 偏差模型自主巡航，以及车辆机械结构、主控板与 FOC 相关设计。', en: 'Responsible for wheel-odometry and inertial-navigation localization, closed-loop yaw and PID tuning, autonomous navigation with a CNN deviation model, and the vehicle mechanical structure, main control board, and FOC-related design.' },
    certificate: { preview: '/media/competitions/previews/intelligent-vehicle-national-first-prize.png', alt: { zh: '智能汽车竞赛国家一等奖证书', en: 'National First Prize certificate for the intelligent vehicle competition' } },
    videos: [{ src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/intelligent-vehicle-national-debugging.mp4', poster: '/media/competitions/previews/intelligent-vehicle-national-debugging.jpg', title: { zh: '百度组国赛调试现场', en: 'Baidu Track National Competition Debugging' } },{ src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/intelligent-vehicle-provincial-offroad.mp4', poster: '/media/competitions/previews/intelligent-vehicle-provincial-offroad.jpg', title: { zh: '省赛极速越野组', en: 'Provincial Competition: High-Speed Off-Road Track' } },{ src: 'https://github.com/dor2zorotop-max/profile/releases/download/research-media-v1/intelligent-vehicle-offroad.mp4', poster: '/media/competitions/previews/intelligent-vehicle-offroad.jpg', title: { zh: '极速越野组演示', en: 'High-Speed Off-Road Demonstration' } }],
    images: ['/media/competitions/intelligent-vehicle/baidu competition picture.jpg', '/media/competitions/intelligent-vehicle/driver board.jpg', '/media/competitions/intelligent-vehicle/main control board.jpg'],
  },
  {
    period: '2026.03 – 2026.08',
    competition: { zh: '第二十一届中国研究生电子设计竞赛', en: '21st China Postgraduate Electronics Design Competition' },
    track: { zh: '纯视觉定位的四旋翼无人机组合飞行', en: 'Combined Quadrotor Flight with Visual-Only Localization' },
    award: { zh: '国家三等奖', en: 'National Third Prize' },
    contribution: { zh: '参赛作品以纯视觉定位支撑四旋翼组合飞行，完成系统集成与作品展示。', en: 'The entry integrates visual-only localization with combined quadrotor flight, including system integration and demonstration.' },
    images: [],
    related: { zh: '相关技术工作见科研经历。', en: 'Related technical work is documented in the research experience.' },
  },
];

export const competitions: Record<Locale, Competition[]> = { zh: entries, en: entries };
