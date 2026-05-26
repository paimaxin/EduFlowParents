import { motion } from "motion/react";
import {
  Trophy,
  ArrowUp,
  ArrowDown,
  Activity,
  Clock,
  Star,
} from "lucide-react";
import { PageType } from "../types";

export function GroupScores({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  const rankings = [
    { rank: 1, name: "理科燎原组", score: 1450, trend: "up", change: 45 },
    { rank: 2, name: "文科星火组", score: 1285, trend: "up", change: 120 },
    { rank: 3, name: "卓越先锋组", score: 1190, trend: "down", change: -15 },
    { rank: 4, name: "火箭冲刺组", score: 1050, trend: "up", change: 80 },
    { rank: 5, name: "潜力新星组", score: 980, trend: "up", change: 20 },
  ];

  const history = [
    {
      id: 1,
      type: "加分",
      reason: "历史课堂表现积极",
      amount: "+15",
      time: "今天 14:30",
      subject: "历史",
    },
    {
      id: 2,
      type: "加分",
      reason: "全组英语听写全对",
      amount: "+50",
      time: "今天 10:15",
      subject: "英语",
    },
    {
      id: 3,
      type: "减分",
      reason: "晚自习纪律扣分",
      amount: "-10",
      time: "昨天 20:00",
      subject: "德育",
    },
    {
      id: 4,
      type: "加分",
      reason: "数学作业优秀率第一",
      amount: "+35",
      time: "昨天 15:40",
      subject: "数学",
    },
    {
      id: 5,
      type: "加分",
      reason: "语文阅读分享",
      amount: "+30",
      time: "周三 09:20",
      subject: "语文",
    },
  ];

  return (
    <div className="pb-[100px]">
      <div className="pt-[72px] md:pt-12 px-4 md:px-margin-page max-w-3xl mx-auto w-full flex flex-col gap-6">
        {/* Current Info Card */}
        <section className="w-full">
          <motion.div
            layoutId="group-score-card"
            className="relative w-full rounded-[20px] bg-primary/5 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-xl p-5 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] pointer-events-none"></div>
            <motion.div
              layoutId="group-score-card-bg"
              className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"
            ></motion.div>

            <div className="relative z-10 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                  <motion.div
                    layoutId="group-score-card-icon"
                    className="w-6 h-6 rounded-full bg-[#F9D46C] flex items-center justify-center shadow-sm"
                  >
                    <Star className="w-3.5 h-3.5 text-[#1a1b1f] fill-[#1a1b1f]" />
                  </motion.div>
                  <motion.span layoutId="group-score-card-title">
                    文科星火组
                  </motion.span>
                </h3>
                <motion.span
                  layoutId="group-score-card-badge"
                  className="font-label-sm text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                >
                  排名 #2
                </motion.span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <motion.span
                  layoutId="group-score-card-score"
                  className="font-display-lg text-[44px] leading-none text-primary font-bold tracking-tighter"
                >
                  1,285
                </motion.span>
                <div className="flex items-center font-display-lg text-[44px] leading-none font-bold text-[#6ECC54] tracking-tighter">
                  <motion.div layoutId="group-score-card-trend-icon">
                    <ArrowUp className="w-8 h-8 mr-1 stroke-[4px]" />
                  </motion.div>
                  <motion.span layoutId="group-score-card-trend">
                    120
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Rankings Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-[#F9D46C] fill-[#F9D46C]" />
              <h2 className="font-headline-sm text-on-surface">班级积分排行</h2>
            </div>

            <div className="bg-surface-container-lowest rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-surface-variant/50 overflow-hidden">
              {rankings.map((group, index) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center px-5 py-4 ${
                    index !== rankings.length - 1
                      ? "border-b border-surface-variant/50"
                      : ""
                  } ${group.name === "文科星火组" ? "bg-primary/5" : ""}`}
                >
                  <div className="w-8 font-display-sm text-on-surface-variant font-bold text-lg">
                    {group.rank}
                  </div>
                  <div className="flex-1 font-title-md text-on-surface">
                    {group.name}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-label-md w-12 text-right flex items-center justify-end">
                      {group.trend === "up" ? (
                        <span className="text-[#6ECC54] flex items-center bg-[#6ECC54]/10 px-1.5 py-0.5 rounded-md">
                          <ArrowUp className="w-3 h-3 mr-0.5" />
                          {group.change}
                        </span>
                      ) : (
                        <span className="text-error flex items-center bg-error/10 px-1.5 py-0.5 rounded-md">
                          <ArrowDown className="w-3 h-3 mr-0.5" />
                          {Math.abs(group.change)}
                        </span>
                      )}
                    </div>
                    <div className="font-title-md text-primary font-bold w-14 text-right">
                      {group.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* History Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="font-headline-sm text-on-surface">本周分数流水</h2>
            </div>

            <div className="relative pl-3">
              {/* Timeline line */}
              <div className="absolute top-2 bottom-4 left-[23px] w-0.5 bg-surface-variant/30"></div>

              <div className="flex flex-col gap-5">
                {history.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative flex gap-4 pr-1"
                  >
                    <div className="flex flex-col items-center mt-1 z-10 shrink-0">
                      <div
                        className={`w-[22px] h-[22px] rounded-full border-[3px] border-surface flex items-center justify-center ${
                          item.type === "加分" ? "bg-[#6ECC54]" : "bg-error"
                        }`}
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex-1 bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-surface-variant/50">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">
                            {item.subject}
                          </span>
                          <h4 className="font-title-sm text-on-surface line-clamp-1">
                            {item.reason}
                          </h4>
                        </div>
                        <span
                          className={`font-title-md font-bold shrink-0 ml-2 ${
                            item.type === "加分"
                              ? "text-[#6ECC54]"
                              : "text-error"
                          }`}
                        >
                          {item.amount}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm mt-2">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
