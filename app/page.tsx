import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./components/loadingscreen"), {
  ssr: false,
});
const MainContent = dynamic(() => import("./components/main-content"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <MainContent />
    </>
  );
}
