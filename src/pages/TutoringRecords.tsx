import { motion } from "motion/react";
import { Clock, History, ChevronLeft, MoreHorizontal } from "lucide-react";
import { PageType } from "../types";

export function TutoringRecords({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="pt-[72px] md:pt-12 pb-32 md:pb-margin-page px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex flex-col gap-5"
    >
      <div className="hidden md:flex items-center mb-[-0.5rem]">
        <button
          onClick={() => setPage("analytics")}
          className="text-primary flex items-center font-label-md hover:underline"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> 返回学情
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-margin-card items-start">
        <RecordCard
          date="10月24日 14:30"
          duration="45分钟"
          times="3"
          content="针对近期期中考试物理电磁学部分失分较多的情况进行错题梳理。学生对法拉第电磁感应定律的综合应用存在逻辑断层。"
          suggestion="布置了3道专项练习题。建议下周二自习课继续跟进其完成情况，重点关注受力分析步骤是否规范。"
          accent="tertiary"
        />
        <RecordCard
          date="10月22日 16:00"
          duration="30分钟"
          times="1"
          content="近期上课注意力不集中，情绪略显低落。经交流得知近期宿舍关系紧张，影响了睡眠质量和学习状态。"
          suggestion="已对其进行心理疏导。计划本周五私下与生活老师沟通宿舍情况，必要时考虑调换宿舍以保证其休息。"
          accent="secondary"
        />
        <RecordCard
          date="10月20日 12:45"
          duration="20分钟"
          times="5"
          content="英语作文句式单一，词汇量匮乏。指导了高级句型的替换技巧，并批改了其上周提交的两篇练手作文。"
          suggestion="要求每天背诵积累三个高级短语，每周额外提交一篇命题作文进行面批，持续跟进一个月观察效果。"
          accent="tertiary"
        />
      </div>
    </motion.div>
  );
}

function RecordCard({
  date,
  duration,
  times,
  content,
  suggestion,
  accent,
}: any) {
  const accentColors: any = {
    tertiary: "bg-tertiary-container text-tertiary",
    secondary: "bg-secondary text-secondary",
  };

  return (
    <article className="bg-surface-container-lowest rounded-2xl p-margin-card shadow-[0_8px_32px_rgba(0,0,0,0.03)] glass-edge flex flex-col gap-4 relative transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="font-label-md text-on-surface-variant font-bold">
          {date}
        </span>
        <span className="font-label-sm text-primary bg-primary-container/30 px-2 py-1 rounded-full flex items-center gap-1 font-bold">
          <Clock className="w-3.5 h-3.5" /> {duration}
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20 relative overflow-hidden">
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 ${accent === "secondary" ? "bg-secondary" : "bg-tertiary-container"} rounded-l-lg`}
          ></div>
          <h4
            className={`font-label-sm mb-1 ml-2 font-bold ${accent === "secondary" ? "text-secondary" : "text-tertiary"}`}
          >
            辅导效果及后续建议
          </h4>
          <p className="font-body-md text-on-surface-variant ml-2">
            {suggestion}
          </p>
        </div>
        <div className="mt-1">
          <h4 className="font-label-sm text-primary mb-1 tracking-wider uppercase font-bold">
            辅导内容
          </h4>
          <p className="font-body-md text-on-surface leading-relaxed">
            {content}
          </p>
        </div>
      </div>

      <div className="pt-3 mt-auto border-t border-surface-variant flex justify-between items-center">
        <span className="font-label-sm text-on-surface-variant flex items-center gap-1 font-bold">
          <History className="w-3.5 h-3.5" /> 本学期第 {times} 次辅导
        </span>
        <button className="text-primary hover:text-primary-fixed-dim transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
