import type { Locale } from './site';

export const copy: Record<Locale, Record<string, string>> = {
  zh: {
    profile:'个人简介', education:'教育经历', research:'研究方向', projects:'项目', publications:'论文', experience:'经历', honors:'荣誉与奖项', cv:'简历', contact:'联系方式', menu:'菜单', skills:'专业技能', competitions:'竞赛经历', industry:'企业合作与产品开发', selectedWork:'精选研究项目',
    empty:'内容待补充。', cvAvailable:'简历将在这里提供。', interests:'研究兴趣', currentResearch:'当前研究', methods:'研究方法', overview:'概述', technicalWork:'技术工作', result:'成果', role:'身份', status:'状态', type:'类型', period:'时间', contribution:'个人贡献', projectEyebrow:'研究项目',
    email:'电子邮箱', website:'个人网站', github:'GitHub', scholar:'Google Scholar', orcid:'ORCID', openCv:'查看简历', downloadCv:'下载简历', imagePlaceholder:'图片 / 图表占位', videoPlaceholder:'视频占位', selectedOutputs:'代表性成果', englishPending:'英文正式内容待补充。',
  },
  en: {
    profile:'Profile', education:'Education', research:'Research', projects:'Projects', publications:'Publications', experience:'Experience', honors:'Honors & Awards', cv:'CV', contact:'Contact', menu:'Menu', skills:'Professional Skills', competitions:'Competitions', industry:'Industry Collaboration & Product Development', selectedWork:'Selected Research Projects',
    empty:'Content to be added.', cvAvailable:'CV will be available here.', interests:'Research interests', currentResearch:'Current research', methods:'Methods', overview:'Overview', technicalWork:'Technical work', result:'Result', role:'Role', status:'Status', type:'Type', period:'Period', contribution:'Contribution', projectEyebrow:'Research portfolio',
    email:'Email', website:'Website', github:'GitHub', scholar:'Google Scholar', orcid:'ORCID', openCv:'View CV', downloadCv:'Download CV', imagePlaceholder:'Image / Figure Placeholder', videoPlaceholder:'Video Placeholder', selectedOutputs:'Selected Research Outputs', englishPending:'Formal English content will be added later.',
  },
};
export const nav = ['profile','education','research','skills','projects','publications','experience','honors','cv','contact'];
