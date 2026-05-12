'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { colleges, platforms, College } from '@/lib/colleges';
import { 
  GraduationCap,
  ExternalLink,
  ChevronDown,
  CreditCard,
  Building2,
  Library,
  Settings,
  Globe,
  LayoutGrid,
  FileText,
  Wrench,
} from 'lucide-react';

interface TopNavProps {
  currentCollege: College;
  onCollegeChange: (college: College) => void;
  onOpenLogin: () => void;
  credentials: { studentId: string; jwglPassword: string; portalPassword: string } | null;
}

const platformIcons: Record<string, React.ReactNode> = {
  jwgl: <Globe className="w-4 h-4" />,
  portal: <LayoutGrid className="w-4 h-4" />,
  affairs: <FileText className="w-4 h-4" />,
  tsg: <Library className="w-4 h-4" />,
  jwc: <Building2 className="w-4 h-4" />,
  xy: <GraduationCap className="w-4 h-4" />,
  sypt: <Wrench className="w-4 h-4" />,
  xyzf: <CreditCard className="w-4 h-4" />,
};

interface PlatformButtonProps {
  platform: typeof platforms[0];
  credentials: { studentId: string; jwglPassword: string; portalPassword: string } | null;
  onOpenLogin: () => void;
  subLabel?: string;
}

function PlatformButton({ platform, credentials, onOpenLogin, subLabel }: PlatformButtonProps) {
  const handleClick = () => {
    switch (platform.id) {
      case 'jwgl':
        if (credentials) {
          const bookmarklet = `javascript:(function(){
            var uname='${credentials.studentId}';
            var pwd='${credentials.jwglPassword}';
            var loginBtn=document.querySelector('.login-btn')||document.querySelector('button[type="submit"]')||document.querySelector('.btn-primary');
            if(document.querySelector('#yhm')){
              document.querySelector('#yhm').value=uname;
              document.querySelector('#mm').value=pwd;
              if(loginBtn)loginBtn.click();
            }else if(document.querySelector('input[name="username"]')){
              document.querySelector('input[name="username"]').value=uname;
              document.querySelector('input[name="password"]').value=pwd;
              if(loginBtn)loginBtn.click();
            }else{
              var inputs=document.querySelectorAll('input');
              for(var i=0;i<inputs.length;i++){
                if(inputs[i].type==='text'||inputs[i].type==='number'){inputs[i].value=uname;break;}
              }
              for(var i=0;i<inputs.length;i++){
                if(inputs[i].type==='password'){inputs[i].value=pwd;break;}
              }
              if(loginBtn)loginBtn.click();
            }
          })();void(0);`;
          window.open(platform.url, '_blank');
        } else {
          onOpenLogin();
        }
        break;
      case 'portal':
        if (credentials) {
          const bookmarklet = `javascript:(function(){
            var uname='${credentials.studentId}';
            var pwd='${credentials.portalPassword}';
            var inputs=document.querySelectorAll('input');
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='text'||inputs[i].type==='number'){inputs[i].value=uname;break;}
            }
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='password'){inputs[i].value=pwd;break;}
            }
            var btn=document.querySelector('button')||document.querySelector('.btn');
            if(btn)btn.click();
          })();void(0);`;
          window.open(platform.url, '_blank');
        } else {
          onOpenLogin();
        }
        break;
      case 'affairs':
        if (credentials) {
          const bookmarklet = `javascript:(function(){
            var uname='${credentials.studentId}';
            var pwd='${credentials.portalPassword}';
            var inputs=document.querySelectorAll('input');
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='text'||inputs[i].type==='number'){inputs[i].value=uname;break;}
            }
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='password'){inputs[i].value=pwd;break;}
            }
            var btn=document.querySelector('button')||document.querySelector('.btn');
            if(btn)btn.click();
          })();void(0);`;
          window.open(platform.url, '_blank');
        } else {
          onOpenLogin();
        }
        break;
      case 'sypt':
        if (credentials) {
          const bookmarklet = `javascript:(function(){
            var uname='${credentials.studentId}';
            var pwd='${credentials.portalPassword}';
            var inputs=document.querySelectorAll('input');
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='text'||inputs[i].type==='number'){inputs[i].value=uname;break;}
            }
            for(var i=0;i<inputs.length;i++){
              if(inputs[i].type==='password'){inputs[i].value=pwd;break;}
            }
            var btn=document.querySelector('button')||document.querySelector('.btn');
            if(btn)btn.click();
          })();void(0);`;
          window.open(platform.url, '_blank');
        } else {
          onOpenLogin();
        }
        break;
      default:
        window.open(platform.url, '_blank');
    }
  };

  return (
    <Button
      variant="default"
      size="sm"
      className="flex flex-col h-auto py-1.5 px-3 min-w-[120px] bg-gray-100/60 hover:bg-gray-200/80 text-gray-800/80 border border-gray-300/60 hover:border-gray-400/80 leading-tight"
      onClick={handleClick}
      title={platform.description}
    >
      <div className="flex items-center gap-1.5">
        {platformIcons[platform.id]}
        <span className="text-xs">{platform.name}</span>
        <ExternalLink className="w-3 h-3 text-muted-foreground" />
      </div>
      {subLabel && (
        <span className="text-[9px] text-muted-foreground mt-0.5 leading-none">
          {subLabel}
        </span>
      )}
    </Button>
  );
}

export default function TopNav({ currentCollege, onCollegeChange, onOpenLogin, credentials }: TopNavProps) {
  const mainPlatforms = platforms.filter(p => p.id !== 'xy');

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      <div style={{ background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(59, 130, 246), rgb(59, 130, 246))', color: 'rgb(59, 130, 246)' }}>
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between text-xs text-white/90">
            <span>湖北理工学院校园导航</span>
            <span>{currentCollege.name}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="gap-2 min-w-[140px] justify-start h-10 border-2 border-blue-600 bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium"
                >
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>切换学院</span>
                  <span className="text-blue-600 font-bold">({currentCollege.shortName})</span>
                  <ChevronDown className="ml-auto h-4 w-4 text-blue-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px] max-h-[400px] overflow-y-auto bg-blue-50 border-2 border-blue-200 shadow-lg">
                {colleges.map((college) => (
                  <DropdownMenuItem 
                    key={college.id}
                    onClick={() => onCollegeChange(college)}
                    className={`hover:bg-blue-100 ${currentCollege.id === college.id ? 'bg-blue-200 font-semibold' : ''}`}
                  >
                    <GraduationCap className="mr-2 h-4 w-4 text-blue-600" />
                    <span className="text-blue-900">{college.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-8 w-px bg-gray-200" />

            <div className="flex items-center gap-2 flex-1 overflow-x-auto">
              {mainPlatforms.map((platform) => {
                const subLabel = platform.description;
                return (
                  <PlatformButton
                    key={platform.id}
                    platform={platform}
                    credentials={credentials}
                    onOpenLogin={onOpenLogin}
                    subLabel={subLabel}
                  />
                );
              })}
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <Button
              variant="outline"
              className="gap-2 shrink-0 h-10 border-2 border-orange-500 bg-orange-50 hover:bg-orange-100 text-orange-700"
              onClick={() => window.open('http://www.hbpu.edu.cn', '_blank')}
            >
              <GraduationCap className="w-4 h-4" />
              <span>学院主站</span>
            </Button>

            <div className="h-8 w-px bg-gray-200" />

            <Button
              variant={credentials ? 'secondary' : 'default'}
              className="gap-2 shrink-0 h-10"
              onClick={onOpenLogin}
            >
              <Settings className="w-4 h-4" />
              <span>{credentials ? `已登录 (${credentials.studentId})` : '登录'}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
