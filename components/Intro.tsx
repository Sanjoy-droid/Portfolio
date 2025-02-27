"use client"
import React from "react";

import Image from "next/image";
import authorImage from "@/public/images/authors/dp.jpeg";
import Link from "next/link";
import BlurText from "@/app/uiComponents/BlurText";
import ShinyText from "@/app/uiComponents/ShinyText";



const page = () => {


  return (
    <section className="container px-4 py-12 md:mx-24 md:py-12 ">

      <div className="flex flex-col items-center  gap-8 md:flex-row md:gap-16 ">
        {/* Image Container with subtle animations and effects */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-40"></div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border-2 border-gray-800 transition duration-300 group-hover:border-blue-500">
              <Image
                src={authorImage}
                alt="Sanjoy Guin"
                width={250}
                height={250}
                priority
                className="rounded-lg transition duration-300 group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>
            <div className="absolute -left-4 -top-4 -z-10 h-20 w-20 rounded-full bg-purple-500/10 blur-xl"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-wide text-blue-500 ml-4">
              Welcome to my portfolio
            </h2>
            <h1 className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-4xl font-bold  md:text-5xl flex justify-center items-center">
              <BlurText
                text="
            Hey, I&#39;m Sanjoy.
             "
                className=""
                delay={150}
                animateBy="words"
                direction="top"
              />
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            I&#39;m a FullStack Software Engineer passionate about building
            exceptional digital experiences. I&#39;m eager to learn new
            technologies and share knowledge with others.
          </p>

          {/* Skills badges */}

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "Tailwind",
              "MongoDB",
              "ExpressJS",
              "REST APIs",
              "Git",
              "Github",
              "Tmux",
              "NeoVim",
              "Linux",
              "Bootstrap",
              "Postman",
            ].map((skill) => (
              <ShinyText
                key={skill}
                text={skill}
                disabled={false}
                speed={1}
                className="rounded-full border border-gray-700/50 bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 px-3 py-1 text-sm text-gray-300 transition-all duration-500 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-800/50 hover:via-blue-700/50 hover:to-blue-800/50 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-center md:justify-start md:pl-16 ">
        <Link href="/work">

          <button className="transform rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-white transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-600">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default page;
