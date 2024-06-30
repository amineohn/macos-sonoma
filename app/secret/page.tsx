import { TbHomeFilled } from "react-icons/tb";
import { DiscordUser } from "~/app/components/features/discord-user";
import { NowPlaying } from "~/app/components/features/now-playing";
import { VerifyCode } from "~/app/components/features/verify-code";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <VerifyCode>
        <div className="absolute">
          <div className="px-5">
            <TbHomeFilled className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-center items-center my-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl">
              <NowPlaying />
            </div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl">
              <DiscordUser />
            </div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
            <Image
              alt={"maps"}
              src="/static/images/maps.png"
              className="col-span-3 rounded-xl ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-[97.4%] h-full hover:translate-y-4 hover:scale-95"
              width={3000}
              height={3000}
            />
          </div>
        </div>
      </VerifyCode>
    </>
  );
}
