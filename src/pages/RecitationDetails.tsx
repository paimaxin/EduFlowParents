import { motion } from 'motion/react';
import { CheckCircle2, Clock, XCircle, PlayCircle, FileText } from 'lucide-react';
import { PageType } from '../types';

export function RecitationDetails({ setPage }: { setPage: (page: PageType) => void }) {
  const recitations = [
    { id: 1, subject: '语文', title: '《劝学》第一段', publishDate: '今天 08:00', date: '今天 18:00 前', status: 'completed', comment: '背诵流利，发音准确。' },
    { id: 2, subject: '英语', title: 'Unit 4 课文 Paragraph 1-2', publishDate: '昨天 15:00', date: '今天 20:00 前', status: 'completed', comment: '个别单词读音需纠正，整体不错。' },
    { id: 3, subject: '语文', title: '《琵琶行》', publishDate: '昨天 08:00', date: '明天 12:00 前', status: 'pending', comment: '需在今晚前完成。' },
    { id: 4, subject: '英语', title: '10个核心高级短语', publishDate: '前天 09:00', date: '昨天 18:00 前', status: 'completed', comment: '熟练度还需提升，有稍微卡顿。' },
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
          {recitations.map((r) => (
            <div key={r.id} className="bg-surface-container-lowest rounded-[20px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-[0.5px] border-surface-variant/50 flex flex-col gap-3 overflow-hidden">
              
              {/* Row 1: Title (Scrollable) */}
              <div 
                className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />
                <h4 className="font-headline-sm text-on-surface pr-4">{r.title}</h4>
              </div>

              {/* Row 2: Times & Status */}
              <div className="flex justify-between items-start mt-1">
                <div className="flex flex-col gap-2 text-on-surface-variant font-label-md text-[13px]">
                  <span className="h-[26px] flex items-center">发布: {r.publishDate}</span>
                  <span className="h-[26px] flex items-center">截止: {r.date}</span>
                </div>
                
                <div className="flex flex-col gap-2 items-end shrink-0">
                  <div className="h-[26px] flex items-center bg-primary/10 text-primary font-bold px-2.5 rounded-lg font-label-sm">{r.subject}</div>
                  <div className="h-[26px] flex items-center">
                    {r.status === 'completed' && <div className="flex items-center h-full bg-[#6ECC54] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><CheckCircle2 className="w-3.5 h-3.5"/> 已完成</div>}
                    {r.status === 'pending' && <div className="flex items-center h-full bg-[#F9D46C] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><Clock className="w-3.5 h-3.5"/> 待完成</div>}
                    {r.status === 'unsubmitted' && <div className="flex items-center h-full bg-[#C8161D] text-white font-bold px-2.5 rounded-lg gap-1 font-label-sm"><XCircle className="w-3.5 h-3.5"/> 未完成</div>}
                  </div>
                </div>
              </div>

              {/* Row 3: Comment */}
              {r.comment ? (
                <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-1 border border-surface-container-highest/50 mt-2">
                  <div className="font-body-md text-on-surface-variant text-sm flex items-start gap-1"><PlayCircle className="w-4 h-4 mt-[3px] shrink-0 text-tertiary"/> {r.comment}</div>
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  )
}
