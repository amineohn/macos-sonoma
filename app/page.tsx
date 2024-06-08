import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./components/loadingscreen"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <div className="background">
        <LoadingScreen />
      </div>
    </>
  );
}
