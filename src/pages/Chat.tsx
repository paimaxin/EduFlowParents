import { motion } from "motion/react";
import { PageType } from "../types";

export function Chat({ setPage }: { setPage: (page: PageType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface flex flex-col"
    >
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-20 p-2">
        <div className="text-center font-label-sm text-on-surface-variant my-2">
          昨天 10:42
        </div>

        <div className="flex gap-3 justify-end">
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            老师您好，李奕辰最近在家里做数学作业比较吃力，请问在学校表现如何呢？
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 self-start font-bold">
            我
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0 self-start font-bold">
            王
          </div>
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            家长您好，他在学校听课还是比较认真的，但是基础题有些粗心，压轴题解答得很好，但基础题还要再细心些。可以让他在家里多练习一下基础题。
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-2">
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            好的，收到。那这周末的作业大概是哪些内容呢？我们需要给他额外买一些练习册吗？
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 self-start font-bold">
            我
          </div>
        </div>

        <div className="text-center font-label-sm text-on-surface-variant mt-4 mb-2">
          昨天 14:15
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0 self-start font-bold">
            王
          </div>
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            这周末作业不算多，主要是一套综合模拟卷，大概需要一个半小时。练习册的话，建议先把发的《单元同步训》的基础篇做扎实，暂时不需要额外购买，贪多嚼不烂。
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-2">
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            明白了，谢谢王老师。我会周末盯紧他把基础题再过一遍的。
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 self-start font-bold">
            我
          </div>
        </div>

        <div className="text-center font-label-sm text-on-surface-variant mt-4 mb-2">
          今天 09:30
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0 self-start font-bold">
            王
          </div>
          <div className="bg-surface-container-lowest p-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 text-on-surface leading-relaxed">
            不客气，奕辰是个聪明的孩子，稍微细心一点加上系统训练，成绩肯定还能再上一个台阶。有什么问题我们随时沟通。
          </div>
        </div>
      </div>
    </motion.div>
  );
}
