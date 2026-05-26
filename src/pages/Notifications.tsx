import { motion } from 'motion/react';
import { PageType } from '../types';
import { Bell, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Notifications({ setPage }: { setPage: (page: PageType) => void }) {
  const [settings, setSettings] = useState({
    homework: true,
    exam: true,
    system: false,
    tutoring: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface"
    >
      <div className="flex flex-col gap-6">
        <section className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col">
          <div className="p-5 flex items-center justify-between border-b border-surface-variant/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-body-lg font-medium">作业与背诵提醒</h4>
                <p className="font-label-sm text-on-surface-variant mt-0.5">每日作业发布及背诵任务完成情况提醒</p>
              </div>
            </div>
            <ToggleSwitch active={settings.homework} onClick={() => toggleSetting('homework')} />
          </div>

          <div className="p-5 flex items-center justify-between border-b border-surface-variant/30">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#018B8D]/10 flex items-center justify-center text-[#018B8D]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-body-lg font-medium">成绩与考试通知</h4>
                <p className="font-label-sm text-on-surface-variant mt-0.5">月考、期中、期末成绩单发布提醒</p>
              </div>
            </div>
            <ToggleSwitch active={settings.exam} onClick={() => toggleSetting('exam')} />
          </div>

          <div className="p-5 flex items-center justify-between border-b border-surface-variant/30">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F9D46C]/20 flex items-center justify-center text-[#E5B520]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-body-lg font-medium">个辅推题与答疑</h4>
                <p className="font-label-sm text-on-surface-variant mt-0.5">教师发布推题或回复答疑时的消息</p>
              </div>
            </div>
            <ToggleSwitch active={settings.tutoring} onClick={() => toggleSetting('tutoring')} />
          </div>

          <div className="p-5 flex items-center justify-between">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-variant/30 flex items-center justify-center text-on-surface-variant">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-body-lg font-medium">系统通知</h4>
                <p className="font-label-sm text-on-surface-variant mt-0.5">产品更新、活动及维护相关通知</p>
              </div>
            </div>
            <ToggleSwitch active={settings.system} onClick={() => toggleSetting('system')} />
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function ToggleSwitch({ active, onClick }: { active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${active ? 'bg-primary' : 'bg-surface-variant'}`}
    >
      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 ease-in-out ${active ? 'translate-x-6' : 'translate-x-0'}`} />
    </div>
  );
}
