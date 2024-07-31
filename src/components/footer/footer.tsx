// src/components/Footer.tsx

import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  aboutCategories,
  docsCategories,
  projectsCategories,
} from "@/constant/nav-links";

import Container from "../ui/container";
import { Separator } from "../ui/separator";
import Socials from "./components/socials";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <Separator className="mt-20" />
      <footer className="flex flex-col gap-8 md:gap-20 relative text-left mt-20 mb-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 flex-wrap md:flex-nowrap">
          <div className="basis-3/4 grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4 md:gap-y-4 text-sm">
            <ul className="flex flex-col gap-y-6 text-sm text-muted-foreground">
              <li>Docs</li>
              {docsCategories.map((docs) => (
                <li key={docs.name}>
                  <Link
                    href={docs.path}
                    className="text-foreground font-medium hover:opacity-80 transition"
                  >
                    {docs.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-6 text-sm text-muted-foreground">
              <li>About</li>
              {aboutCategories.map((about) => (
                <li key={about.name}>
                  <Link
                    href={about.path}
                    className="text-foreground font-medium hover:opacity-80 transition"
                  >
                    {about.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-6 text-sm text-muted-foreground">
              <li>Projects</li>
              {projectsCategories.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.path}
                    className="text-foreground font-medium hover:opacity-80 transition"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full pt-8 md:pt-0 md:w-[280px] text-sm text-muted-foreground">
            <div className="flex flex-col gap-6 max-w-full sm:w-[336px]">
              <p>License</p>
              <p className="text-foreground">
                Licensed under the{" "}
                <Link href="/mit" target="_blank" className="font-semibold hover:opacity-80 transition">
                  MIT
                </Link>{" "}
                License.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>fm/portfolio &copy; 2022-2024</span>
          <Socials />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
