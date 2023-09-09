import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

interface PageItemWrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
  index?: number;
  active?: boolean;
}

export const PageItemWrapper = ({
  onClick,
  children,
  index,
  active,
}: PageItemWrapperProps) => {
  return (
    <div className="relative">
      {index !== undefined && (
        <span className="absolute top-0 right-full pr-2 font-mono text-xs text-slate-400">
          {index + 1}
        </span>
      )}
      <button
        onClick={onClick}
        className={twMerge(
          clsx(
            "w-full aspect-video rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:ring-4 hover:ring-blue-50",
            active && "border-blue-300 ring-4 ring-blue-50"
          )
        )}
      >
        {children}
      </button>
    </div>
  );
};
