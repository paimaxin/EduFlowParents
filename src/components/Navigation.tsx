import { motion } from "motion/react";
import {
  House,
  LayoutDashboard,
  MessageCircle,
  UserRound,
  GraduationCap,
} from "lucide-react";
import { PageType } from "../types";
import { cn } from "../lib/utils";

interface NavigationProps {
  currentPage: PageType;
  setPage: (page: PageType) => void;
}

export function Navigation({ currentPage, setPage }: NavigationProps) {
  const getNavItems = () => [
    { id: "home", label: "主页", icon: House, basePage: "home" },
    {
      id: "analytics",
      label: "学情",
      icon: LayoutDashboard,
      basePage: "analytics",
    },
    {
      id: "messages",
      label: "信息",
      icon: MessageCircle,
      basePage: "messages",
    },
    { id: "profile", label: "我的", icon: UserRound, basePage: "profile" },
  ];

  const items = getNavItems();

  // A helper to decide if an item is active. Since 'exam-results' and 'tutoring-records'
  // belong to 'analytics', we group them.
  const isActive = (itemPage: string) => {
    if (
      itemPage === "analytics" &&
      (currentPage === "exam-results" || currentPage === "tutoring-records")
    ) {
      return true;
    }
    return currentPage === itemPage;
  };

  return (
    <>
      {/* Mobile Bottom Bar - Acrylic frosted glass, icon only, solid icons */}
      <motion.nav
        layoutId="bottom-bar"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 flex justify-around items-center py-2.5 px-4 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      >
        {items.map((item) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPage(item.id as PageType)}
            className={cn(
              "flex flex-col items-center justify-center active:scale-95 transition-transform w-[48px] h-[48px] group relative rounded-full",
              isActive(item.id)
                ? "text-primary"
                : "text-outline/70 hover:text-on-surface-variant",
            )}
          >
            <div className="flex items-center justify-center w-full h-full rounded-full transition-all duration-300 relative">
              {item.id === "messages" && (
                <span className="absolute top-[8px] right-[10px] w-2.5 h-2.5 rounded-full bg-error border-2 border-white/80 z-10"></span>
              )}
              <item.icon
                className={cn(
                  "w-6 h-6 transition-all duration-300",
                  isActive(item.id) && "scale-110",
                )}
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
          </motion.button>
        ))}
      </motion.nav>
    </>
  );
}
