'use client';

import { useState, useEffect } from 'react';
import TopNav from '@/components/TopNav';
import LoginModal, { Credentials } from '@/components/LoginModal';
import CollegeContent from '@/components/CollegeContent';
import { defaultCollege, College } from '@/lib/colleges';
import { School } from 'lucide-react';

export default function Home() {
  const [currentCollege, setCurrentCollege] = useState<College>(defaultCollege);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('student_credentials_v2');
    if (saved) {
      try {
        const creds: Credentials = JSON.parse(saved);
        if (creds.studentId && creds.jwglPassword && creds.portalPassword) {
          setCredentials(creds);
        }
      } catch {
        console.error('Failed to parse saved credentials');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = (creds: Credentials) => {
    setCredentials(creds);
    setIsLoginModalOpen(false);
  };

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCollegeChange = (college: College) => {
    setCurrentCollege(college);
    localStorage.setItem('current_college_v2', JSON.stringify(college));
  };

  useEffect(() => {
    const savedCollege = localStorage.getItem('current_college_v2');
    if (savedCollege) {
      try {
        const college = JSON.parse(savedCollege);
        setCurrentCollege(college);
      } catch {
        console.error('Failed to parse saved college');
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground font-medium">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <TopNav
        currentCollege={currentCollege}
        onCollegeChange={handleCollegeChange}
        onOpenLogin={handleOpenLogin}
        credentials={credentials}
      />

      <main className="flex-1">
        <CollegeContent college={currentCollege} />
      </main>

      <footer className="border-t text-white py-6" style={{ background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(59, 130, 246))' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <School className="w-5 h-5" />
              <span className="font-medium">湖北理工学院校园导航</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a 
                href="http://www.hbpu.edu.cn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                学院主站
              </a>
              <a 
                href="http://jwc.hbpu.edu.cn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                教务处
              </a>
              <a 
                href="http://lib.hbpu.edu.cn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                图书馆
              </a>
              <a 
                href="http://sjjx.hbpu.edu.cn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                实验平台
              </a>
              <span className="text-white/50">|</span>
              <span className="text-white/70 text-xs">技术支持：Magnus</span>
            </div>
          </div>
          <div className="text-center text-xs text-white/60 mt-4">
            magnus@2026
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={isLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
