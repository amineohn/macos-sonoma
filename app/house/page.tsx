import { TbHomeFilled } from "react-icons/tb";

export default function Page() {
  return (
    <>
      <div className="absolute">
        <div className="px-5">
          <TbHomeFilled className="w-6 h-6" />
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-56 h-56 rounded-xl"></div>
          <div className="col-span-3 bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-full h-48 rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
