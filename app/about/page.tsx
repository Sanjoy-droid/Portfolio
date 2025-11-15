import React from "react";
import { Code2, Brain, Rocket, Mail, Github, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Shadcn UI",
        "Context API",
      ],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "REST APIs"],
    },
    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "Clerk Auth",
        "UploadThing",
        "Google Gemini API",
      ],
    },
  ];

  return (
    <section className="pt-20 md:py-20 bg-[#0a0b10] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(96,101,162,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(96,101,162,0.25)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(122,128,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(122,128,191,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10] via-transparent to-[#0a0b10] opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,103,238,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(102,142,238,0.08)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        {/* Hero Section */}
        <div className="mb-16 text-center  max-w-4xl mx-auto mt-12">
          <h1 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500   bg-clip-text text-4xl md:text-4xl font-bold text-transparent">
            About Me
          </h1>

          <p className="mt-4 text-gray-400">
            Passionate web developer with a focus on creating beautiful,
            functional, and user-friendly applications. I love turning complex
            problems into simple, elegant solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skillSet) => (
              <div
                key={skillSet.category}
                className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">About</h2>
          </div>
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-8">
            <div className="space-y-5 text-gray-300">
              <p className="leading-relaxed">
                Hello! I&apos;m{" "}
                <span className="text-purple-400 font-medium">Sanjoy </span>, a
                frontend developer specializing in building modern,
                high-performance web applications with{" "}
                <span className="text-blue-400">Next.js </span>
                and <span className="text-blue-400">React</span>. With
                professional experience at Lernn, I've developed a keen eye for
                creating responsive UI components that deliver exceptional user
                experiences.
              </p>
              <p className="leading-relaxed">
                As a developer who values both technical excellence and visual
                aesthetics, I focus on creating solutions that not only function
                flawlessly but also engage users through thoughtful design
                principles. My expertise in{" "}
                <span className="text-blue-400">Tailwind CSS</span> allows me to
                rapidly prototype and deliver polished interfaces that maintain
                consistency across platforms.
              </p>
              <p className="leading-relaxed">
                My approach to development emphasizes{" "}
                <span className="text-purple-400 font-medium">
                  performance optimization
                </span>{" "}
                and code quality. I've successfully refactored legacy codebases
                to improve load times by{" "}
                <span className="text-green-400 font-medium">30%</span>,
                demonstrating my commitment to creating efficient, scalable
                applications. Through implementing reusable component systems, I
                ensure maintainable codebases that can evolve with product
                requirements.
              </p>
              <p className="leading-relaxed">
                I'm particularly passionate about fullstack development, having
                built complex applications like{" "}
                <span className="text-blue-400">The Univillage</span> social
                media platform and{" "}
                <span className="text-blue-400">Brain Buddy AI</span> chatbot.
                These projects showcase my ability to integrate frontend
                interfaces with sophisticated backend functionality, from
                real-time updates to AI-powered features.
              </p>
              <p className="leading-relaxed">
                I believe in{" "}
                <span className="text-purple-400 font-medium">
                  continuous learning
                </span>{" "}
                and staying at the forefront of web technologies. I'm constantly
                expanding my skill set through practical implementation and
                challenging myself with projects that push the boundaries of
                what's possible on the web. I'm excited to collaborate on
                innovative projects that solve real-world problems through
                thoughtful, user-centered design and robust engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
