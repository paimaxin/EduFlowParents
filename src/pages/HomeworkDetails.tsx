import { motion } from 'motion/react';
import { CheckCircle2, Clock, XCircle, FileText } from 'lucide-react';
import { PageType } from '../types';

export function HomeworkDetails({ setPage }: { setPage: (page: PageType) => void }) {
  const homeworks = [
    { id: 1, subject: '数学', title: '【必交】期中复习卷（一）附加一些超长的文字测试滚动效果', publishDate: '今天 08:00', date: '今天 18:00 前', status: 'submitted', grade: 'A', comment: '步骤清晰，继续保持。' },
    { id: 2, subject: '英语', title: '【必交】Unit 4 完形填空', publishDate: '昨天 15:00', date: '今天 20:00 前', status: 'pending', grade: null, comment: null },
    { id: 3, subject: '语文', title: '【选做】阅读理解专项', publishDate: '昨天 08:00', date: '明天 12:00 前', status: 'unsubmitted', grade: null, comment: '未按时提交。' },
    { id: 4, subject: '物理', title: '【必交】电磁学课后习题', publishDate: '前天 09:00', date: '昨天 18:00 前', status: 'submitted', grade: 'B+', comment: '第二题受力分析漏了摩擦力。' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pb-[100px]"
    >
      <div className="pt-[72px] md:pt-12 px-4 md:px-margin-page max-w-3xl mx-auto w-full flex flex-col gap-5">
        <section className="flex flex-col gap-4">
          {homeworks.map((hw) => (
            <div key={hw.id} className="bg-surface-container-lowest rounded-[20px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-[0.5px] border-surface-variant/50 flex flex-col gap-3 overflow-hidden">
              
              {/* Row 1: Title (Scrollable) */}
              <div 
                className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
                <h4 className="font-headline-sm text-on-surface pr-4">{hw.title}</h4>
              </div>

              {/* Row 2: Times & Status */}
              <div className="flex justify-between items-start mt-1">
                <div className="flex flex-col gap-2 text-on-surface-variant font-label-md text-[13px]">
                  <span className="h-[26px] flex items-center">发布: {hw.publishDate}</span>
                  <span className="h-[26px] flex items-center">截止: {hw.date}</span>
                </div>
                
                <div className="flex flex-col gap-2 items-end shrink-0">
                  <div className="h-[26px] flex items-center bg-primary/10 text-primary font-bold px-2.5 rounded-lg font-label-sm">{hw.subject}</div>
                  <div className="h-[26px] flex items-center">
                    {hw.status === 'submitted' && <div className="flex items-center h-full bg-[#6ECC54] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><CheckCircle2 className="w-3.5 h-3.5"/> 已提交</div>}
                    {hw.status === 'pending' && <div className="flex items-center h-full bg-[#F9D46C] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><Clock className="w-3.5 h-3.5"/> 待提交</div>}
                    {hw.status === 'unsubmitted' && <div className="flex items-center h-full bg-[#C8161D] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><XCircle className="w-3.5 h-3.5"/> 未交</div>}
                  </div>
                </div>
              </div>

              {/* Row 3: Grade & Comment */}
              {hw.grade || hw.comment ? (
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-1 border border-surface-container-highest/50 mt-2">
                  {hw.grade && <div className="font-label-md text-on-surface">评级: <span className="font-bold text-primary">{hw.grade}</span></div>}
                  {hw.comment && <div className="font-body-md text-on-surface-variant text-sm flex items-start gap-1"><FileText className="w-4 h-4 mt-[3px] shrink-0 text-secondary"/> {hw.comment}</div>}
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  )
}
