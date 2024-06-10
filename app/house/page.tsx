import { TbHomeFilled } from "react-icons/tb";
import { getCurrentPlaying } from "../actions/get-current-playing";

export default async function Page() {
  const data = await getCurrentPlaying();
  return (
    <>
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
            {data ? (
              <div className="absolute">
                <div>
                  <img
                    className="relative w-28 h-28"
                    src={data.albumImageUrl}
                  />
                  <p>Song: {data.title}</p>
                  <p>Artist: {data.artist}</p>
                </div>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <div className="bg-gray-50/30 ring-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-64 h-56 rounded-xl"></div>
          <img
            src="/static/images/maps.png"
            className="col-span-3 rounded-xl ing-2 hover:ring transition hover:ring-offset-2 ring-neutral-300/20 w-[97.4%] h-full  hover:translate-y-4 hover:scale-95"
          />
        </div>
      </div>
    </>
  );
}
