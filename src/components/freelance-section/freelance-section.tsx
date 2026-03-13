"use client";

import React from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FreelanceSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 flex flex-col items-center justify-center gap-12 w-full border-b border-border">
      {/* Container */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl px-4 w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          I&apos;m Open to
          <br />
          Freelance Work
        </h2>

        {/* Paragraph */}
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
          I stay updated with the latest technologies and brands, ensuring every
          website I build is modern, efficient, and ready for the future. Now
          I&apos;m on most popular freelance market place.
        </p>

        {/* CTA Box */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-1 md:pl-6 bg-muted/60 rounded-xl w-fit max-w-3xl border border-border mt-8">
          <p className="text-xs md:text-sm font-medium text-foreground text-center sm:text-left px-2 sm:px-0 pt-4 sm:pt-0">
            I&apos;m excited to contribute my UI/UX expertise to cutting-edge
            digital experiences!
          </p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="w-full sm:w-auto shrink-0 pb-2 px-2 sm:p-0"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-lg h-12 px-6 bg-background text-foreground hover:bg-muted border border-border flex items-center gap-2 shadow-sm font-semibold transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
