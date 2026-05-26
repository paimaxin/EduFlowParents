import { motion } from 'motion/react';
import { PageType } from '../types';
import { User, Unlink, BookOpen, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

export function StudentDetails({ setPage }: { setPage: (page: PageType) => void }) {
  const [showUnbindConfirm, setShowUnbindConfirm] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface relative"
    >
      <div className="flex flex-col gap-6">
        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/30 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center text-primary text-2xl font-bold">
            辰
          </div>
          <div className="flex-1">
            <h3 className="font-headline-sm text-on-surface mb-1">李奕辰</h3>
            <p className="font-label-md text-on-surface-variant">编号: 20230102118</p>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
          <h3 className="font-headline-sm text-on-surface flex items-center gap-2">
            <User className="w-5 h-5 text-primary" /> 基本信息
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-surface-variant/30 pb-3">
              <span className="font-body-md text-on-surface-variant">年级班级</span>
              <span className="font-body-md text-on-surface font-medium">高二 (3) 班</span>
            </div>
            <div className="flex items-center justify-between pb-1">
              <span className="font-body-md text-on-surface-variant">分组信息</span>
              <span className="font-body-md text-on-surface font-medium">A组</span>
            </div>
          </div>
        </section>

        <button 
          onClick={() => setShowUnbindConfirm(true)}
          className="w-full bg-error-container hover:bg-error-container/80 text-on-error-container transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-base shadow-sm mt-4 border border-error/20"
        >
          <Unlink className="w-5 h-5" />
          解绑该学生
        </button>
      </div>

      {showUnbindConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-container-lowest rounded-[24px] p-6 max-w-sm w-full shadow-lg"
          >
            <h3 className="font-headline-sm text-on-surface mb-2">确认解绑？</h3>
            <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
              解绑后，您将无法查看李奕辰的学情数据、成绩及作业等信息。此操作无法撤销。
            </p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowUnbindConfirm(false)}
                className="flex-1 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium text-sm"
              >
                取消
              </button>
              <button 
                onClick={() => {
                  setShowUnbindConfirm(false);
                  setPage('profile');
                }}
                className="flex-1 py-3 rounded-xl bg-error hover:bg-error/90 text-on-error transition-colors font-medium text-sm"
              >
                确认解绑
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
