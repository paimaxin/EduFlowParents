import { motion } from 'motion/react';
import { PageType } from '../types';
import { UserRound } from 'lucide-react';

export function BindChild({ setPage }: { setPage: (page: PageType) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-surface flex flex-col p-6"
    >
      <div className="w-full max-w-sm mx-auto flex flex-col gap-8 pt-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-display-lg text-on-surface font-bold tracking-tight">绑定学生</h1>
          <p className="text-on-surface-variant font-body-md mt-1">请输入您孩子的姓名以查看学情</p>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-label-md text-on-surface-variant px-1">学生姓名</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                <UserRound className="w-5 h-5 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="例如：李奕辰"
                className="w-full bg-surface-container-lowest border border-surface-container-highest/50 px-4 py-4 pl-[46px] rounded-[20px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[17px] shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button 
              onClick={() => setPage('home')}
              className="w-full bg-primary hover:bg-primary/90 text-white active:scale-95 transition-all duration-300 py-4 rounded-full font-bold text-[17px] shadow-[0_8px_24px_rgba(0,102,255,0.2)]"
            >
              确认绑定
            </button>
            
            <button 
              onClick={() => setPage('home')}
              className="w-full text-on-surface-variant hover:text-on-surface active:scale-95 transition-all duration-300 py-3 rounded-full font-label-md text-[15px]"
            >
              跳过，直接进入（演示）
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
