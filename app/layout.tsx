import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "湖北理工学院校园导航",
  description: "湖北理工学院校园导航系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
