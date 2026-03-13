"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const defaultNavItems = [
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
];

const defaultSections = [
  "hero",
  "work",
  "stats",
  "about",
  "testimonials",
  "experience",
  "contact",
];

const FloatingNav: React.FC = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicNavItems, setDynamicNavItems] = useState(defaultNavItems);
  const sectionsRef = useRef(defaultSections);

  useEffect(() => {
    setIsMounted(true);
    const updateOrder = () => {
      // Sort Nav Items dynamically
      const sortedNav = [...defaultNavItems].sort((a, b) => {
        const elA = document.getElementById(a.id);
        const elB = document.getElementById(b.id);
        if (!elA || !elB) return 0;
        return (elA.getBoundingClientRect().top + window.scrollY) - (elB.getBoundingClientRect().top + window.scrollY);
      });
      setDynamicNavItems(sortedNav);

      // Sort Section Scroller detection dynamically
      const sortedSections = [...defaultSections].sort((a, b) => {
        const elA = document.getElementById(a);
        const elB = document.getElementById(b);
        if (!elA || !elB) return 0;
        return (elA.getBoundingClientRect().top + window.scrollY) - (elB.getBoundingClientRect().top + window.scrollY);
      });
      sectionsRef.current = sortedSections;
    };

    updateOrder();
    const timeoutId = setTimeout(updateOrder, 500); // safety catch for late layout calculations

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "hero";
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      for (const section of sectionsRef.current) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          // Check if the section spans the middle of the viewport
          if (
            absoluteTop <= viewportMiddle &&
            absoluteTop + rect.height > window.scrollY
          ) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateOrder);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOrder);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isMounted && pathname === "/" && (
        <motion.div
          initial={{ y: 150, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 150, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] }}
          className="fixed bottom-6 md:bottom-8 left-1/2 z-40 flex items-center p-1.5 gap-1.5 md:gap-2 bg-black/80 shadow-xl rounded-xl"
        >
          {/* Logo button -> acts as Home/Hero */}
          <button
            onClick={() => scrollTo("hero")}
            className={cn(
              "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-all duration-300 shrink-0 border bg-primary",
              activeSection === "hero"
                ? "border-white bg-black"
                : "border-black bg-black hover:bg-black/60",
            )}
          >
            <Image
              src="/images/logo/Logo.svg"
              alt="Home"
              width={40}
              height={40}
              className="dark:invert-0"
            />
          </button>

          {/* Center Nav Items */}
          <div className="flex items-center gap-1 md:gap-2 px-1 bg-zinc-700 p-1 rounded-lg">
            {dynamicNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "px-3 md:px-5 py-2 md:py-2.5 rounded-md text-[10px] md:text-sm font-medium transition-all duration-300 border",
                    isActive
                      ? "border-white text-white"
                      : "border-white/20 text-white hover:border-white/50 hover:text-white",
                  )}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Special Button -> Contact */}
          <button
            onClick={() => scrollTo("contact")}
            className={cn(
              "px-4 md:px-6 py-3 md:py-3.5 rounded-lg text-[10px] md:text-sm font-medium transition-all duration-300 border whitespace-nowrap",
              activeSection === "contact"
                ? "bg-white text-black"
                : "border-white bg-white text-black hover:bg-white/60",
            )}
          >
            Let&apos;s Talk.
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
