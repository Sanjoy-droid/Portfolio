import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 0,
    title: "The Univillage",
    description:
      "FullStack Social Media App builth with Nextjs, Postgres, Prisma, Shadcn, Clerk.",
    tags: [
      "NextJS",
      "TypeScript",
      "Prisma",
      "Postgres",
      "Shadcn",
      "Clerk",
      "Tailwind",
    ],
    image: "/images/projects/project-0.png",
    github: "https://github.com/Sanjoy-droid/TheUnivillage",
    demo: "https://the-univillage.vercel.app/",
  },
  {
    id: 1,
    title: "Web Wisdom AI",
    description: "AI-Powered Contextual Chat for Websites.",
    tags: ["NextJS", "TypeScript", "Tailwind", "Rag-Chat", "Upstash", "Redis"],
    image: "/images/projects/project-1.png",
    github: "https://github.com/Sanjoy-droid/Web-Wisdom",
    demo: "https://web-wisdom-taupe.vercel.app/",
  },
  {
    id: 2,
    title: "Zomato Clone",
    description:
      "A MERN stack project replicating key features of Zomato, including custom filters, bookmarking, and user authentication.",
    tags: ["ReactJS", "Javascript", "Tailwind", "MERN Stack"],
    image: "/images/projects/project-2.png",
    github: "https://github.com/Sanjoy-droid/Zomato-Clone-using-MERN-Stack",
    demo: "https://zomato-clone-using-mern-stack.vercel.app/",
  },
  {
    id: 3,
    title: "Brain Buddy",
    description:
      "Advanced AI chatbot. Powered by cutting-edge technology for human-like interactions.",
    tags: ["NextJS", "TypeScript", "Tailwind", "Gemini", "lucide-react"],
    image: "/images/projects/project-3.png",
    github: "https://github.com/Sanjoy-droid/Brain-Buddy-AI",
    demo: "https://brain-buddy-eight.vercel.app/",
  },

  {
    id: 4,
    title: "Reddit Clone",
    description:
      "A full-stack application resembling Reddit, facilitating user interaction through posting, voting to posts. Includes robust authentication, posting functionalities.",
    tags: ["ReactJS", "Javascript", "Tailwind", "MERN Stack"],
    image: "/images/projects/project-4.png",
    github: "https://github.com/Sanjoy-droid/Reddit-Clone-using-MERN-Stack",
    demo: "https://reddit-clone-using-mern-stack.vercel.app/",
  },

  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className="pt-20 md:py-20 bg-[#0a0b10] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(96,101,162,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(96,101,162,0.25)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(122,128,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(122,128,191,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10] via-transparent to-[#0a0b10] opacity-60 pointer-events-none"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,103,238,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(102,142,238,0.08)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-duration:10s] pointer-events-none"></div>
      <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse [animation-duration:15s] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 md:mb-16 text-center md:text-left md:max-w-4xl md:mx-auto lg:mx-0 lg:ml-8">
          <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent pt-6">
            Featured Works
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto md:mx-0">
            A collection of projects that showcase my skills and passion for
            building exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(
            (project) =>
              project && (
                <article
                  key={project?.id}
                  className="group relative overflow-hidden rounded-xl border-[0.5px] border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500 hover:bg-gray-900/80 h-full w-auto flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-52 md:h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col space-y-4 p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-400 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-700/50 bg-gray-800/50 px-2 py-1 text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors duration-300 hover:text-white"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors duration-300 hover:text-white"
                        aria-label={`Visit ${project.title} demo`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ),
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProjectSection;
