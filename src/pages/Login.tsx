import { motion, AnimatePresence } from 'motion/react';
import { PageType } from '../types';
import { MessageCircle, GraduationCap, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export function Login({ setPage }: { setPage: (page: PageType) => void }) {
  const [loginMethod, setLoginMethod] = useState<'wechat' | 'account'>('wechat');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-8">
        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-2">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <GraduationCap className="w-10 h-10" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-display-lg text-on-surface font-bold tracking-tight">知流 EduFlow</h1>
          <p className="text-on-surface-variant font-body-md">洞悉学情，见证成长</p>
        </div>

        <div className="w-full mt-12 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {loginMethod === 'wechat' ? (
              <motion.div
                key="wechat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col gap-4 w-full"
              >
                <button 
                  onClick={() => setPage('bind-child')}
                  className="w-full bg-[#07C160] hover:bg-[#06ad56] text-white active:scale-95 transition-all duration-300 py-4 rounded-full flex items-center justify-center gap-2 font-bold text-lg shadow-[0_8px_24px_rgba(7,193,96,0.25)]"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  微信授权一键登录
                </button>
                <button 
                  onClick={() => setLoginMethod('account')}
                  className="text-primary font-body-md py-2 hover:underline"
                >
                  账号密码登录
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="account"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-4 w-full"
              >
                <input 
                  type="text" 
                  placeholder="请输入账号 / ID" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                />
                <input 
                  type="password" 
                  placeholder="请输入密码" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                />
                <button 
                  onClick={() => setPage('bind-child')}
                  className="w-full bg-primary hover:bg-primary/90 text-white active:scale-95 transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-md mt-2"
                >
                  登录
                </button>
                <button 
                  onClick={() => setLoginMethod('wechat')}
                  className="flex items-center justify-center text-on-surface-variant font-body-md py-2 hover:text-on-surface mt-2 gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> 返回微信登录
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-on-surface-variant/60 text-[13px] mt-6">
            登录即代表同意 <button className="text-primary hover:underline">用户协议</button> 和 <button className="text-primary hover:underline">隐私政策</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
