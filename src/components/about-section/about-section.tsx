import Socials from "@/app/(routes)/about/components/socials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between gap-4">
          <Badge className="w-fit">About Me</Badge>
          <Socials />
        </div>
        <div className="flex flex-col gap-4 text-justify leading-tight">
          <p className="font-semibold">
            Hello! I&apos;m Fathony Maulana, a passionate frontend developer
            with 2 years of experience in building responsive and interactive
            web applications. My journey in web development started with a
            curiosity about how websites work and has grown into a fulfilling
            career.
          </p>
          <p className="text-muted-foreground text-sm mb-10">
            With a passion for technology and a focus on web design and Web
            development, I create beautiful digital experiences that drive value
            for my clients and their customers. I believe in taking a
            collaborative approach to my work and I work closely with my clients
            to ensure that every project meets their unique needs and exceeds
            their expectations.
          </p>
          <Link href="/about" className="w-full">
            <Button className="w-full flex items-center gap-1">
              <SquareArrowOutUpRight width={14} height={14} />
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
