import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '王怡婷和忠实跟班的2025恋爱报告',
  description: '一份特别的生日礼物，记录我们的美好时光',
  keywords: ['生日祝福', '恋爱报告', '纪念日'],
  authors: [{ name: '忠实跟班' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
