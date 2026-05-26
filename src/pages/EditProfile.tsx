import { motion } from "motion/react";
import { PageType } from "../types";
import { User, Key, Save, ChevronLeft } from "lucide-react";

export function EditProfile({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface"
    >
      <div className="flex flex-col gap-6">
        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-on-surface flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> 修改账号
            </h3>
            <span className="font-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
              初始账号为您微信绑定的手机号
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-on-surface-variant">
              新账号
            </label>
            <input
              type="text"
              placeholder="请输入新的账号"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
          </div>

          <div className="flex justify-end mt-2">
            <button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 font-bold flex items-center gap-2 transition-colors">
              <Save className="w-4 h-4" /> 保存账号
            </button>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-on-surface flex items-center gap-2">
              <Key className="w-5 h-5 text-[#8AEA70]" /> 修改密码
            </h3>
            <span className="font-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
              初始密码为 123456
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-on-surface-variant">
              当前密码
            </label>
            <input
              type="password"
              placeholder="请输入当前密码"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-on-surface-variant">
              新密码
            </label>
            <input
              type="password"
              placeholder="请输入新密码"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-on-surface-variant">
              确认新密码
            </label>
            <input
              type="password"
              placeholder="请再次输入新密码"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
          </div>

          <div className="flex justify-end mt-2">
            <button className="bg-[#8AEA70] hover:bg-[#6ECC54] text-gray-900 rounded-xl px-6 py-2.5 font-bold flex items-center gap-2 transition-colors">
              <Save className="w-4 h-4" /> 保存密码
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
