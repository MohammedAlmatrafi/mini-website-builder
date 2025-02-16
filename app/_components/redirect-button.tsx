"use client";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

interface RedirectButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({
  href,
  children,
  className = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        `px-6 py-1 rounded-full bg-gradient-to-r from-rekaz-100 to-rekaz-200 text-white text-2xl duration-75 hover:opacity-90 active:scale-95`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default RedirectButton;
