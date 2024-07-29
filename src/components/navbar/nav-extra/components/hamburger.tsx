// src/components/Hamburger.tsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import {
  aboutCategories,
  docsCategories,
  projectsCategories,
} from "@/constant/nav-links";

const SHEET_SIDES = ["left"] as const;

const Hamburger = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="block md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
                <div onClick={handleLinkClick}>
                  <Logo />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="relative my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-auto">
              <div className="basis-1/1 grid grid-cols-1 gap-y-4 text-base">
                <ul className="flex flex-col gap-y-3">
                  <li className="font-bold text-foreground leading-5">Docs</li>
                  {docsCategories.map((docs) => (
                    <li key={docs.name}>
                      <Link
                        href={docs.path}
                        className="font-normal text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        {docs.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-y-3">
                  <li className="font-bold text-foreground leading-5">About</li>
                  {aboutCategories.map((about) => (
                    <li key={about.name}>
                      <Link
                        href={about.path}
                        className="font-normal text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        {about.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-y-3">
                  <li className="font-bold text-foreground leading-5">
                    Projects
                  </li>
                  {projectsCategories.map((project) => (
                    <li key={project.name}>
                      <Link
                        href={project.path}
                        className="font-normal text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default Hamburger;
