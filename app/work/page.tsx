import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "Brain Buddy",
    description:
      "Advanced AI chatbot. Powered by cutting-edge technology for human-like interactions.",
    tags: ["NextJS", "TypeScript", "Tailwind", "Gemini", "lucide-react"],
    image: "/images/projects/project-0.png",
    github: "https://github.com/Sanjoy-droid/Brain-Buddy-AI",
    demo: "https://brain-buddy-eight.vercel.app/",
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
    title: "Reddit Clone",
    description:
      "A full-stack application resembling Reddit, facilitating user interaction through posting, voting to posts. Includes robust authentication, posting functionalities.",
    tags: ["ReactJS", "Javascript", "Tailwind", "MERN Stack"],
    image: "/images/projects/project-4.png",
    github: "https://github.com/Sanjoy-droid/Reddit-Clone-using-MERN-Stack",
    demo: "https://reddit-clone-using-mern-stack.vercel.app/",
  },
  {
    id: 4,
    title: "Crowd Nest",
    description:
      "A crowdfunding initiative dedicated to tree plantation projects aims to combat climate change and promote environmental sustainability by supporting reforestation, urban greening, and community-driven afforestation efforts.",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    image: "/images/projects/project-5.png",
    github: "https://github.com/Sanjoy-droid/CrowdNest",
    demo: "https://github.com/Sanjoy-droid/CrowdNest",
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
