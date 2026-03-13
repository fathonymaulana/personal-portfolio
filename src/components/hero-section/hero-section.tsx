"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Download, Loader2, Star, StarHalf } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { toast } from "sonner";
import SuccessToast from "../ui/success-toast";

const avatars = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
    fallback: "OS",
    name: "Olivia Sparks",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png",
    fallback: "HL",
    name: "Howard Lloyd",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
    fallback: "HR",
    name: "Hallie Richards",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png",
    fallback: "JW",
    name: "Jenny Wilson",
  },
];

const HeroSection: React.FC = () => {
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

      // Show success toast
      toast.custom(() => (
        <SuccessToast
          title="CV Downloaded Successfully"
          description="Resume.pdf has been saved to your device."
        />
      ));
    }, 1500); // Simulate processing time before download
  };

  return (
    <section
      id="hero"
      className="px-4 lg:px-8 py-8 lg:pt-24 lg:pb-8 md:py-0 flex flex-col items-center justify-center gap-8 border-b border-border"
    >
      <div className="flex flex-col items-center justify-center gap-8 max-w-3xl">
        <Link
          href="/work"
          className="flex w-fit items-center justify-center p-1 border border-border rounded-lg bg-primary-dark dark:bg-primary-light hover:bg-muted transition-colors group cursor-pointer"
        >
          <div className="flex w-full flex-wrap justify-center items-center gap-2 pr-2">
            <Badge className="text-[10px] font-normal group-hover:bg-primary/90 transition-colors">
              New
            </Badge>
            <span className="text-xs md:text-sm font-custom-sans text-foreground font-medium group-hover:opacity-80 transition-opacity">
              Dashboard, Design system & more...
            </span>
          </div>
        </Link>
        {/* Gambar untuk light mode */}
        <Image
          src="/images/hero/heroText-light.svg"
          alt="hero-text"
          width={650}
          height={150}
          loading="lazy"
          className="block dark:hidden px-4 md:px-0"
        />
        {/* Gambar untuk dark mode */}
        <Image
          src="/images/hero/heroText-dark.svg"
          alt="hero-text"
          width={650}
          height={150}
          loading="lazy"
          className="hidden dark:block px-4 md:px-0"
        />
        <span className="text-sm md:text-base text-muted-foreground font-base text-center color-muted-foreground">
          Innovative web development solutions, crafting elegant user
          experiences through cutting-edge technology and creative design.
        </span>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="ring-background ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md">
                      <AvatarImage src={avatar.src} alt={avatar.name} />
                      <AvatarFallback className="text-xs">
                        {avatar.fallback}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{avatar.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
              <span className="text-xs font-bold font-mono text-foreground">
                4.5
              </span>
            </div>
            <span className="text-xs font-normal text-muted-foreground">
              Loved by many companies
            </span>
          </div>
        </div>
        <div className="pl-1 md:pl-4 pt-1 pr-1 pb-1 gap-4 flex items-center bg-background md:bg-primary rounded-xl md:w-fit w-full">
          <span className="text-sm text-primary-foreground md:block hidden">
            I'm always open to new and exciting projects!
          </span>
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
      </div>

      {/* video */}
      <div className="rounded-3xl w-full overflow-hidden border-4 md:border-[8px] border-primary flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
          preload="none"
        >
          <source
            src="/videos/web-homepage-hero-1920x1200_final.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
