import type { Locale } from './site';
export type Publication = { title: string; venue: string; year: string; status: string; contribution: string; projectSlug: string };
export const publications: Record<Locale, Publication[]> = {
  zh: [
    { title: 'Wrench-residual-based Compensation for Rotor Loss of Effectiveness and External Force in Quadrotors', venue: 'Control Engineering Practice (CEP)', year: '', status: '审稿中', contribution: '第一作者', projectSlug: 'reconfigurable-uav' },
    { title: 'Connection Modeling and Disturbance-Resistant Distributed Control for Reconfigurable Quadrotor', venue: 'IEEE Robotics and Automation Letters (RA-L)', year: '', status: '审稿中', contribution: '第二作者', projectSlug: 'reconfigurable-uav' },
  ],
  en: [
    { title: 'Wrench-residual-based Compensation for Rotor Loss of Effectiveness and External Force in Quadrotors', venue: 'Control Engineering Practice (CEP)', year: '', status: 'Under Review', contribution: 'First Author', projectSlug: 'reconfigurable-uav' },
    { title: 'Connection Modeling and Disturbance-Resistant Distributed Control for Reconfigurable Quadrotor', venue: 'IEEE Robotics and Automation Letters (RA-L)', year: '', status: 'Under Review', contribution: 'Second Author', projectSlug: 'reconfigurable-uav' },
  ],
};
