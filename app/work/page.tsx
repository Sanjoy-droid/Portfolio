// Portfolio/app/work/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Calendar,
  Briefcase,
  MapPin,
} from "lucide-react";
import Footer from "@/components/Footer";

const experiences = [
  {
    id: 0,
    title: "Front-End Developer",
    company: "Lernn",
    location: "Remote",
    period: "June 2025",
    companyUrl: "https://www.lernn.ai/",
    image: "/images/projects/ln-ai.png", // Add your Lernn company image
    description:
      "Building responsive, high-performance web applications for an innovative learning platform.",
    responsibilities: [
      "Developed and maintained responsive, high-performance UI components using Next.js, Tailwind CSS.",
      "Collaborated with backend developers to integrate REST APIs into the frontend.",
      "Refactored legacy code to improve performance and readability, reducing load time by 30%.",
      "Implemented reusable components and design systems to maintain UI consistency across the platform.",
    ],
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST API", "UI/UX"],
    type: "Full-time",
  },
  {
    id: 1,
    title: "Freelance Web Developer",
    company: "Portfolio Website",
    location: "Remote",
    period: "Sept 2025",
    companyUrl: "https://github.com/aleriado", // Add client project URL if available
    image: "/images/projects/al.png", // Add your project image
    description:
      "Delivered a custom portfolio website with modern design and seamless user experience.",
    responsibilities: [
      "Built a responsive portfolio website with Next.js showcasing client's work and achievements.",
      "Designed and implemented custom UI components matching client's brand identity.",
      "Optimized website performance achieving 95+ Lighthouse scores across all metrics.",
      "Deployed and maintained the application with continuous integration and monitoring.",
    ],
    tags: ["Next.js", "React", "Stripe", "MongoDB", "Vercel"],
    type: "Freelance",
  },
];

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
  /* {
    id: 1,
    title: "SocioCart",
    description:
      "SocioCart is a clean, modern e-commerce frontend built in Next.js using Tailwind and shadcn/ui. It uses the FakeStore API (no real backend, DB, or auth) and showcases advanced filtering, sorting, responsive UI, and a local-only cart — perfect as a portfolio-ready demo store.",
    tags: [
      "Next.js",
      "JavaScript",
      "Shadcn UI",
      "Tailwind CSS",
      "FakeStore API",
      "Lucide-React",
    ],
    image: "/images/projects/scart.png",
    github: "https://github.com/Sanjoy-droid/SocioCart",
    demo: "https://sociocart.vercel.app/",
    date: "May 25",
  }, */
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
    date: "June 25",
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
    title: "CleanPro",
    description:
      "A lightweight, conversion-focused Laundry Service landing page built on Next.js 15 and React 19, styled with TailwindCSS 4. The project leans on Turbopack for rapid iteration and minimal build times.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Lucide-React"],
    image: "/images/projects/cleanpro.png",
    github: "https://github.com/Sanjoy-droid/CleanPro",
    demo: "https://cleanpro-gamma.vercel.app/",
    date: "Jan 25",
  },
  {
    id: 4,
    title: "TreePro",
    description:
      "A clean, high-converting Tree Removal business landing page built with Next.js 15, React 19, and TailwindCSS 4. Designed for speed, SEO, and responsiveness using Turbopack for blazing-fast dev builds.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "lucide-react"],
    image: "/images/projects/tree.png",
    github: "https://github.com/Sanjoy-droid/TreePro",
    demo: "https://tree-removal-rust.vercel.app/",
    date: "Feb 25",
  },

  {
    id: 5,
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
        <section className="mb-16">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
              Professional Experience
            </h2>
            <p className="text-gray-400 mt-4">
              Building impactful digital solutions across various domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Company Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/50 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-indigo-300">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Link
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors duration-300 flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-4">
              Personal projects showcasing full-stack development expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col"
              >
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${project.title} demo`}
                />

                <div className="relative h-52 md:h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90" />
                </div>

                <div className="flex-grow flex flex-col p-5 md:p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-3 mb-4 flex-grow">
                    {project.description}
                  </p>

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

                  <div className="flex items-center gap-4 mt-auto pt-3 border-t border-gray-800/50">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 relative z-30"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">Code</span>
                    </Link>

                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 relative z-30"
                      aria-label={`Visit ${project.title} demo`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">Live Demo</span>
                    </Link>

                    <div className="bg-gray-900/80 text-xs font-medium text-slate-400 py-1 px-2 rounded-full border border-indigo-500/30 flex items-center ml-auto">
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
