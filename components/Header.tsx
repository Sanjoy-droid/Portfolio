"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, Code2, Send, User2, CircleX } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (!mainElement) return;

    const handleScroll = () => {
      setScrolled(mainElement.scrollTop > 20);
    };

    mainElement.addEventListener("scroll", handleScroll);
    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, href: "/work", label: "Work", icon: Code2 },
    { id: 2, href: "/about", label: "About", icon: User2 },
    { id: 3, href: "/contact", label: "Contact", icon: Send },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-500text-white ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Gradient line at top */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />

      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-xl transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-80"
        }`}
      />

      {/* Main navigation */}
      <nav className="container relative mx-auto max-w-5xl px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative text-2xl font-bold">
            <span
              className="relative z-10 mx-24 
bg-gradient-to-r from-indigo-500 to-purple-500
              bg-clip-text text-transparent"
            >
              Portfolio
            </span>
            <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          {/* Desktop Navigation */}
          <div className="mx-24 hidden items-center gap-8 md:flex">
            {navItems.map(({ id, href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  className={`group relative px-3 py-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </div>
                  <div
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-700 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-white "
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-500  ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col gap-8">
            <button onClick={() => setIsOpen(!isOpen)} className=" md:hidden">
              <CircleX className=" size-[30px] text-red-600" />
            </button>
            {navItems.map(({ id, href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 text-2xl transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${isActive ? "text-purple-400" : ""}`}
                  />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
