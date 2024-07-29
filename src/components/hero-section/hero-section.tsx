import React from "react";
import { Button } from "@/components/ui/button";
import { ChartPie, File } from "lucide-react";
import Link from "next/link";
import HeroAvatars from "./components/hero-avatars";
import HeroCards01 from "./components/hero-cards-01";
import HeroCards02 from "./components/hero-cards-02";
import HeroCards03 from "./components/hero-cards-03";
import ToolsStack from "./components/tools-stack";

const HeroSection: React.FC = () => {
  return (
    <section className="py-6 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-32 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ChartPie width={18} height={18} />
              <span className="text-muted">|</span>
              <small className="font-semibold">Welcome to fm/portfolio</small>
            </div>
            <h1 className="uppercase text-4xl font-bold tracking-tighter leading-tight">
              The repository for my Personal Portfolio
            </h1>
          </div>
          <p className="text-muted-foreground">
            This repository showcases my projects, skills, and accomplishments
            as a developer. It includes a collection of my work, from coding
            projects to professional experiences, highlighting my journey and
            expertise in the tech world.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <Button variant="ghost">
              <Link href="/cv/Resume.pdf" target="_blank" className="flex items-center gap-2">
                <File width={18} height={18} />
                Download CV
              </Link>
            </Button>
          </div>
          <ToolsStack />
        </div>
        <div className="grid gap-4">
          <HeroAvatars />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HeroCards01 />
            <HeroCards02 />
          </div>
          <div className="grid grid-cols-1">
            <HeroCards03 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
