import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Edit2,
  PlusCircle,
  Bell,
  Shield,
  Info,
  ChevronRight,
  User,
  CheckCircle2,
  ChevronRightCircle,
  Moon,
  Sun,
  MonitorSmartphone,
} from "lucide-react";

import { PageType } from "../types";
import { useTheme, ThemeMode } from "../components/ThemeProvider";

export function Profile({ setPage }: { setPage: (page: PageType) => void }) {
  const { theme, setTheme } = useTheme();
  const [showThemeSheet, setShowThemeSheet] = useState(false);
  const [students, setStudents] = useState([
    { id: "1", name: "李奕辰", grade: "高二 (3) 班", avatar: "辰" },
  ]);
  const [selectedStudentId, setSelectedStudentId] = useState("1");
  const [showBindDialog, setShowBindDialog] = useState(false);
  const [bindInput, setBindInput] = useState("");

  const handleBind = () => {
    if (bindInput.trim()) {
      setStudents([
        ...students,
        {
          id: Date.now().toString(),
          name: bindInput.trim(),
          grade: "高一 (1) 班",
          avatar: bindInput.trim()[0],
        },
      ]);
      setBindInput("");
      setShowBindDialog(false);
    }
  };

  const getThemeText = (mode: ThemeMode) => {
    switch(mode) {
      case 'light': return '浅色模式';
      case 'dark': return '深色模式';
      case 'system': return '跟随系统';
    }
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId);
  const parentName = selectedStudent ? `${selectedStudent.name}家长` : "家长";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-[72px] md:pt-12 px-4 md:px-margin-page max-w-4xl mx-auto w-full pb-[100px]"
    >
      <section className="glass-panel rounded-[24px] py-6 px-4 mb-4 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-surface-container-high flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-white text-on-surface-variant">
          <User className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h2 className="font-headline-md text-on-surface mb-1">{parentName}</h2>
          <p className="font-body-md text-on-surface-variant">ID: 20230102</p>
        </div>
      </section>

      <h3 className="font-headline-sm text-on-surface mb-3 px-2">关联学生</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {students.map((student) => {
          const isSelected = selectedStudentId === student.id;
          return (
            <div
              key={student.id}
              onClick={() => setSelectedStudentId(student.id)}
              className={`glass-panel rounded-[20px] p-4 flex items-center justify-between cursor-pointer transition-all border-2 ${isSelected ? "border-primary shadow-sm bg-primary/5" : "border-transparent hover:bg-white/80"}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}
                >
                  {student.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-body-lg font-medium">{student.name}</h4>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <p className="font-label-sm text-on-surface-variant">
                    {student.grade}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPage("student-details");
                }}
                className="px-3 py-1.5 text-primary bg-primary/5 hover:bg-primary/10 rounded-full transition-colors flex items-center gap-1 font-bold"
              >
                <span className="text-xs font-label-sm">详情</span>
                <ChevronRightCircle className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        <div
          onClick={() => setShowBindDialog(true)}
          className="rounded-[20px] p-5 flex items-center justify-center gap-2 text-primary cursor-pointer border-dashed border-2 border-primary/20 hover:border-primary/50 transition-colors bg-surface-container-lowest/50"
        >
          <PlusCircle className="w-5 h-5" />
          <span className="font-body-md font-medium">添加关联学生</span>
        </div>
      </section>

      <h3 className="font-headline-sm text-on-surface mb-3 px-2">常用功能</h3>
      <section className="glass-panel rounded-[24px] overflow-hidden flex flex-col mb-6">
        <MenuItem
          icon={<Moon className="w-5 h-5 text-white" />}
          bg="bg-[#4c4aca]"
          title="系统主题"
          extra={
            <span className="font-label-sm text-outline-variant mr-2">
              {getThemeText(theme)}
            </span>
          }
          onClick={() => setShowThemeSheet(true)}
        />
        <MenuItem
          icon={<Bell className="w-5 h-5 text-[#1a1b1f]" />}
          bg="bg-[#F9D46C]"
          title="消息通知设置"
          onClick={() => setPage("notifications")}
        />
        <MenuItem
          icon={<Shield className="w-5 h-5 text-white" />}
          bg="bg-[#018B8D]"
          title="账号与安全"
          onClick={() => setPage("edit-profile")}
        />
        <MenuItem
          icon={<Info className="w-5 h-5 text-white" />}
          bg="bg-[#C8161D]"
          title="关于 EduFlow"
          extra={
            <span className="font-label-sm text-outline-variant mr-2">
              v2.4.1
            </span>
          }
          onClick={() => setPage("about")}
        />
      </section>

      <button
        onClick={() => setPage("login")}
        className="w-full py-4 rounded-[16px] bg-error/10 text-error font-body-lg font-medium hover:bg-error/20 transition-colors"
      >
        退出登录
      </button>

      {/* Bind Dialog */}
      <AnimatePresence>
        {showBindDialog && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowBindDialog(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-surface rounded-[24px] shadow-lg p-6 flex flex-col gap-5 z-10 mx-auto"
            >
              <h3 className="font-headline-sm text-on-surface text-center">
                添加关联学生
              </h3>
              <p className="text-on-surface-variant font-body-sm text-center">
                请输入学生的姓名或学号进行绑定
              </p>
              <input
                type="text"
                value={bindInput}
                onChange={(e) => setBindInput(e.target.value)}
                placeholder="例如：王小明 或 2024001"
                className="w-full bg-surface-container rounded-xl px-4 py-3 text-on-surface outline-none border border-transparent focus:border-primary transition-colors"
                autoFocus
              />
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setShowBindDialog(false)}
                  className="flex-1 py-3 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleBind}
                  className="flex-1 py-3 rounded-xl font-label-md bg-primary text-on-primary hover:opacity-90 transition-opacity disabled:opacity-50"
                  disabled={!bindInput.trim()}
                >
                  确认绑定
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Theme Selection Sheet */}
      <AnimatePresence>
        {showThemeSheet && (
          <div className="absolute inset-0 z-50 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThemeSheet(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative bg-surface rounded-t-[32px] pt-6 pb-12 px-6 shadow-[0_-8px_32px_rgba(0,0,0,0.1)] flex flex-col gap-4 z-10 mx-auto w-full max-w-3xl"
            >
              <div className="w-12 h-1.5 bg-outline-variant/30 rounded-full mx-auto mb-2"></div>
              <h3 className="font-headline-sm text-center mb-4">系统主题</h3>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => { setTheme('light'); setShowThemeSheet(false); }}
                  className={`flex items-center p-4 rounded-2xl transition-colors ${theme === 'light' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}`}
                >
                  <Sun className="w-6 h-6 mr-3" />
                  <span className="font-body-lg flex-1 text-left">浅色模式</span>
                  {theme === 'light' && <CheckCircle2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => { setTheme('dark'); setShowThemeSheet(false); }}
                  className={`flex items-center p-4 rounded-2xl transition-colors ${theme === 'dark' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}`}
                >
                  <Moon className="w-6 h-6 mr-3" />
                  <span className="font-body-lg flex-1 text-left">深色模式</span>
                  {theme === 'dark' && <CheckCircle2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => { setTheme('system'); setShowThemeSheet(false); }}
                  className={`flex items-center p-4 rounded-2xl transition-colors ${theme === 'system' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}`}
                >
                  <MonitorSmartphone className="w-6 h-6 mr-3" />
                  <span className="font-body-lg flex-1 text-left">跟随系统</span>
                  {theme === 'system' && <CheckCircle2 className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MenuItem({ icon, bg, title, extra, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-5 cursor-pointer hover:bg-white/40 group transition-colors"
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-sm transition-transform group-hover:scale-105 ${bg}`}
      >
        {icon}
      </div>
      <span className="font-body-lg flex-1">{title}</span>
      {extra}
      <ChevronRight className="w-5 h-5 text-outline-variant" />
    </div>
  );
}
