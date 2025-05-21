// Portfolio/app/work/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Briefcase } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 0,
    title: "The Univillage",
    description:
      "FullStack Social Media App built with Next.js, Postgres, Prisma, and Shadcn. Implements real-time updates for interactions like likes, comments, and follows with seamless authentication using Clerk.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Shadcn",
      "Clerk",
      "Tailwind CSS",
    ],
    image: "/images/projects/project-0.png",
    github: "https://github.com/Sanjoy-droid/TheUnivillage",
    demo: "https://the-univillage.vercel.app/",
    date: "Mar 25",
  },
  {
    id: 1,
    title: "Brain Buddy AI",
    description:
      "Advanced AI chatbot built with Next.js and Tailwind CSS. Uses Google Gemini API for natural language understanding with seamless frontend and backend integration through Lucide-React.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Lucide-React",
    ],
    image: "/images/projects/project-3.png",
    github: "https://github.com/Sanjoy-droid/Brain-Buddy-AI",
    demo: "https://brain-buddy-eight.vercel.app/",
    date: "Mar 25",
  },
  {
    id: 2,
    title: "Zomato Clone",
    description:
      "A MERN stack application modeled after Zomato. Built with React and Context API for state management. Supports interactive UI components and REST-based backend integration.",
    tags: ["React", "Context API", "JavaScript", "MERN Stack", "Tailwind CSS"],
    image: "/images/projects/project-2.png",
    github: "https://github.com/Sanjoy-droid/Zomato-Clone-using-MERN-Stack",
    demo: "https://zomato-clone-using-mern-stack.vercel.app/",
    date: "Feb 25",
  },
  {
    id: 3,
    title: "Web Wisdom AI",
    description: "AI-Powered Contextual Chat for Websites.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RAG-Chat",
      "Upstash",
      "Redis",
    ],
    image: "/images/projects/project-1.png",
    github: "https://github.com/Sanjoy-droid/Web-Wisdom",
    demo: "https://web-wisdom-taupe.vercel.app/",
    date: "Jan 25",
  },
  {
    id: 4,
    title: "Reddit Clone",
    description:
      "A full-stack application resembling Reddit, facilitating user interaction through posting and voting. Includes robust authentication and content posting functionalities.",
    tags: ["React", "JavaScript", "Tailwind CSS", "MERN Stack"],
    image: "/images/projects/project-4.png",
    github: "https://github.com/Sanjoy-droid/Reddit-Clone-using-MERN-Stack",
    demo: "https://reddit-clone-using-mern-stack.vercel.app/",
    date: "Dec 24",
  },
];

const WorkPage = () => {
  return (
    <main className="min-h-screen bg-[#0a0b10] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(96,101,162,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(96,101,162,0.25)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(122,128,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(122,128,191,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10] via-transparent to-[#0a0b10] opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,103,238,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(102,142,238,0.08)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-duration:10s] pointer-events-none"></div>
      <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse [animation-duration:15s] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        {/* Experience Section */}
        <section className="mb-12">
          <div className="my-6 text-center md:text-left max-w-4xl mx-auto">
            <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500   bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
              Professional Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto md:mx-0 mt-3"></div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 md:p-8 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex flex-col mb-4">
              {/* First row: title + link + date */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                {/* Left side: title + link */}
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold text-white">
                    Front-End Developer
                  </h3>
                  <Link
                    href="https://wellfound.com/company/lernn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Visit https://wellfound.com/company/lernn demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>

                {/* Right side: date */}
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">April 2025 - Present</span>
                </div>
              </div>

              {/* Second row: company info */}
              <p className="text-indigo-400 font-medium mt-1">Lernn — Remote</p>
            </div>

            <ul className="space-y-3 mt-6">
              <li className="flex">
                <span className="text-indigo-400 mr-2">•</span>
                <p className="text-gray-300">
                  Developed and maintained responsive, high-performance UI
                  components using Next.js, Tailwind CSS.
                </p>
              </li>
              <li className="flex">
                <span className="text-indigo-400 mr-2">•</span>
                <p className="text-gray-300">
                  Collaborated with backend developers to integrate REST APIs
                  into the frontend.
                </p>
              </li>
              <li className="flex">
                <span className="text-indigo-400 mr-2">•</span>
                <p className="text-gray-300">
                  Refactored legacy code to improve performance and readability,
                  reducing load time by 30%.
                </p>
              </li>
              <li className="flex">
                <span className="text-indigo-400 mr-2">•</span>
                <p className="text-gray-300">
                  Implemented reusable components and design systems to maintain
                  UI consistency across the platform.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="mb-12 text-center md:text-left max-w-4xl mx-auto">
            <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500   bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
              Featured Projects
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto md:mx-0 mt-3"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto md:mx-0">
              A showcase of my technical expertise and passion for building
              exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-52 md:h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col p-5 md:p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-3 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 px-2.5 py-0.5 text-xs font-medium text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-3 border-t border-gray-800/50">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">Code</span>
                    </Link>

                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label={`Visit ${project.title} demo`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">Live Demo</span>
                    </Link>
                    {/* Date Badge */}
                    <div className=" bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-indigo-400 py-1 px-2 rounded-full border border-indigo-500/30 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default WorkPage;
