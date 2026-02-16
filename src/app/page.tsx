'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BirthdayReport() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const totalPages = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1500);
          return 100;
        }
        return prev + Math.random() * 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-pink-950 via-rose-950 to-amber-950">
        <div className="text-center">
          <div className="mb-8 text-2xl font-medium text-pink-200 animate-pulse">
            正在为你生成 王怡婷和忠实跟班 的2025恋爱报告...
          </div>
          <div className="relative w-64 h-2 mx-auto overflow-hidden bg-pink-900/30 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
          <div className="mt-6 text-sm text-pink-300">
            {progress < 30 ? '加载回忆中...' : progress < 60 ? '计算心动频率...' : '准备浪漫时刻...'}
          </div>
        </div>
      </div>
    );
  }

  const NumberAnimation = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!showContent) return;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setDisplayValue(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      window.requestAnimationFrame(step);
    }, [value, duration]);

    return <span>{displayValue}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-pink-950 to-amber-950 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/5 via-amber-500/5 to-rose-500/5 rounded-full blur-3xl" />
      </div>

      <audio autoPlay loop>
        <source src="/deard.mp4" type="video/mp4" />
      </audio>

      <div className="relative h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 py-4 overflow-hidden">
          <div className="max-w-4xl w-full h-full flex flex-col justify-center">
            {currentPage === 0 && (
              <div className="text-center space-y-6 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-amber-500/20 border border-pink-400/30 text-pink-200 text-sm mb-6">
                    💕 年度恋爱数据
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent mb-4">
                    爱是所有的旋律
                  </h2>
                </div>

                <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
                    <div className="text-7xl font-bold text-pink-300 mb-2">
                      <NumberAnimation value={365} />
                    </div>
                    <div className="text-xl text-pink-200 mb-3">你的声音在线了 365 天</div>
                    <p className="text-sm text-pink-300/80 leading-relaxed">
                      达成成就：全年无休的思念。
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
                    <div className="text-5xl font-bold text-amber-300 mb-2">「见面」</div>
                    <div className="text-xl text-amber-200 mb-3">2025 年度关键词</div>
                    <p className="text-sm text-amber-300/80 leading-relaxed">
                      这个词语，承载了全年 100% 的期待与 200% 的快乐。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 1 && (
              <div className="text-center space-y-8 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-amber-500/20 border border-rose-400/30 text-rose-200 text-sm mb-6">
                    👫 共同创作
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                    我们是彼此的心灵印记
                  </h2>
                </div>

                <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-rose-500/30 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">💑</span>
                    </div>
                    <div className="text-left">
                      <div className="text-5xl font-bold text-rose-300 mb-2">
                        <NumberAnimation value={13} />
                      </div>
                      <div className="text-xl text-rose-200">次见面</div>
                    </div>
                  </div>
                  <div className="text-rose-300/90 leading-relaxed">
                    平均每 <NumberAnimation value={28} /> 天见一次<br />
                    每一次见面，都是一场小型巡回演唱会<br />
                    车站和机场，是我们最熟悉的舞台入口
                  </div>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div className="text-center space-y-6 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-amber-500/20 border border-pink-400/30 text-pink-200 text-sm mb-6">
                    👫 共同创作
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent mb-4">
                    &ldquo;出片&rdquo;合集
                  </h2>
                </div>

                <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
                    <div className="text-6xl font-bold text-pink-300 mb-2">
                      <NumberAnimation value={79} />
                    </div>
                    <div className="text-xl text-pink-200 mb-3">组视觉大片</div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
                    <div className="text-6xl font-bold text-amber-300 mb-2">
                      <NumberAnimation value={2760} />
                    </div>
                    <div className="text-xl text-amber-200 mb-3">张镜头</div>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/40 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-pink-200/90 leading-relaxed text-lg md:text-xl">
                    你是我的专属模特，也是我灵感的唯一制片人。
                  </p>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className="text-center space-y-6 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-amber-500/20 border border-rose-400/30 text-rose-200 text-sm mb-6">
                    👫 共同创作
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                    里程成就
                  </h2>
                </div>

                <div className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-rose-500/30 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">✈️</span>
                    </div>
                    <div className="text-left">
                      <div className="text-5xl font-bold text-rose-300 mb-2">
                        <NumberAnimation value={12983} />
                      </div>
                      <div className="text-xl text-rose-200">公里</div>
                    </div>
                  </div>
                  <div className="text-rose-300/90 leading-relaxed text-lg">
                    这些里程连起来，可以绕地球约 0.32 圈。<br />
                    但我知道，目的地只有一个——你身边。
                  </div>
                </div>
              </div>
            )}

            {currentPage === 4 && (
              <div className="text-center space-y-6 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-amber-400 to-rose-400 bg-clip-text text-transparent mb-4">
                    📸 我们的视觉大片
                  </h2>
                  <p className="text-xl text-pink-200">
                    共同创作 <NumberAnimation value={47} /> 张珍贵回忆
                  </p>
                </div>

                <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-pink-400/40 hover:border-amber-400/60 transition-all duration-500 group transform hover:scale-105">
                    <Image src="/photo1.jpg" alt="照片1" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-pink-400/40 hover:border-amber-400/60 transition-all duration-500 group transform hover:scale-105">
                    <Image src="/photo2.jpg" alt="照片2" fill className="object-cover" />
                  </div>
                </div>

                <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-amber-500/30 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-amber-200/90 leading-relaxed text-sm md:text-base">
                    每一次快门，都是爱的定格。
                  </p>
                </div>
              </div>
            )}

            {currentPage === 5 && (
              <div className="text-center space-y-6 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                    亲爱的王怡婷
                  </h2>
                  <div className="text-3xl md:text-4xl font-semibold text-white mt-4">
                    生日快乐！
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/20 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-white/90">
                      感谢你，让我的 2025 年，成为生命中最动听的一章。
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-white/80">
                      去年的愿望是&ldquo;多见面&rdquo;，我们做到了。
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-white/80">
                      今年的愿望是：
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                      &ldquo;让&lsquo;在一起&rsquo;，从年度报告，变成每日实时播放&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 6 && (
              <div className="text-center space-y-8 py-4">
                <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent mb-6">
                    让美好继续
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto">
                    让我们一同重温这一年，点击下方按钮，开启我们的年度回忆。
                  </p>
                </div>

                <div className={`transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <button
                    onClick={() => window.open('https://www.alipan.com/s/jgRpdSjLX1j', '_blank')}
                    className="group relative w-full max-w-md mx-auto py-10 md:py-12 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-pink-500/30"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl text-pink-600 ml-1">▶</span>
                      </div>
                      <div className="text-left">
                        <div className="text-2xl md:text-3xl font-bold text-white">播放年度混剪</div>
                        <div className="text-sm md:text-base text-white/80">Our 2025 Memories</div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className={`pt-8 space-y-3 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white/30 text-xs">
                    Made with 💜 for 王怡婷
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-between px-6 py-6 bg-gradient-to-t from-pink-950/80 via-transparent to-transparent">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPage === 0
                ? 'opacity-30 cursor-not-allowed bg-white/5'
                : 'bg-white/10 hover:bg-white/20 hover:scale-110'
            }`}
          >
            <span className="text-2xl">←</span>
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`transition-all duration-300 ${
                  currentPage === index
                    ? 'w-6 h-2 md:w-8 md:h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 rounded-full'
                    : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPage === totalPages - 1
                ? 'opacity-30 cursor-not-allowed bg-white/5'
                : 'bg-white/10 hover:bg-white/20 hover:scale-110'
            }`}
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
