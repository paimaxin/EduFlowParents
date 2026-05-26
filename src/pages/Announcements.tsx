import { motion } from "motion/react";
import { PageType } from "../types";
import { Megaphone, Calendar } from "lucide-react";

export function Announcements({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface flex flex-col"
    >
      <div className="flex flex-col gap-6">
        {/* Current Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-headline-sm text-on-surface mb-3 flex items-center gap-2">
            最新公告
          </h2>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-title-md text-on-surface">
                关于2023-2024学年春季学期期中考试安排的通知
              </h3>
              <span className="font-label-sm text-on-surface-variant bg-surface-container py-1 px-2 rounded-md shrink-0 ml-2 text-xs">
                昨天
              </span>
            </div>
            <div className="prose prose-sm prose-p:text-on-surface-variant font-body-md">
              <p>各位老师、同学：</p>
              <p>
                根据学校教学工作总体安排，现将本学期期中考试相关事宜通知如下，请大家提前做好准备工作与复习规划。
              </p>
              <p>一、考试时间：5月10日-5月12日。</p>
              <p>
                二、考试科目及范围：请参照教务处昨天发放的《期中考试安排表》。
              </p>
              <p>
                三、相关要求：请同学们诚信考试，带齐必要的文具。考试期间禁止交头接耳，如有违纪行为将严肃处理。
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-surface-variant text-on-surface-variant font-label-sm">
              <Calendar className="w-4 h-4" />
              <span>教务处发布于 2026-05-25</span>
            </div>
          </div>
        </motion.div>

        {/* Historical Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-headline-sm text-on-surface mb-3 mt-4">
            历史公告
          </h2>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-title-md text-on-surface">
                  校园春季运动会报名通知
                </h3>
                <span className="font-label-sm text-on-surface-variant shrink-0 ml-2 text-xs">
                  2026-05-18
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-3">
                一年一度的校园春季运动会即将到来，请各班体育委员尽快统计参赛人员名单，于本周五前上报。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-title-md text-on-surface">
                  图书馆开放时间调整
                </h3>
                <span className="font-label-sm text-on-surface-variant shrink-0 ml-2 text-xs">
                  2026-05-11
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-3">
                因天气渐暖，自下周一起，图书馆晚间开放时间将延长至21:30，请大家合理安排学习时间。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
