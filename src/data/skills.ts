import type { Locale } from './site';
export type SkillGroup = { title: string; items: string[]; description?: string };
export const skills: Record<Locale, SkillGroup[]> = {
  zh: [
    { title: '控制与无人系统', items: ['四旋翼运动学与动力学建模', '状态空间建模与闭环控制', 'PID · LQR · NMPC', 'EGO-Planner · 轨迹优化 · 最优控制'], description: '具有多旋翼飞行控制、可重构无人机及多机协同控制研究经验。' },
    { title: '机器人与自主导航', items: ['ROS / ROS2', 'ORB-SLAM3 · 3D LiDAR', '视觉位姿估计与 SLAM', '自主导航与轨迹规划', 'PyTorch'], description: '具有无人机、智能车实机系统集成与开发经验。' },
    { title: '编程与仿真', items: ['Python · C++', 'MATLAB / Simulink', 'Gazebo · RViz · Flightmare', 'Linux 机器人算法开发'], description: '能够完成控制算法建模、数值仿真、实验数据处理与可视化。' },
    { title: '嵌入式与硬件', items: ['Altium Designer', 'SolidWorks', 'PCB 电路设计', '嵌入式硬件调试', '机械结构设计'], description: '曾独立完成涵盖新能源、通信行业的多家公司产品级硬件设计与开发测试，产品均实现量产。' },
  ],
  en: [
    { title: 'Control & Autonomous Systems', items: ['Quadrotor kinematics and dynamics modeling', 'State-space modeling and closed-loop control', 'PID · LQR · NMPC', 'EGO-Planner · trajectory optimization · optimal control'], description: 'Research experience in multirotor flight control, reconfigurable UAVs, and cooperative multi-UAV control.' },
    { title: 'Robotics & Autonomous Navigation', items: ['ROS / ROS2', 'ORB-SLAM3 · 3D LiDAR', 'Visual pose estimation and SLAM', 'Autonomous navigation and trajectory planning', 'PyTorch'], description: 'Experience integrating and developing physical UAV and intelligent vehicle systems.' },
    { title: 'Programming & Simulation', items: ['Python · C++', 'MATLAB / Simulink', 'Gazebo · RViz · Flightmare', 'Robotics algorithm development on Linux'], description: 'Able to model control algorithms, run numerical simulations, process experimental data, and visualize results.' },
    { title: 'Embedded Systems & Hardware', items: ['Altium Designer', 'SolidWorks', 'PCB design', 'Embedded hardware debugging', 'Mechanical structure design'], description: 'Independently designed, developed, and tested production-grade hardware for several companies in the new energy and communications sectors; the products entered mass production.' },
  ],
};
