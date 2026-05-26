import { GraduationCap, ChevronLeft } from "lucide-react";

interface TopAppBarProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function TopAppBar({
  title = "EduFlow",
  subtitle = "知流",
  showBack,
  onBack,
}: TopAppBarProps) {
  return (
    <header className="absolute top-0 w-full flex items-center justify-start px-5 h-14 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out">
      {showBack && (
        <button
          onClick={onBack}
          className="mr-2 text-primary active:scale-95 transition-transform p-1 -ml-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      <div className="flex items-center gap-1.5 text-primary">
        {!showBack && <GraduationCap className="w-6 h-6" strokeWidth={2.5} />}
        {title && (
          <h1 className="font-headline-md font-bold leading-none translate-y-[1px]">
            {title}
          </h1>
        )}
        <span className="font-headline-md font-bold leading-none translate-y-[1px]">
          {subtitle}
        </span>
      </div>
    </header>
  );
}
