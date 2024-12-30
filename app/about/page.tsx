"use client";
import React from "react";
import { Code2, Brain, Rocket, Mail, Github, Linkedin } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Github"],
    },
  ];

  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description:
        "Leading frontend development team, implementing modern web solutions using React and Next.js",
    },
    {
      period: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      description:
        "Developed and maintained full-stack applications using MERN stack",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 pt-24">
      {/* Hero Section */}
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
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

        <div className="mb-16">
          <div className="mb-8 flex items-center gap-2">
            <div className="min-h-screen bg-black px-4 pt-24">
              <div className="container mx-auto max-w-5xl">
                <div className="mb-16">
                  <div className="mb-8 flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-purple-400" />

                    <h2 className="text-2xl font-bold text-white">About</h2>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Hello! I&apos;m Sanjoy Guin, an enthusiastic web developer
                      at the beginning of my journey in the world of software
                      development. My passion for coding started when I first
                      discovered how a few lines of code could create something
                      meaningful on the web.
                    </p>
                    <p>
                      While I&apos;m new to the professional development world,
                      I&aos;ve been dedicating my tipme to building a strong
                      foundation in modern web technologies. I&apos;m
                      particularly fascinated by frontend development, where I
                      can combine my creative instincts with technical skills to
                      create engaging user experiences.
                    </p>
                    <p>
                      Currently, I&apos;m focused on mastering React and
                      Next.js, while also exploring the broader JavaScript
                      ecosystem. I spend my time building personal projects,
                      contributing to open-source when I can, and continuously
                      learning through online resources and coding challenges.
                    </p>
                    <p>
                      What excites me most about web development is the endless
                      opportunity to learn and grow. Every project is a new
                      chance to solve problems creatively and improve my skills.
                      I&apos;m eager to collaborate with others and contribute
                      to meaningful projects that make a difference.
                    </p>
                    <p>
                      When I&apos;m not coding, you can find me exploring new
                      web technologies, reading tech blogs, or participating in
                      coding communities. I believe in the power of community
                      learning and am always open to connecting with fellow
                      developers and learning from their experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
