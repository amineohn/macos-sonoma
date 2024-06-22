import { ButtonHTMLAttributes } from "react";

interface LaunchPadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  image: string;
  label: string;
}
export function Button({
  index,
  image,
  label,
  ...props
}: LaunchPadButtonProps) {
  return (
    <button {...props} key={index} className="flex flex-col items-center">
      <img src={`/static/images/${image}`} className="w-16 h-16" />
      <span className="text-white text-xs font-medium mt-2">{label}</span>
    </button>
  );
}
