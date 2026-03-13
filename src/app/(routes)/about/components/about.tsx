"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Loader2, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education";
import Course from "./course";
import WorkPlace from "@/components/work-place/work-place";
import AboutSection from "@/components/about-section/about-section";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      // Initiate download by opening URL
      const link = document.createElement("a");
      link.href = "/cv/Resume.pdf";
      link.download = "Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500); // Simulate processing time before download
  };

  return (
    <div className="flex flex-col w-full border-x border-border">
      {/* Banner Section */}
      <ScrollReveal className="flex flex-col-reverse lg:flex-row w-full items-stretch border-b border-border">
        {/* Header text left side */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 pt-20 pb-12 md:py-24 gap-6 relative">
          {/* Breadcrumb */}
          <div className="absolute top-6 md:top-10 left-4 md:left-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold">About</span>
          </div>

          <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans w-fit">
            About
          </span>
          <h1>About Me</h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            I'm a UI/UX designer and web developer passionate about crafting
            engaging digital experiences.
          </p>
          <Button
            className="flex gap-2 md:w-fit w-full justify-center"
            variant="outline"
            size="lg"
            disabled={isDownloading}
            onClick={handleDownloadClick}
          >
            {isDownloading ? (
              <Loader2 className="w-[14.39px] h-[14.39px] animate-spin" />
            ) : (
              <Download width={14.39} height={14.39} />
            )}
            Download CV
          </Button>
        </div>
        {/* Banner image right side */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-auto border-b lg:border-b-0 lg:border-l border-border bg-[#0070F3]/10 overflow-hidden flex items-center justify-center">
          <Image
            src="/images/hero/about-me-v2.webp"
            alt="About me image"
            fill
            className="object-cover object-center lg:object-right-bottom"
            priority
          />
        </div>
      </ScrollReveal>

      <ScrollReveal><AboutSection /></ScrollReveal>

      {/* 3. Education & Course Tabs (with sticky header) */}
      <section className="w-full pb-8">
        <Tabs defaultValue="education" className="w-full relative">
          <div className="sticky top-[56px] z-40 bg-background/80 backdrop-blur-md pt-2 w-full mb-8">
            <div className="w-full border-b border-border px-4 md:px-8">
              <TabsList className="bg-transparent h-auto p-0 flex gap-8 w-full justify-center md:justify-start -mb-px">
                <TabsTrigger
                  value="education"
                  className="w-full md:w-fit rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-foreground pb-3 pt-2 px-1 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground hover:text-foreground transition-none"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="course"
                  className="w-full md:w-fit rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-foreground pb-3 pt-2 px-1 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground hover:text-foreground transition-none"
                >
                  Course
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="mx-auto mt-8">
            <TabsContent value="education" className="mt-0 outline-none">
              <Education />
            </TabsContent>

            <TabsContent value="course" className="mt-0 outline-none">
              <Course />
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* 4. Featured In (Logos Section) */}
      {/* 
        Note: Requested to use "work-section", but based on the provided image, 
        the final block shows the "Featured In" logos which corresponds to "work-place" component.
      */}
      <ScrollReveal><WorkPlace /></ScrollReveal>
    </div>
  );
};

export default About;
