import { ReactNode } from "react";

export function Toast({
  title,
  message,
  image,
  time,
}: {
  title: string;
  message: ReactNode;
  image: string;
  time: string;
}) {
  return (
    <div className="flex justify-end w-full px-3 py-3 select-none">
      <div className="shadowZ absolute flex-shrink-0 w-[346px] h-[75px] rounded-[0.625rem] bg-white p-5"></div>
      <div className="absolute z-50 alert_backing flex-shrink-0 rounded-[0.625rem] w-[346px] h-[75px]  bg-[#f6f6f6]/[.50] p-3">
        <div className="flex justify-end items-center absolute right-0 pr-2">
          <span className="text-xs font-light text-neutral-950">{time}</span>
        </div>
        <div className="inline-flex space-x-2 items-center ">
          <img src={image} className="w-10 h-10" />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-black/80">{title}</p>
            <span className="text-xs font-normal text-black/60">{message}</span>
          </div>
        </div>
      </div>
      <div className="inner_shadow flex-shrink-0 rounded-[0.625rem] bg-black/0" />
      <div className="flex flex-shrink-0 justify-center items-center w-5 h-5"></div>
    </div>
  );
}
