// 学院配置
export interface College {
  id: string;
  name: string;
  shortName: string;
  website: string;
}

export interface Platform {
  id: string;
  name: string;
  url: string;
  description: string;
}

export const colleges: College[] = [
  { id: 'cs', name: '计算机学院', shortName: '计算机学院', website: 'http://cs.hbpu.edu.cn' },
  { id: 'jd', name: '机电工程学院', shortName: '机电学院', website: 'http://jd.hbpu.edu.cn' },
  { id: 'tjxy', name: '土木建筑工程学院', shortName: '土建学院', website: 'http://tjxy.hbpu.edu.cn' },
  { id: 'hj', name: '环境科学与工程学院', shortName: '环境学院', website: 'http://hj.hbpu.edu.cn' },
  { id: 'med', name: '医学院', shortName: '医学院', website: 'http://med.hbpu.edu.cn' },
  { id: 'hgxy', name: '化学与化工学院', shortName: '化工学院', website: 'https://cme.hbpu.edu.cn/' },
  { id: 'sfl', name: '外国语学院', shortName: '外国语学院', website: 'http://sfl.hbpu.edu.cn' },
  { id: 'jxjy', name: '继续教育学院', shortName: '继续教育学院', website: 'http://jxjy.hbpu.edu.cn' },
  { id: 'gjxy', name: '国际学院', shortName: '国际学院', website: 'http://gjxy.hbpu.edu.cn' },
  { id: 'ysxy', name: '艺术学院', shortName: '艺术学院', website: 'http://ysxy.hbpu.edu.cn' },
  { id: 'sfxy', name: '师范学院', shortName: '师范学院', website: 'http://sfxy.hbpu.edu.cn' },
  { id: 'slxy', name: '数理学院', shortName: '数理学院', website: 'http://slxy.hbpu.edu.cn' },
  { id: 'mks', name: '马克思主义学院', shortName: '马克思学院', website: 'http://mks.hbpu.edu.cn' },
  { id: 'jg', name: '经济与管理学院', shortName: '经管学院', website: 'http://jg.hbpu.edu.cn' },
];

export const platforms: Platform[] = [
  { id: 'jwgl', name: '教学综合信息服务平台', url: 'https://jwglnew.hbpu.edu.cn/xtgl/', description: '选课、成绩查询' },
  { id: 'portal', name: '统一信息门户', url: 'https://portal.hbpu.edu.cn:4106/#/index55', description: '课表、教务通知' },
  { id: 'affairs', name: '事务中心', url: 'https://affairs.hbpu.edu.cn/#/index', description: '学生请假、各类申请' },
  { id: 'tsg', name: '图书馆', url: 'http://lib.hbpu.edu.cn', description: '图书资源' },
  { id: 'jwc', name: '教务处', url: 'http://jwc.hbpu.edu.cn', description: '教务处官网' },
  { id: 'xy', name: '学院主站', url: 'http://www.hbpu.edu.cn', description: '学院主站' },
  { id: 'sypt', name: '实验实践平台', url: 'http://sjjx.hbpu.edu.cn', description: '实验教学' },
  { id: 'xyzf', name: '校园支付平台', url: 'http://wsjf.hbpu.edu.cn:8080/xysf/aAppPage/index.aspx?mac=bab01d7f83336dcd9eaa70620be59dac#/loginTemp/loginIng', description: '学费医保交付' },
];

export const defaultCollege = colleges[0]; // 计算机学院

// Banner 背景图片
export const bannerBackground = 'https://jwc.hbpu.edu.cn/images/banner12.jpg';
