import React from "react";

import Image from "next/image";
import authorImage from "@/public/images/authors/dp.jpeg";
import Link from "next/link";

const page = () => {
  return (
    <section className="container ml-16 px-4 py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
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
            <h2 className="text-sm font-medium uppercase tracking-wide text-blue-500">
              Welcome to my portfolio
            </h2>
            <h1 className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Hey, I&#39;m Sanjoy.
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
              "MERN",
              "Git",
              "Github",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-1 text-sm text-gray-300 transition duration-300 hover:border-blue-500/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Link href="/work">
          <button className="transform rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-white transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-600 mx-16">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default page;
