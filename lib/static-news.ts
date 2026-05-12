export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  type: 'notice' | 'news' | 'event';
  url?: string;
}

// 静态新闻数据
export const staticNewsData = {
  notices: [
    { id: 'n1', title: '关于做好2026年"五一"、端午节期间有关纪律要求的通知', date: '2026-04-30', category: '通知', type: 'notice', url: 'https://www.hbpu.edu.cn/info/1042/37562.htm' },
    { id: 'n2', title: '关于开展2026年度"五一"劳动教育主题活动的通知', date: '2026-04-28', category: '通知', type: 'notice', url: 'https://www.hbpu.edu.cn/info/1042/37560.htm' },
    { id: 'n3', title: '关于2026年春季学期期末考试安排的通知', date: '2026-04-25', category: '通知', type: 'notice', url: 'https://www.hbpu.edu.cn/info/1042/37558.htm' },
    { id: 'n4', title: '关于推荐申报2026年度湖北省教学成果奖的通知', date: '2026-04-22', category: '通知', type: 'notice', url: 'https://www.hbpu.edu.cn/info/1042/37556.htm' },
    { id: 'n5', title: '关于2026年大学生创新创业训练计划项目立项的通知', date: '2026-04-20', category: '通知', type: 'notice', url: 'https://www.hbpu.edu.cn/info/1042/37554.htm' },
  ],
  schoolNews: [
    { id: 's1', title: '学校召开2026年全面从严治党工作会议', date: '2026-04-28', category: '学校要闻', type: 'news', url: 'https://www.hbpu.edu.cn/info/1041/37561.htm' },
    { id: 's2', title: '我校在湖北省大学生机械创新设计大赛中获佳绩', date: '2026-04-26', category: '学校要闻', type: 'news', url: 'https://www.hbpu.edu.cn/info/1041/37559.htm' },
    { id: 's3', title: '学校举办"五四"青年节表彰大会暨文艺汇演', date: '2026-04-24', category: '学校要闻', type: 'news', url: 'https://www.hbpu.edu.cn/info/1041/37557.htm' },
    { id: 's4', title: '我校与黄石市人民政府签署战略合作协议', date: '2026-04-22', category: '学校要闻', type: 'news', url: 'https://www.hbpu.edu.cn/info/1041/37555.htm' },
    { id: 's5', title: '学校召开2026届毕业生就业工作推进会', date: '2026-04-20', category: '学校要闻', type: 'news', url: 'https://www.hbpu.edu.cn/info/1041/37553.htm' },
  ],
  campusNews: [
    { id: 'c1', title: '校园文化艺术节开幕，精彩节目轮番上演', date: '2026-04-29', category: '校园动态', type: 'event', url: 'https://www.hbpu.edu.cn/info/1043/37563.htm' },
    { id: 'c2', title: '春季运动会圆满落幕，各项纪录屡创新高', date: '2026-04-27', category: '校园动态', type: 'event', url: 'https://www.hbpu.edu.cn/info/1043/37561.htm' },
    { id: 'c3', title: '图书馆举办"世界读书日"系列活动', date: '2026-04-23', category: '校园动态', type: 'event', url: 'https://www.hbpu.edu.cn/info/1043/37559.htm' },
    { id: 'c4', title: '大学生心理健康教育活动月正式启动', date: '2026-04-21', category: '校园动态', type: 'event', url: 'https://www.hbpu.edu.cn/info/1043/37557.htm' },
    { id: 'c5', title: '学生社团文化节精彩纷呈，展现青春活力', date: '2026-04-19', category: '校园动态', type: 'event', url: 'https://www.hbpu.edu.cn/info/1043/37555.htm' },
  ],
  collegeNews: [
    { id: 'co1', title: '计算机学院举办2026届毕业生毕业设计开题报告会', date: '2026-04-29', category: '学院动态', type: 'news', url: 'http://cs.hbpu.edu.cn/info/1063/4521.htm' },
    { id: 'co2', title: '计算机学院举办"人工智能在教育中的应用"学术讲座', date: '2026-04-26', category: '学院动态', type: 'news', url: 'http://cs.hbpu.edu.cn/info/1063/4519.htm' },
    { id: 'co3', title: '计算机学院学子在全国大学生程序设计竞赛中获奖', date: '2026-04-24', category: '学院动态', type: 'news', url: 'http://cs.hbpu.edu.cn/info/1063/4517.htm' },
    { id: 'co4', title: '计算机学院开展2026年春季学期期中教学检查', date: '2026-04-22', category: '学院动态', type: 'news', url: 'http://cs.hbpu.edu.cn/info/1063/4515.htm' },
    { id: 'co5', title: '计算机学院与多家企业签署实习就业基地协议', date: '2026-04-20', category: '学院动态', type: 'news', url: 'http://cs.hbpu.edu.cn/info/1063/4513.htm' },
  ],
  updatedAt: '2026-05-11 12:00:00',
};

// 获取静态新闻数据的函数
export function getStaticNews(collegeId?: string) {
  return staticNewsData;
}
