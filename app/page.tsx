"use client"
import Intro from "../components/Intro";
import Waves from "@/app/uiComponents/Waves";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Waves
          lineColor="#390099"
          backgroundColor="#000000"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <section className="relative pt-32">

        <div className="container max-w-3xl">
          <Intro />
        </div>
      </section>

    </>
  );
}
