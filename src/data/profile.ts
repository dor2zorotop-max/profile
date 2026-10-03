import { site, type Locale } from './site';

export const profile = {
  name: '洪陈源', nameEn: 'Chenyuan Hong', shortName: '洪陈源',
  title: { zh: '硕士研究生', en: 'M.S. Student' } as Record<Locale, string>,
  memberStatus: { zh: '中共党员', en: 'Member of the Communist Party of China' } as Record<Locale, string>,
  degree: { zh: '硕士研究生', en: 'M.S. Student' } as Record<Locale, string>,
  major: { zh: '控制科学与工程', en: 'Control Science and Engineering' } as Record<Locale, string>,
  affiliation: { zh: '电子科技大学自动化工程学院 & 长三角（湖州）高等研究院', en: 'School of Automation Engineering, University of Electronic Science and Technology of China & Yangtze Delta Region Institute (Huzhou), University of Electronic Science and Technology of China' } as Record<Locale, string>,
  affiliations: { zh: ['电子科技大学自动化工程学院 & 长三角（湖州）高等研究院'], en: ['School of Automation Engineering, University of Electronic Science and Technology of China', 'Yangtze Delta Region Institute (Huzhou), University of Electronic Science and Technology of China'] } as Record<Locale, string[]>,
  location: { zh: '四川 · 浙江', en: 'Sichuan · Zhejiang, China' } as Record<Locale, string>,
  email: 'dor2zorotop@gmail.com', phone: { zh: '15857735995', en: '+86 158 5773 5995' } as Record<Locale, string>,
  addresses: { zh: ['四川省成都市郫都区西源大道2006号，电子科技大学清水河校区', '浙江省湖州市吴兴区西塞山路819号科技创新综合体B1幢，电子科技大学长三角研究院(湖州)'], en: ['Qingshuihe Campus, University of Electronic Science and Technology of China, No. 2006 Xiyuan Avenue, Pidu District, Chengdu, Sichuan, China', 'Yangtze Delta Region Institute (Huzhou), University of Electronic Science and Technology of China, Building B1, Science and Technology Innovation Complex, No. 819 Xisaishan Road, Wuxing District, Huzhou, Zhejiang, China'] } as Record<Locale, string[]>,
  website: site.url, github: '', googleScholar: '', orcid: '', portrait: '/media/images/profile-photo.jpg',
  bio: { zh: '电子科技大学控制科学与工程硕士研究生，研究方向为可重构无人机、飞行器控制、视觉SLAM与多机器人自主协同。本科期间作为项目负责人主持国家级大学生创新项目，以第一或第二发明人产出机器人方向的国家发明专利两篇。硕士期间立足课题组课题在投IEEE RA-L、CEP等高水平期刊2篇。曾获研究生学业奖学金（UESTC）、浙江省政府奖学金、校级学习奖学金（ZJUT）、校级优秀学生奖学金（ZJUT）等荣誉。曾以核心队员身份斩获中国机器人大赛无人机挑战赛国家一等奖（全国冠军）/水下作业组国家三等奖、全国大学生智能汽车竞赛百度智慧交通组国家一等奖（全国第七）、中国研究生电子设计竞赛国家三等奖（视觉SLAM四旋翼可重构无人机）等荣誉，累计机器人领域比赛（省部级以上）获奖8项。', en: 'I am an M.S. student in Control Science and Engineering at the University of Electronic Science and Technology of China, working on reconfigurable UAVs, flight control, visual SLAM, and multi-robot autonomy. During my undergraduate study, I led a National Undergraduate Innovation and Entrepreneurship Training Program project and contributed as the first or second inventor to two national invention patent applications in robotics. During my master\'s study, I have been working on two manuscripts under review at IEEE Robotics and Automation Letters (RA-L) and Control Engineering Practice (CEP). I have received the UESTC Graduate Academic Scholarship, the Zhejiang Provincial Government Scholarship, the ZJUT Academic Scholarship, and the ZJUT Outstanding Student Scholarship. As a core team member, I received a National First Prize and the national championship in the UAV Challenge of the China Robot Competition, a National Third Prize in the Underwater Operation category, a National First Prize and seventh place nationally in the Baidu Intelligent Transportation Track of the National University Intelligent Vehicle Competition, and a National Third Prize in the China Postgraduate Electronics Design Competition for visual-SLAM-based modular quadrotor flight. I have received eight provincial or higher-level awards in robotics competitions.' } as Record<Locale, string>,
  researchInterests: { zh: ['可重构无人机', '飞行器控制', '视觉SLAM与多机器人自主协同'], en: ['Reconfigurable UAVs', 'Flight Control', 'Visual SLAM and Multi-Robot Autonomy'] } as Record<Locale, string[]>,
  academicExperience: { zh: [
    { period: '2021.09~2022.06', text: '分别在浙江工业大学健行荣誉学院智能实验班、机械工程学院机器人工程专业同时就读，随后转入自动化专业。' },
    { period: '2024.08~至今', text: '保研至电子科技大学（UESTC）控制科学与工程专业攻读硕士学位。' },
    { period: '2025.04~2026.03', text: '杭州叮当葫芦互联网数据服务有限公司技术中心硬件开发工程师' },
    { period: '2025.06', text: '分别在浙江工业大学信息工程学院、健行荣誉学院获学士学位、健行荣誉证书。' },
  ], en: [
    { period: '2021.09~2022.06', text: 'Studied concurrently in the Intelligent Experimental Class of Jianxing Honors College and the Robotics Engineering program of the College of Mechanical Engineering at Zhejiang University of Technology, then transferred to Automation.' },
    { period: '2024.08~Present', text: 'Admitted through recommendation to the M.S. program in Control Science and Engineering at the University of Electronic Science and Technology of China (UESTC).' },
    { period: '2025.04~2026.03', text: 'Hardware Development Engineer, Technology Center, Hangzhou Dingdang Hulu Internet Data Services Co., Ltd.' },
    { period: '2025.06', text: 'Received a bachelor\'s degree from the College of Information Engineering and a Jianxing Honors Certificate from Zhejiang University of Technology.' },
  ] } as Record<Locale, { period: string; text: string }[]>,
};
