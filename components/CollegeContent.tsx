'use client';

import { useState } from 'react';
import { College, bannerBackground } from '@/lib/colleges';
import { staticNewsData } from '@/lib/static-news';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar, 
  Award,
  ExternalLink,
  MessageSquare,
  FileText,
  Video,
  Download,
  Phone,
  MapPin,
  Mail,
  RefreshCw,
} from 'lucide-react';

interface CollegeContentProps {
  college: College;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'notice': return <FileText className="w-4 h-4" />;
    case 'news': return <MessageSquare className="w-4 h-4" />;
    case 'event': return <Calendar className="w-4 h-4" />;
    default: return <FileText className="w-4 h-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'notice': return 'bg-blue-500/10 text-blue-600 border-blue-200';
    case 'news': return 'bg-green-500/10 text-green-600 border-green-200';
    case 'event': return 'bg-orange-500/10 text-orange-600 border-orange-200';
    default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
  }
};

export default function CollegeContent({ college }: CollegeContentProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleNewsClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(240,248,255,0.95)), url(${bannerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 学院横幅 */}
      <div className="backdrop-blur-sm" style={{ background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(59, 130, 246), rgb(59, 130, 246))', backgroundColor: 'transparent', color: 'rgb(59, 130, 246)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">
                湖北理工学院 {college.name}
              </h1>
              <p className="text-white/80 text-sm mt-1">Hubei Polytechnic University</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-xs">
                更新时间: {staticNewsData.updatedAt}
              </span>
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={handleRefresh}
              >
                <RefreshCw className={`w-4 h-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                刷新
              </Button>
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => window.open(college.website, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                访问官网
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧：新闻通知 */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="notice" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
                <TabsTrigger value="notice" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <FileText className="w-4 h-4" />
                  通知公告
                </TabsTrigger>
                <TabsTrigger value="college" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <GraduationCap className="w-4 h-4" />
                  学院动态
                </TabsTrigger>
                <TabsTrigger value="school" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <MessageSquare className="w-4 h-4" />
                  学校要闻
                </TabsTrigger>
                <TabsTrigger value="campus" className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Video className="w-4 h-4" />
                  校园动态
                </TabsTrigger>
              </TabsList>
              
              {/* 通知公告 */}
              <TabsContent value="notice" className="mt-4 space-y-3">
                {staticNewsData.notices.map((item) => (
                  <Card 
                    key={item.id} 
                    className="hover:shadow-lg transition-all cursor-pointer group bg-white/95 backdrop-blur hover:border-blue-300"
                    onClick={() => handleNewsClick(item.url)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                              {item.category}
                            </Badge>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* 学院动态 */}
              <TabsContent value="college" className="mt-4 space-y-3">
                {staticNewsData.collegeNews.map((item) => (
                  <Card 
                    key={item.id} 
                    className="hover:shadow-lg transition-all cursor-pointer group bg-white/95 backdrop-blur hover:border-blue-300"
                    onClick={() => handleNewsClick(item.url)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 border-purple-200">
                              {college.shortName}
                            </Badge>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              {/* 学校要闻 */}
              <TabsContent value="school" className="mt-4 space-y-3">
                {staticNewsData.schoolNews.map((item) => (
                  <Card 
                    key={item.id} 
                    className="hover:shadow-lg transition-all cursor-pointer group bg-white/95 backdrop-blur hover:border-blue-300"
                    onClick={() => handleNewsClick(item.url)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                              {item.category}
                            </Badge>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              {/* 校园动态 */}
              <TabsContent value="campus" className="mt-4 space-y-3">
                {staticNewsData.campusNews.map((item) => (
                  <Card 
                    key={item.id} 
                    className="hover:shadow-lg transition-all cursor-pointer group bg-white/95 backdrop-blur hover:border-blue-300"
                    onClick={() => handleNewsClick(item.url)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                              {item.category}
                            </Badge>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* 右侧：快捷入口 */}
          <div className="space-y-6">
            {/* 快速链接 */}
            <Card className="bg-white/95 backdrop-blur shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <BookOpen className="w-5 h-5" />
                  快捷服务
                </CardTitle>
                <CardDescription>常用功能快速访问</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300" onClick={() => window.open('https://portal.hbpu.edu.cn:4106/#/index55', '_blank')}>
                  <FileText className="w-4 h-4 mr-3 text-blue-600" />
                  课表查询
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300" onClick={() => window.open('https://jwglnew.hbpu.edu.cn/xtgl/', '_blank')}>
                  <Award className="w-4 h-4 mr-3 text-blue-600" />
                  成绩查询
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300" onClick={() => window.open('https://www.hbpu.edu.cn/xxyw.htm', '_blank')}>
                  <Users className="w-4 h-4 mr-3 text-blue-600" />
                  学校要闻
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300" onClick={() => window.open('https://www.hbpu.edu.cn/xydt.htm', '_blank')}>
                  <Video className="w-4 h-4 mr-3 text-blue-600" />
                  校园动态
                </Button>
              </CardContent>
            </Card>

            {/* 联系方式 */}
            <Card className="bg-white/95 backdrop-blur shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-800">联系方式</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                  <span className="text-muted-foreground">地址：</span>
                  <span>湖北省黄石市桂林北路16号</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-muted-foreground w-12">邮编：</span>
                  <span>435003</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                  <span className="text-muted-foreground">电话：</span>
                  <span>0714-6353390 / 0714-6356637</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                  <span className="text-muted-foreground">邮箱：</span>
                  <span>jwc@hbpu.edu.cn</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
