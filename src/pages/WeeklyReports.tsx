import { motion } from "motion/react";
import { PageType } from "../types";
import { FileText, TrendingUp, Search, AlertCircle } from "lucide-react";

export function WeeklyReports({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface flex flex-col"
    >
      <div className="flex flex-col gap-6">
        {/* Current Report */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-headline-sm text-on-surface mb-3">最新周报</h2>
          <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/30 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#018B8D]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#018B8D]" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-on-surface">
                    第12周 学情总结
                  </h3>
                  <p className="font-label-sm text-on-surface-variant">
                    2026.05.18 - 2026.05.24
                  </p>
                </div>
              </div>
              <span className="font-label-sm px-3 py-1 bg-green-100 text-green-700 md:font-bold rounded-full">
                状态平稳
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="font-label-md text-on-surface font-bold">
                    优势项
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant">
                  数学模拟卷完成度高，压轴题解答出色。英语听写满分，词汇量稳步提升。
                </p>
              </div>
              <div className="bg-surface-container rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-secondary" />
                  <span className="font-label-md text-on-surface font-bold">
                    弱弱项与建议
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant">
                  物理实验题丢分较多，基础性计算需更细心，建议周末进行专项巩固。
                </p>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-4">
              <h4 className="font-label-md text-on-surface font-bold mb-2">
                老师寄语
              </h4>
              <p className="font-body-sm text-on-surface-variant indent-6">
                奕辰这周整体状态不错，上课听讲比较专注。马上要期中考试了，希望能够保持现在的学习节奏，把基础打得更扎实一些，相信一定能取得好成绩！
              </p>
            </div>
          </div>
        </motion.div>

        {/* Historical Reports */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-headline-sm text-on-surface mb-3 mt-4">
            历史周报
          </h2>

          <div className="flex flex-col gap-3">
            {[11, 10, 9, 8].map((weekNum, index) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                key={weekNum}
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                    <FileText className="w-4 h-4 text-on-surface-variant" />
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface font-bold">
                      第{weekNum}周 学情总结
                    </h4>
                    <span className="font-label-sm text-on-surface-variant">
                      点击查看详细分析
                    </span>
                  </div>
                </div>
                <TrendingUp
                  className={`w-4 h-4 ${weekNum % 2 === 0 ? "text-green-500" : "text-primary"}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
