import { motion } from 'motion/react';
import { Calendar, History, Quote, MessageCircle, Lightbulb, TrendingUp, ChevronLeft } from 'lucide-react';
import { PageType } from '../types';

export function ExamResults({ setPage }: { setPage: (page: PageType) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="pb-[100px]"
    >
      <div className="pt-[72px] md:pt-12 px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col gap-5">
        <div className="hidden md:flex items-center mb-[-0.5rem]">
          <button onClick={() => setPage('analytics')} className="flex items-center text-primary font-label-md hover:underline">
            <ChevronLeft className="w-5 h-5 mr-1" /> 返回学情
          </button>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="col-span-2 md:col-span-2 bg-gradient-to-br from-[#E3F8D8] to-[#C1F0AE] rounded-2xl p-6 text-gray-900 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <header className="flex flex-col relative z-10 w-full gap-1">
              <div className="bg-white/60 text-[#42812A] w-fit px-2.5 py-0.5 rounded-full font-label-sm backdrop-blur-sm mb-1">最新成绩</div>
              <h4 className="font-headline-sm font-bold leading-snug w-full pr-4">2023-2024学年秋季期中统测 - 数学</h4>
              
              <div className="flex justify-between items-end w-full mt-1">
                <div className="font-label-md text-gray-700 flex items-center gap-1 pb-1">
                  <Calendar className="w-3.5 h-3.5 shrink-0" /> 2023年11月15日
                </div>
                <div className="flex items-baseline gap-1 shrink-0">
                  <span className="font-display-lg text-gray-900 leading-none">96</span>
                  <span className="font-body-md text-gray-700">/ 100</span>
                </div>
              </div>
            </header>

            <div className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex gap-3 items-start border border-white/50 mt-1 relative z-10">
              <div className="w-8 h-8 shrink-0 rounded-full bg-white/60 flex items-center justify-center shadow-sm -mt-0.5">
                <Quote className="w-4 h-4 text-[#42812A] fill-[#42812A] relative" />
              </div>
              <p className="font-body-md text-gray-800 leading-relaxed text-sm">
                解题思路非常清晰，压轴题的第二问运用了巧妙的构造法，值得表扬。但在基础计算部分出现了一处粗心错误，后续需加强计算准确度的训练。
              </p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-[0.5px] border-surface-variant/50 flex flex-col justify-between">
            <p className="font-label-sm text-on-surface-variant uppercase">学期平均分</p>
            <div className="mt-2">
              <span className="font-display-lg text-on-surface">91.5</span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-[0.5px] border-surface-variant/50 flex flex-col justify-between">
            <p className="font-label-sm text-on-surface-variant uppercase">累计考试</p>
            <div className="mt-2">
              <span className="font-display-lg text-on-surface">12</span>
              <span className="font-body-md text-on-surface-variant ml-1">次</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h3 className="font-headline-sm text-on-surface mb-2 px-1">历史记录</h3>
          
          <article className="bg-surface-container-lowest rounded-2xl p-margin-card shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-5 border-[0.5px] border-surface-variant/30 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F9D46C]"></div>
            <header className="flex justify-between items-start pl-2">
              <div>
                <h4 className="font-headline-sm text-on-surface">10月月考 - 英语</h4>
                <p className="font-label-md text-on-surface-variant mt-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 2023年10月28日
                </p>
              </div>
              <History className="w-5 h-5 text-outline-variant" />
            </header>
            <div className="flex items-end gap-3 pl-2">
              <span className="font-display-lg text-on-surface">138</span>
              <span className="font-body-md text-on-surface-variant pb-1">/ 150</span>
            </div>
            <div className="bg-surface-container-low rounded-xl p-4 mt-2 flex gap-3 items-start border border-surface-container-highest/50">
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#F9D46C] flex items-center justify-center shadow-sm -mt-1 relative z-10">
                <Lightbulb className="w-4 h-4 text-[#1a1b1f]" />
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                阅读理解全对，词汇量储备丰富。作文句式多样性有所提升，但在时态的统一性上还需注意，建议多背诵优秀范文。
              </p>
            </div>
          </article>
        </section>
      </div>
    </motion.div>
  );
}
