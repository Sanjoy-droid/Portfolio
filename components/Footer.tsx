// "use client"
// import React, { useEffect, useState } from 'react';
// import { Github, Twitter, Linkedin } from 'lucide-react';
// import { VscHome, VscCode, VscAccount, VscMail } from "react-icons/vsc";
// import Dock from "../app/uiComponents/Dock";
// import Link from 'next/link';
//
// const Footer = () => {
//   // Add responsive state
//   const [dockSize, setDockSize] = useState({
//     panelHeight: 72,
//     baseItemSize: 48,
//     magnification: 64
//   });
//
//   // Update dock size based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         // Mobile
//         setDockSize({
//           panelHeight: 56,
//           baseItemSize: 36,
//           magnification: 52
//         });
//       } else if (width < 768) {
//         // Small tablets
//         setDockSize({
//           panelHeight: 64,
//           baseItemSize: 42,
//           magnification: 58
//         });
//       } else {
//         // Default for larger screens
//         setDockSize({
//           panelHeight: 72,
//           baseItemSize: 48,
//           magnification: 64
//         });
//       }
//     };
//
//     // Initial setup
//     handleResize();
//
//     // Add event listener
//     window.addEventListener('resize', handleResize);
//
//     // Clean up
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   // Define dock items with social links and additional navigation
//   const dockItems = [
//     {
//       icon:
//         <Link href="/">
//           <VscHome size={24} />
//         </Link>,
//       label: 'Home',
//       onClick: () => { }
//
//     },
//     {
//       icon: (
//         <Link href="/work">
//           <VscCode size={24} />
//         </Link>
//       ),
//       label: "Work",
//       onClick: () => { },
//     },
//     {
//       icon: (
//         <Link
//           href="https://github.com/Sanjoy-droid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Github size={24} />
//         </Link>
//       ),
//       label: 'GitHub',
//       onClick: () => { }
//
//     },
//     {
//       icon: (
//         <Link
//           href="https://twitter.com/sanjoy_droid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Twitter size={24} />
//         </Link>
//       ),
//       label: 'Twitter',
//       onClick: () => { }
//     },
//     {
//       icon: (
//         <Link
//           href="https://linkedin.com/in/sanjoy-guin-bb3153343"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Linkedin size={24} />
//         </Link>
//       ),
//       label: 'LinkedIn',
//       onClick: () => { }
//
//     },
//     {
//       icon:
//         <Link href="/contact">
//           <VscMail size={24} />
//         </Link>,
//       label: 'Contact',
//       onClick: () => { }
//     },
//     {
//       icon:
//         <Link href="/about">
//           <VscAccount size={24} />
//         </Link>,
//       label: 'About',
//       onClick: () => { }
//     },
//   ];
//
//   return (
//     <div className="relative w-full">
//       <div className="h-32 sm:h-36 md:h-40 lg:h-48">
//         {/* Dock positioned at the bottom with responsive container */}
//         <div className="absolute bottom-12 left-0 right-0 w-full flex justify-center">
//           <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
//             <Dock
//               items={dockItems}
//               panelHeight={dockSize.panelHeight}
//               baseItemSize={dockSize.baseItemSize}
//               magnification={dockSize.magnification}
//
//               className="bg-background/80 backdrop-blur-sm border-none shadow-none"
//             />
//           </div>
//         </div>
//
//         {/* Copyright text positioned below the dock */}
//         <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
//           <p className="text-xs sm:text-sm text-muted-foreground">
//             &copy; {new Date().getFullYear()} Sanjoy Guin. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Footer;
//
//
"use client"

import React, { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { VscHome, VscCode, VscAccount, VscMail } from "react-icons/vsc";
import Dock from "../app/uiComponents/Dock";
import Link from 'next/link';

const Footer = () => {
  // Add responsive state
  const [dockSize, setDockSize] = useState({
    panelHeight: 72,
    baseItemSize: 48,
    magnification: 64
  });

  // Update dock size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile - smaller sizes
        setDockSize({
          panelHeight: 48,
          baseItemSize: 32,
          magnification: 42
        });
      } else if (width < 768) {
        // Small tablets
        setDockSize({
          panelHeight: 56,
          baseItemSize: 38,
          magnification: 50
        });
      } else {
        // Default for larger screens
        setDockSize({
          panelHeight: 72,
          baseItemSize: 48,
          magnification: 64
        });
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define dock items with smaller icon sizes for better mobile display
  const dockItems = [
    {
      icon: <Link href="/"><VscHome size={20} /></Link>,
      label: 'Home',
      onClick: () => { }
    },
    {
      icon: <Link href="/work"><VscCode size={20} /></Link>,
      label: "Work",
      onClick: () => { }
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
      label: 'GitHub',
      onClick: () => { }
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
      label: 'Twitter',
      onClick: () => { }
    },
    {
      icon: <Link href="/contact"><VscMail size={20} /></Link>,
      label: 'Contact',
      onClick: () => { }
    },

  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-28 sm:h-32 md:h-36 lg:h-44">
        {/* Dock positioned at the bottom with responsive container */}
        <div className="absolute bottom-10 left-0 right-0 w-full flex justify-center px-20">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Dock
              items={dockItems}
              panelHeight={dockSize.panelHeight}
              baseItemSize={dockSize.baseItemSize}
              magnification={dockSize.magnification}
              className="bg-background/80 backdrop-blur-sm border-none shadow-none"
            />
          </div>
        </div>
        {/* Copyright text positioned below the dock */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sanjoy Guin. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
