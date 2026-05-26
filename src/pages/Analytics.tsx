import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageType } from "../types";
import { ClipboardList, Mic, TrendingUp, Maximize2, X } from "lucide-react";

export function Analytics({ setPage }: { setPage: (page: PageType) => void }) {
  const [isLandscape, setIsLandscape] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-[72px] md:pt-12 px-4 md:px-margin-page max-w-2xl mx-auto w-full flex flex-col gap-4 pb-[100px]"
    >
      <div className="px-2 mt-1 md:mt-2">
        <div className="flex justify-between items-end mb-1">
          <h2 className="font-headline-md text-on-surface">学情概览</h2>
          <span className="text-primary font-medium text-sm mb-1">
            学生：李奕辰
          </span>
        </div>
        <p className="font-body-md text-on-surface-variant">近期学习状态趋势</p>
      </div>

      <button
        onClick={() => setIsLandscape(true)}
        className="block w-full text-left bg-surface-container-lowest rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-5 relative overflow-hidden transition-transform active:scale-[0.98] hover:shadow-md group"
      >
        <div className="absolute top-4 right-4 text-on-surface-variant/50 group-hover:text-primary transition-colors z-10 hidden md:block">
          <Maximize2 className="w-5 h-5" />
        </div>
        <div className="flex justify-between items-end mb-2">
          <div>
            <div className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1 flex items-center gap-2">
              综合表现{" "}
              <Maximize2 className="w-3.5 h-3.5 md:hidden text-on-surface-variant/50" />
            </div>
            <div className="font-display-lg text-primary leading-none">85%</div>
          </div>
          <div className="font-label-md text-secondary bg-secondary-fixed/50 px-3 py-1 rounded-full flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+5%</span>
          </div>
        </div>

        <div className="relative w-full h-[120px] mt-4">
          <svg
            className="w-full h-full absolute inset-0"
            preserveAspectRatio="none"
            viewBox="0 0 400 200"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#007AFF" />
                <stop offset="100%" stopColor="#007AFF" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur result="coloredBlur" stdDeviation="3" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              fill="url(#gradient)"
              d="M0,150 C50,140 100,160 150,110 C200,60 250,90 300,50 C350,10 400,30 400,30 L400,200 L0,200 Z"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              fill="none"
              stroke="#007AFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M0,150 C50,140 100,160 150,110 C200,60 250,90 300,50 C350,10 400,30 400,30"
              filter="url(#glow)"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              cx="300"
              cy="50"
              fill="#FFFFFF"
              r="4"
              stroke="#007AFF"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex justify-between text-on-surface-variant/50 font-label-sm mt-2 px-1">
          <span>W1</span>
          <span>W2</span>
          <span>W3</span>
          <span>W4</span>
        </div>
      </button>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button
          onClick={() => setPage("exam-results")}
          className="acrylic-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full bg-[#002FA7] flex items-center justify-center shadow-sm">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline-sm text-on-surface">考试成绩</span>
        </button>

        <button
          onClick={() => setPage("tutoring-records")}
          className="acrylic-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full bg-[#D34947] flex items-center justify-center shadow-sm">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline-sm text-on-surface">个辅记录</span>
        </button>
      </div>

      <AnimatePresence>
        {isLandscape && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-surface flex items-center justify-center overflow-hidden"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="portrait:w-[100vh] portrait:h-[100vw] landscape:w-full landscape:h-full md:max-w-6xl md:p-8 flex flex-col origin-center portrait:rotate-90 landscape:rotate-0 md:rotate-0 absolute md:relative"
            >
              <div className="flex-1 bg-surface-container-lowest md:rounded-[32px] shadow-xl flex flex-col p-6 md:p-10 relative">
                <button
                  onClick={() => setIsLandscape(false)}
                  className="absolute top-6 right-6 p-3 bg-surface-container hover:bg-surface-container-high active:scale-95 rounded-full transition-all z-10 text-on-surface"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex justify-between items-end mb-6 md:mb-10 pr-20">
                  <div>
                    <div className="font-label-lg text-on-surface-variant uppercase tracking-wider mb-2">
                      综合表现趋势 (详细)
                    </div>
                    <div className="font-display-lg text-primary leading-none">
                      85%
                    </div>
                  </div>
                  <div className="font-label-lg text-secondary bg-secondary-fixed/50 px-5 py-2.5 rounded-full flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>+5%</span>
                  </div>
                </div>

                <div className="flex-1 w-full relative min-h-0">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 800 400"
                  >
                    <defs>
                      <linearGradient
                        id="gradient-landscape"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#007AFF"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#007AFF"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <filter id="glow-landscape">
                        <feGaussianBlur result="coloredBlur" stdDeviation="4" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Grid lines */}
                    <path
                      d="M0,80 L800,80 M0,160 L800,160 M0,240 L800,240 M0,320 L800,320"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                      opacity="0.1"
                      className="text-on-surface-variant"
                    />

                    {/* Chart path */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 1 }}
                      fill="url(#gradient-landscape)"
                      d="M0,300 C100,280 200,320 300,220 C400,120 500,180 600,100 C700,20 800,60 800,60 L800,400 L0,400 Z"
                    />
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      fill="none"
                      stroke="#007AFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0,300 C100,280 200,320 300,220 C400,120 500,180 600,100 C700,20 800,60 800,60"
                      filter="url(#glow-landscape)"
                    />

                    {/* Data points */}
                    {[
                      { cx: "0", cy: "300", r: "5" },
                      { cx: "300", cy: "220", r: "5" },
                      { cx: "600", cy: "100", r: "5" },
                      { cx: "800", cy: "60", r: "6" },
                    ].map((point, index) => (
                      <motion.circle
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.2, type: "spring" }}
                        cx={point.cx}
                        cy={point.cy}
                        fill="#FFFFFF"
                        r={point.r}
                        stroke="#007AFF"
                        strokeWidth="3"
                      />
                    ))}

                    {/* Value labels */}
                    <motion.text
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      x="300"
                      y="200"
                      fill="currentColor"
                      className="text-on-surface"
                      fontSize="14"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      72%
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      x="600"
                      y="80"
                      fill="currentColor"
                      className="text-on-surface"
                      fontSize="14"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      81%
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, type: "spring" }}
                      x="780"
                      y="40"
                      fill="#007AFF"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="end"
                    >
                      85%
                    </motion.text>
                  </svg>
                </div>

                <div className="flex justify-between text-on-surface-variant font-label-md mt-6 px-2">
                  <span>W1 (3/1)</span>
                  <span>W2 (3/8)</span>
                  <span>W3 (3/15)</span>
                  <span>W4 (3/22)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
