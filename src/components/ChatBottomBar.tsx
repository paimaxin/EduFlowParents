import { motion } from "motion/react";
import { Image } from "lucide-react";

export function ChatBottomBar() {
  return (
    <motion.div
      layoutId="bottom-bar"
      className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 p-4 pb-8 z-20 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] rounded-t-[24px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex items-center gap-3 w-full max-w-3xl mx-auto"
      >
        <button className="text-on-surface-variant p-2 hover:bg-white/20 hover:text-primary rounded-xl transition-colors shrink-0">
          <Image className="w-6 h-6" />
        </button>
        <div className="flex-1 bg-surface-container-lowest/40 backdrop-blur-sm rounded-xl px-4 border border-outline-variant/30 focus-within:border-primary transition-colors flex items-center">
          <input
            type="text"
            placeholder="发送消息..."
            className="w-full bg-transparent border-none py-2.5 outline-none text-on-surface"
          />
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold transition-colors shadow-sm shrink-0">
          发送
        </button>
      </motion.div>
    </motion.div>
  );
}
