import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { PageType } from "../types";

export function About({ setPage }: { setPage: (page: PageType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-[100px] pt-[72px] md:pt-[100px] px-4 md:px-margin-page max-w-3xl mx-auto w-full min-h-screen bg-surface flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white mt-12 mb-6 shadow-md">
        <GraduationCap className="w-12 h-12" />
      </div>

      <h2 className="font-display-sm text-on-surface mb-2">知流 EduFlow</h2>
      <p className="font-body-md text-on-surface-variant mb-10">版本 2.4.1</p>


    </motion.div>
  );
}
