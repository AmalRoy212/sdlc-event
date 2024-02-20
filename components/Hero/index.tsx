import React from "react";
import Image from "next/image";
import Timer from "@/ui/sub/index/timer/Timer";
import Link from "next/link";
import Dsvg from "@/ui/sub/index/svgs/hero/Dsvg";
import Msvg from "@/ui/sub/index/svgs/hero/Msvg";

function Hero() {
  return (
    <div
      className="relative w-full h-full flex-reverse justify-center items-center"
    >
      <h1
        className="z-[2] flex w-full h-auto justify-center md:ml-[-2rem] items-center text-[70px] font-bold text-black relative"
        style={{ textShadow: "5px 5px 9px rgba(0, 0, 0, 1)" }}
      >
        <span className="bg-gradient-to-r from-white to-white rounded-2xl flex justify-center items-center z-[0] border border-gray-500">
          <span className="px-2" style={{color:"black"}}>SD</span>
          <span className="absolute w-[40px] z-[1] h-[40px] bg-black"></span>
          <Image
            className="z-[2]"
            src="/gifs/settings.gif"
            width={110}
            height={110}
            alt="img"
          />
          <span className="px-2" style={{color:"black"}}>LC</span>
        </span>
      </h1>
      <div className="z-[2] w-full h-auto p-10 flex justify-center">
        <Dsvg/>
        <Msvg/>
      </div>
      <div className="z-[2] w-full md:flex md:justify-center items-center p-2">
        <div className="md:w-1/2 w-full h-auto p-5">
          <Timer />
        </div>
        <div className="md:w-1/2 w-full h-auto p-5 md:text-center md:justify-center">
          <h5 className="text-slate-300 font-medium text-sm md:text-[17px] text-justify">
            Explore the world of Software Development Life Cycle (SDLC) at our
            upcoming event. Join us to learn about the systematic process from
            planning to deployment, ensuring efficient development and
            high-quality software. Don't miss out on this opportunity to connect
            with experts in the field. Stay tuned for details!
          </h5>
          <div className="py-2 my-4 md:my-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            <Link href={"/about-event"}>Learn More!</Link>
          </div>
        </div>
      </div>

      <div className="md:w-full h-full absolute top-[8rem] md:top-0 flex justify-center items-center z-[-10]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/videos/bg-vido.mp4/"
        />
      </div>
      {/* <div className="md:w-[50%]  h-[50%] absolute top-[25rem] left-[-20rem] md:top-[20%] md:left-[50%] justify-center items-center z-[-10] transform md:rotate-90">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/videos/bg-vid-2.mp4/"
        />
      </div> */}
    </div>
  );
}

export default Hero;
