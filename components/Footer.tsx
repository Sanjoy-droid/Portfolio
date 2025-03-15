"use client";

import React, { useEffect, useState } from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { VscHome, VscCode, VscAccount, VscMail } from "react-icons/vsc";
import Dock from "../app/uiComponents/Dock";
import Link from "next/link";

const Footer = () => {
  // Add responsive state
  const [dockSize, setDockSize] = useState({
    panelHeight: 40,
    baseItemSize: 35,
    magnification: 45,
  });

  // Update dock size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile - smaller sizes
        setDockSize({
          panelHeight: 68,
          baseItemSize: 52,
          magnification: 62,
        });
      } else if (width < 768) {
        // Small tablets
        setDockSize({
          panelHeight: 56,
          baseItemSize: 38,
          magnification: 50,
        });
      } else {
        // Default for larger screens
        setDockSize({
          panelHeight: 40,
          baseItemSize: 35,
          magnification: 45,
        });
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define dock items with smaller icon sizes for better mobile display
  const dockItems = [
    {
      icon: (
        <Link href="/">
          <VscHome size={20} />
        </Link>
      ),
      label: "Home",
      onClick: () => {},
    },
    {
      icon: (
        <Link
          href="https://github.com/Sanjoy-droid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </Link>
      ),
      label: "GitHub",
      onClick: () => {},
    },
    {
      icon: (
        <Link
          href="https://twitter.com/sanjoy_droid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={20} />
        </Link>
      ),
      label: "Twitter",
      onClick: () => {},
    },
    {
      icon: (
        <Link
          href="https://www.linkedin.com/in/sanjoy-guin-bb3153343/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </Link>
      ),
      label: "Linkedin",
      onClick: () => {},
    },
    {
      icon: (
        <Link href="mailto:guinsanjoy34@gmail.com">
          <VscMail size={20} />
        </Link>
      ),
      label: "Contact",
      onClick: () => {},
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-hidden ">
        <div className="h-28 sm:h-32 md:h-36 lg:h-44  ">
          {/* Dock positioned at the bottom with responsive container */}
          <div className="absolute bottom-2 left-0 right-0 w-full flex justify-center px-20 ">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-white ">
              <Dock
                items={dockItems}
                panelHeight={dockSize.panelHeight}
                baseItemSize={dockSize.baseItemSize}
                magnification={dockSize.magnification}
                className=" border-none shadow-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright text positioned below the dock */}
      <div className="left-0 right-0 text-center flex justify-center items-center pb-4 h-16 bg-gray-950 ">
        <p className="text-sm text-muted-foreground text-white">
          &copy; {new Date().getFullYear()} Sanjoy Guin. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
