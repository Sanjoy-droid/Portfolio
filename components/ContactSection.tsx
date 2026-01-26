"use client";
import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative px-4 py-10 md:py-16">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center  max-w-4xl mx-auto space-y-4">
          <h1 className="bg-gradient-to-r from-indigo-500 to-purple-500  bg-clip-text text-4xl sm:text-3xl md:text-4xl font-bold text-transparent">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-gray-400 px-4 md:px-0">
            I&apos;m always open to discussing new projects and opportunities.
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="w-full max-w-sm sm:max-w-md">
            <div className="rounded-2xl border border-purple-500/50 bg-gray-900/50 p-4 sm:p-6 transition-all duration-300">
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-gray-300">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:guinsanjoy34@gmail.com"
                  className="flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-purple-400"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-indigo-500 text-sm sm:text-base break-all">
                    guinsanjoy34@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3 pt-4">
                  <a
                    href="https://github.com/Sanjoy-droid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjoy-kumar-guin-bb3153343/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://x.com/Sanjoy_droid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
