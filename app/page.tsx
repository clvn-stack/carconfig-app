import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="header flex justify-between items-center p-12 w-[1536px]">
          <div className="title font-bold text-2xl">Carmood</div>
          <div className="uppercase text-sm">stepper section here</div>
          <div className="uppercase text-sm">contact me</div>
        </div>
      </div>
      <main className="h-screen flex flex-col items-center justify-center">
        <Slider />
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-[1536px] flex justify-between items-center p-12">
          <div className="title font-bold text-2xl">Carmood</div>
          <div className="uppercase text-sm">color section here</div>
          <div className="uppercase text-sm">details here</div>
        </div>
      </div>
    </div>
  );
}
