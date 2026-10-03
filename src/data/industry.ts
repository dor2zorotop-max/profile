import type { Locale } from './site';

export type Localized = { zh: string; en: string };
export type IndustryDocument = { label: Localized; href: string };
export type IndustryItem = {
  title: string;
  company: string;
  industry: string;
  period: string;
  role: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  status: string;
  images: string[];
  video: string;
  links: string[];
  documents: IndustryDocument[];
  confidential: boolean;
};

const entries: Record<Locale, IndustryItem[]> = {
  zh: [
    {
      title: '智能小区电动车 8 路充电站（免 MCU，4G 充电站）', company: '上海沐厄信息科技有限公司', industry: '物联网硬件', period: '', role: '物联网硬件项目',
      summary: '面向智能小区电动车充电场景的 8 路、免 MCU、4G 充电站，工程资料覆盖整机、板级实物、PCB 布局与电路原理图。',
      responsibilities: ['板级设计：PCB 布局与实物板卡', '电路设计：两张原理图展示充电站的电路连接'], technologies: ['4G', 'PCB', '原理图'], status: '工程材料',
      images: [
        '/media/industry/product-01-上海沐厄信息科技有限公司/智能小区电动车8路充电站-免MCU-4G充电站.jpeg',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Pcb-real.jpg',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Pcbdoc.png',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Schdoc1.png',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Schdoc2.png',
      ], video: '', links: [], documents: [], confidential: false,
    },
    {
      title: '桌面学伴机器人', company: '杭州叮当葫芦互联网数据服务有限公司', industry: '教育机器人', period: '2025.04-2026.03', role: '技术中心硬件开发工程师',
      summary: '在技术中心从事桌面学伴机器人的硬件开发。产品方案面向学习陪伴，结合 AI 大模型与智能硬件，规划连续对话和多模态交互功能。',
      responsibilities: ['参与桌面机器人硬件开发', '整理项目计划与产品资料'], technologies: ['桌面机器人', '硬件开发'], status: '工程材料',
      images: ['/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/桌面学伴机器人.png'], video: '', links: [],
      documents: [{ label: { zh: '项目计划书', en: 'Project plan' }, href: '/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/学伴机器人计划书.pdf' }], confidential: false,
    },
  ],
  en: [
    {
      title: '8-Channel Smart E-Bike Charging Station (MCU-Free, 4G)', company: 'Shanghai Muoer Information Technology Co., Ltd.', industry: 'IoT hardware', period: '', role: 'IoT hardware project',
      summary: 'Engineering materials for an eight-channel smart e-bike charging station, including the physical product, schematics, PCB layouts, and board-level design. ',
      responsibilities: ['Board design: PCB layout and physical boards', 'Circuit design: two schematic sheets showing the charging-station circuitry'], technologies: ['4G', 'PCB', 'Schematics'], status: 'Engineering materials',
      images: [
        '/media/industry/product-01-上海沐厄信息科技有限公司/智能小区电动车8路充电站-免MCU-4G充电站.jpeg',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Pcb-real.jpg',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Pcbdoc.png',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Schdoc1.png',
        '/media/industry/product-01-上海沐厄信息科技有限公司/Schdoc2.png',
      ], video: '', links: [], documents: [], confidential: false,
    },
    {
      title: 'Desktop Learning Companion Robot', company: 'Hangzhou Dingdang Hulu Internet Data Services Co., Ltd.', industry: 'Educational robotics', period: '2025.04-2026.03', role: 'Hardware Development Engineer, Technology Center',
      summary: 'Worked on hardware development for a desktop learning companion robot in the Technology Center. The product plan combines large language models and smart hardware, with continuous dialogue and multimodal interaction planned for learning support.',
      responsibilities: ['Contributed to desktop-robot hardware development', 'Organized project planning and product materials'], technologies: ['Desktop robotics', 'Hardware development'], status: 'Engineering materials',
      images: ['/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/桌面学伴机器人.png'], video: '', links: [],
      documents: [{ label: { zh: '项目计划书', en: 'Project plan' }, href: '/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/学伴机器人计划书.pdf' }], confidential: false,
    },
  ],
};

export const industry: Record<Locale, IndustryItem[]> = entries;
