import React from "react";
import Image from "next/image";
import Timer from "@/ui/sub/index/timer/Timer";
import Link from "next/link";
import Dsvg from "@/ui/sub/index/svgs/hero/Dsvg";
import Msvg from "@/ui/sub/index/svgs/hero/Msvg";

function Hero() {
  return (
    <div className="flex-reverse relative h-full w-full items-center justify-center">
      <h1
        className="relative z-[2] flex h-auto w-full items-center justify-center text-[70px] font-bold text-black md:ml-[-2rem]"
        style={{ textShadow: "5px 5px 9px rgba(0, 0, 0, 1)" }}
      >
        <span className="border-gray-500 z-[0] flex items-center justify-center rounded-2xl border bg-gradient-to-r from-white to-white">
          <span className="px-2" style={{ color: "black" }}>
            SD
          </span>
          <span className="absolute z-[1] h-[40px] w-[40px] bg-black"></span>
          <Image
            className="z-[2]"
            src="/gifs/settings.gif"
            width={110}
            height={110}
            alt="img"
          />
          <span className="px-2" style={{ color: "black" }}>
            LC
          </span>
        </span>
      </h1>
      <div className="z-[2] flex h-auto w-full justify-center p-10">
        <Dsvg />
        <Msvg />
      </div>
      <div className="z-[2] w-full items-center p-2 md:flex md:justify-center">
        <div className="h-auto w-full p-5 md:w-1/2">
          <Timer />
        </div>
        <div className="h-auto w-full p-5 md:w-1/2 md:justify-center md:text-center">
          <h5 className="text-slate-300 text-justify text-sm font-medium md:text-[17px]">
            Explore the world of Software Development Life Cycle (SDLC) at our
            upcoming event. Join us to learn about the systematic process from
            planning to deployment, ensuring efficient development and
            high-quality software. Don&apos;t miss out on this opportunity to
            connect with experts in the field. Stay tuned for details!
          </h5>
          <div className="button-primary my-4 max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white md:my-10">
            <Link href={"/about-event"}>Learn More!</Link>
          </div>
        </div>
      </div>

      <div className="absolute top-10 z-[-10] flex h-[100vh] items-center justify-center object-fill md:top-0 md:h-full md:w-full">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-auto w-full object-cover"
          src="/videos/bg-vido.mp4/"
        />
      </div>
      <div className="absolute top-[0] left-[-20rem]  z-[-10] flex h-[50%] transform items-center justify-center md:top-[20%] md:left-[50%] md:hidden md:w-[50%] md:rotate-90">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-auto w-full object-cover"
          src="/videos/bg-vid-2.mp4/"
        />
      </div>
    </div>
  );
}

export default Hero;
