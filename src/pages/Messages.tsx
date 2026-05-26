import { motion } from "motion/react";
import {
  Megaphone,
  FileText,
  ChevronRight,
  BarChart,
  Brain,
  BookOpen,
  Edit,
} from "lucide-react";

import { PageType } from "../types";

export function Messages({ setPage }: { setPage: (page: PageType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-[72px] md:pt-12 px-6 md:px-margin-page pb-32 max-w-5xl mx-auto flex flex-col gap-4 w-full"
    >
      <header className="mb-1">
        <h2 className="font-headline-md text-on-surface mb-1">消息中心</h2>
        <p className="font-body-md text-on-surface-variant">
          查看最新系统通知、周报与交流记录
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-surface-container-lowest rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 z-0"></div>
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#018B8D] flex items-center justify-center shadow-sm">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-headline-sm text-on-surface">周报</h3>
            </div>
            <span className="font-label-sm text-secondary bg-secondary/10 py-1 px-2 rounded-md">
              第12周
            </span>
          </div>
          <div className="relative z-10 flex-1">
            <div className="flex justify-between items-end mb-3">
              <h4 className="font-label-md text-on-surface font-bold">
                李奕辰 学习情况摘要
              </h4>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-label-sm text-on-surface-variant">
                  整体平稳
                </span>
              </div>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-on-surface-variant font-body-md">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>{" "}
                数学模拟卷完成度高，压轴题解答出色。
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tertiary">!</span>{" "}
                英语听写满分，词汇量提升明显，继续保持。
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant relative z-10">
            <span className="font-label-sm text-on-surface-variant">
              昨天 18:00生成
            </span>
            <button
              onClick={() => setPage("weekly-reports")}
              className="text-secondary font-label-md flex items-center hover:bg-secondary/10 px-2 py-1 rounded-md transition-colors -mr-2"
            >
              阅读详情 <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 flex flex-col flex-1 mt-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline-sm text-on-surface">消息记录</h3>
        </div>

        <div className="flex flex-col gap-2">
          {[
            {
              avatar: "张",
              bg: "bg-[#e0f2fe] text-[#0284c7]",
              title: "张老师 (班主任/语文)",
              time: "10:42",
              content: "李奕辰最近学习状态不错，继续保持。",
              unread: true,
            },
            {
              avatar: "王",
              bg: "bg-[#dcfce7] text-[#16a34a]",
              title: "王老师 (数学)",
              time: "昨天",
              content: "压轴题解答得很好，但基础题还要再细心些。",
            },
            {
              avatar: "李",
              bg: "bg-[#fef9c3] text-[#ca8a04]",
              title: "李老师 (英语)",
              time: "周二",
              content: "这周的听写满分，词汇量提升很明显！",
            },
            {
              avatar: "赵",
              bg: "bg-[#f3e8ff] text-[#9333ea]",
              title: "赵老师 (物理)",
              time: "周一",
              content: "下次课记得带上物理实验册。",
            },
          ].map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <MessageItem {...msg} onClick={() => setPage("chat")} />
              {index < 3 && (
                <div className="h-px bg-surface-variant/50 ml-14 mt-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MessageItem({
  avatar,
  bg,
  title,
  time,
  content,
  unread,
  onClick,
}: any) {
  return (
    <div
      onClick={onClick}
      className="flex gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer relative active:scale-[0.98]"
    >
      {unread && (
        <div className="absolute w-2 h-2 rounded-full bg-primary top-5 left-1.5"></div>
      )}
      <div
        className={`w-10 h-10 rounded-full ${bg} shadow-sm flex items-center justify-center shrink-0 ml-2 font-bold text-lg`}
      >
        {avatar}
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-label-md text-on-surface font-bold truncate">
            {title}
          </h4>
          <span className="font-label-sm text-on-surface-variant shrink-0 ml-2">
            {time}
          </span>
        </div>
        <p className="font-body-md text-on-surface-variant text-sm line-clamp-1">
          {content}
        </p>
      </div>
    </div>
  );
}
