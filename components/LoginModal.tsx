'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Lock, User, ShieldCheck } from 'lucide-react';

export interface Credentials {
  studentId: string;
  jwglPassword: string;
  portalPassword: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onLoginSuccess: (credentials: Credentials) => void;
}

export default function LoginModal({ isOpen, onLoginSuccess }: LoginModalProps) {
  const [studentId, setStudentId] = useState('');
  const [jwglPassword, setJwglPassword] = useState('');
  const [portalPassword, setPortalPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('student_credentials_v2');
      if (saved) {
        try {
          const creds: Credentials = JSON.parse(saved);
          setStudentId(creds.studentId || '');
          setJwglPassword(creds.jwglPassword || '');
          setPortalPassword(creds.portalPassword || '');
        } catch {
        }
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !jwglPassword.trim() || !portalPassword.trim()) {
      return;
    }
    
    setIsLoading(true);
    
    const credentials: Credentials = {
      studentId: studentId.trim(),
      jwglPassword: jwglPassword.trim(),
      portalPassword: portalPassword.trim(),
    };
    
    localStorage.setItem('student_credentials_v2', JSON.stringify(credentials));
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsLoading(false);
    onLoginSuccess(credentials);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4 shadow-2xl border-2 border-blue-300 bg-blue-50">
        <CardHeader className="space-y-1 pb-4 bg-blue-50">
          <CardTitle className="text-2xl font-bold text-center text-black flex items-center justify-center gap-2">
            <ShieldCheck className="w-6 h-6 text-black" />
            学生登录
          </CardTitle>
          <CardDescription className="text-center text-base text-black">
            请输入您的学号和密码以访问校园服务
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-blue-50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-sm font-medium flex items-center gap-1 text-black">
                <User className="w-4 h-4 text-black" />
                学号
              </Label>
              <Input
                id="studentId"
                type="text"
                placeholder="请输入学号"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
                autoComplete="username"
                className="h-11 border-blue-200 focus:border-blue-500 bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jwglPassword" className="text-sm font-medium flex items-center gap-1 text-black">
                <Lock className="w-4 h-4 text-black" />
                教学综合信息服务平台密码
              </Label>
              <Input
                id="jwglPassword"
                type="password"
                placeholder="用于选课、成绩查询等"
                value={jwglPassword}
                onChange={(e) => setJwglPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="h-11 border-blue-200 focus:border-blue-500 bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portalPassword" className="text-sm font-medium flex items-center gap-1 text-black">
                <Lock className="w-4 h-4 text-black" />
                统一信息门户密码
              </Label>
              <Input
                id="portalPassword"
                type="password"
                placeholder="用于课表、教务通知、事务中心等"
                value={portalPassword}
                onChange={(e) => setPortalPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="h-11 border-blue-200 focus:border-blue-500 bg-white"
              />
              <p className="text-xs text-black">
                提示：实验实践平台通过统一认证，需使用此密码
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-11 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading || !studentId.trim() || !jwglPassword.trim() || !portalPassword.trim()}
            >
              {isLoading ? '验证中...' : '登录'}
            </Button>
            
            <div className="text-center space-y-1">
              <p className="text-xs text-black">
                您的密码将安全保存在本地浏览器中
              </p>
              <p className="text-xs text-black">
                点击平台按钮将自动在新窗口填充登录信息
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
