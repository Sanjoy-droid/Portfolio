"use client";
import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 ">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative max-w-4xl lg:mx-4">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            I&apos;m always open to discussing new projects and opportunities.
            Have a project in mind or just want to chat? Feel free to reach out.
            {/* ;`, `&lsquo;`, `&#39;`, ; */}
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-8 md:col-span-2">
            <div className="w-72 px-16 rounded-2xl border border-gray-800/50 bg-gray-900/50 py-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:guinsanjoy34@gmail.com"
                  className="flex items-center pr-20 text-gray-400 transition-colors duration-300 hover:text-purple-400"
                >
                  <Mail className="h-5 w-5" />
                  <span>guinsanjoy34@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://github.com/Sanjoy-droid"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjoy-guin-bb3153343/"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/Sanjoy_droid"
                    className="rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className=" space-y-6 md:col-span-3 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-800/50 bg-gray-900/50 px-4 py-3 transition-all duration-300 placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-800/50 bg-gray-900/50 px-4 py-3 transition-all duration-300 placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-800/50 bg-gray-900/50 px-4 py-3 transition-all duration-300 placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-800/50 bg-gray-900/50 px-4 py-3 transition-all duration-300 placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
              />
            </div>
            <button
              type="submit"
              className="w-full transform rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:from-purple-600 hover:to-pink-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
