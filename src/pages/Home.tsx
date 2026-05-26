import {
  ArrowUp,
  Edit,
  Star,
  PenBox,
  Mic,
  Megaphone,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PageType } from "../types";

export function Home({ setPage }: { setPage: (page: PageType) => void }) {
  const [progressWidths, setProgressWidths] = useState({ hw: 0, rec: 0 });

  useEffect(() => {
    // Animate progress bars on mount
    const timer = setTimeout(() => {
      setProgressWidths({ hw: 90, rec: 100 });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-[72px] md:pt-12 px-4 md:px-margin-page max-w-3xl mx-auto w-full flex flex-col gap-5 pb-[100px]">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="flex items-end gap-3 w-full"
      >
        <h2 className="font-display-lg text-on-surface tracking-tight leading-none text-[32px]">
          李奕辰
        </h2>
        <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-md text-on-surface-variant border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] mb-0.5">
          高二(3)班
        </span>
      </motion.section>

      <section className="w-full">
        <motion.button
          layoutId="group-score-card"
          onClick={() => setPage("group-scores")}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative w-full text-left rounded-[20px] bg-primary/5 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-xl p-5 overflow-hidden group"
        >
          <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] pointer-events-none"></div>
          <motion.div
            layoutId="group-score-card-bg"
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl group-hover:bg-primary-container/40 transition-colors duration-700"
          ></motion.div>

          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                <motion.div
                  layoutId="group-score-card-icon"
                  className="w-6 h-6 rounded-full bg-[#F9D46C] flex items-center justify-center shadow-sm"
                >
                  <Star className="w-3.5 h-3.5 text-[#1a1b1f] fill-[#1a1b1f]" />
                </motion.div>
                <motion.span layoutId="group-score-card-title">
                  文科星火组
                </motion.span>
              </h3>
              <motion.span
                layoutId="group-score-card-badge"
                className="font-label-sm text-primary bg-primary/10 px-2.5 py-1 rounded-full"
              >
                排名 #2
              </motion.span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <motion.span
                layoutId="group-score-card-score"
                className="font-display-lg text-[44px] leading-none text-primary font-bold tracking-tighter"
              >
                1,285
              </motion.span>
              <div className="flex items-center font-display-lg text-[44px] leading-none font-bold text-[#6ECC54] tracking-tighter">
                <motion.div layoutId="group-score-card-trend-icon">
                  <ArrowUp className="w-8 h-8 mr-1 stroke-[4px]" />
                </motion.div>
                <motion.span layoutId="group-score-card-trend">120</motion.span>
              </div>
            </div>
          </div>
        </motion.button>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="w-full flex flex-col gap-5"
      >
        <section className="w-full">
          <div className="bg-surface-container-lowest rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-4 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-6 -mt-6 z-0 pointer-events-none"></div>
            <div className="flex justify-between items-center mb-2 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#EB5C20] flex items-center justify-center shadow-sm">
                  <Megaphone className="w-3.5 h-3.5 text-white" />
                </div>
                <h3 className="font-headline-sm text-on-surface">公告</h3>
              </div>
              <span className="font-label-sm text-on-surface-variant bg-surface-container py-0.5 px-2 rounded-md scale-90 origin-right">
                最新
              </span>
            </div>
            <div className="relative z-10">
              <h4 className="font-label-md text-on-surface mb-1 font-bold line-clamp-1">
                关于2023-2024学年春季学期期中考试安排的通知
              </h4>
              <p className="font-body-md text-on-surface-variant line-clamp-2 text-xs mb-2">
                各位老师、同学：根据学校教学工作总体安排，现将本学期期中考试相关事宜通知如下，请大家提前做好准备工作与复习规划。
              </p>
            </div>
            <div className="flex items-center justify-between mt-1 pt-3 border-t border-surface-variant relative z-10 w-full">
              <span className="font-label-sm text-on-surface-variant/80 text-[11px]">
                今天 09:30
              </span>
              <button
                onClick={() => setPage("announcements")}
                className="text-primary font-label-md flex items-center text-xs"
              >
                查看全部 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </section>

        <section className="w-full grid grid-cols-2 gap-4">
          {/* Homework Stat Card */}
          <button
            onClick={() => setPage("homework-details")}
            className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 flex flex-col justify-between aspect-square md:aspect-auto md:h-40 text-left cursor-pointer active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-[#6ECC54] flex items-center justify-center shadow-sm">
                <PenBox className="w-5 h-5 text-white" />
              </div>
              <span className="font-label-sm text-secondary">今日</span>
            </div>
            <div>
              <h3 className="font-label-md text-on-surface-variant mb-1">
                作业完成度
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-headline-md text-on-surface">90</span>
                <span className="font-label-md text-on-surface-variant">%</span>
              </div>
              <div className="w-full bg-surface-variant/50 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-secondary h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressWidths.hw}%` }}
                ></div>
              </div>
            </div>
          </button>

          {/* Recitation Stat Card */}
          <button
            onClick={() => setPage("recitation-details")}
            className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 flex flex-col justify-between aspect-square md:aspect-auto md:h-40 text-left cursor-pointer active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-[#EB5C20] flex items-center justify-center shadow-sm">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="font-label-sm text-tertiary">本周</span>
            </div>
            <div>
              <h3 className="font-label-md text-on-surface-variant mb-1">
                背诵任务
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-headline-md text-on-surface">5</span>
                <span className="font-label-md text-on-surface-variant">
                  / 5 篇
                </span>
              </div>
              <div className="w-full bg-surface-variant/50 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-tertiary h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressWidths.rec}%` }}
                ></div>
              </div>
            </div>
          </button>
        </section>
      </motion.div>
    </div>
  );
}
