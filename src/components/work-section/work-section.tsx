"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutTemplate,
  MonitorSmartphone,
  PenTool,
  SquareArrowOutUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import lottie, { AnimationItem } from "lottie-web";

type Tab = {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  image: string;
  isVideo?: boolean;
  isLottie?: boolean;
  isComingSoon?: boolean;
};

// Global cache for preloaded Lottie data
const lottieCache: Record<string, object> = {};

const LottiePlayer: React.FC<{ src: string }> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [data, setData] = useState<object | null>(lottieCache[src] || null);

  useEffect(() => {
    // If already cached, use it directly
    if (lottieCache[src]) {
      setData(lottieCache[src]);
      return;
    }
    // Otherwise fetch and cache
    fetch(src)
      .then((res) => res.json())
      .then((json) => {
        lottieCache[src] = json;
        setData(json);
      })
      .catch(console.error);
  }, [src]);

  useEffect(() => {
    if (!data || !containerRef.current) return;
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data,
    });
    return () => {
      animationRef.current?.destroy();
    };
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    />
  );
};

const tabs: Tab[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces that enhance user experience and drive engagement.",
    iconUrl: "/images/icons/interactive-tab-button/Button%20Vector%201.svg",
    image: "/videos/lottie/Showreel-Grid-Mobile-remix.json",
    isLottie: true,
  },
  {
    id: "web-dev",
    title: "Web Design & Development",
    description:
      "Building responsive websites and web applications with cutting-edge technologies.",
    iconUrl: "/images/icons/interactive-tab-button/Button%20Vector%202.svg",
    image: "/videos/lottie/Scene.json",
    isLottie: true,
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Creating memorable logos that capture your brand's essence and resonate with your audience.",
    iconUrl: "/images/icons/interactive-tab-button/Button%20Vector%203.svg",
    image: "/videos/logo-design.mp4",
    isVideo: true,
    isComingSoon: true,
  },
];

const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const activeTabData = tabs.find((t) => t.id === activeTab) || tabs[0];

  // Preload all Lottie data on mount so tab switching is instant
  useEffect(() => {
    tabs
      .filter((tab) => tab.isLottie)
      .forEach((tab) => {
        if (!lottieCache[tab.image]) {
          fetch(tab.image)
            .then((res) => res.json())
            .then((json) => {
              lottieCache[tab.image] = json;
            })
            .catch(console.error);
        }
      });
  }, []);

  return (
    <section
      id="work"
      className="py-24 md:py-24 flex flex-col items-center justify-center gap-12 w-full border-b border-border"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl px-4">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans">
          Scope of Work
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Revolutionizing Digital Experiences
        </h2>
        <p className="text-muted-foreground md:text-lg">
          We craft innovative solutions that transform your digital presence and
          captivate your audience.
        </p>
      </div>

      {/* Tabs / Buttons row */}
      <div className="flex flex-col md:flex-row w-full border-y border-border md:divide-x md:divide-y-0 divide-y divide-border overflow-hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 flex items-start text-left p-6 gap-4 transition-all duration-300",
                isActive
                  ? "bg-pink-50 dark:bg-pink-950/20"
                  : "bg-transparent hover:bg-muted/30",
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 transition-colors duration-300",
                  isActive
                    ? "bg-pink-600 dark:bg-pink-400"
                    : "bg-muted-foreground focus:bg-pink-600",
                )}
                style={{
                  maskImage: `url('${tab.iconUrl}')`,
                  WebkitMaskImage: `url('${tab.iconUrl}')`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              >
                {/* Invisible spacer to maintain dimensions since mask uses background */}
                <div className="w-[72px] h-[54px] md:w-[96px] md:h-[72px]" />
              </div>
              <div className="flex flex-col gap-1 w-full relative">
                <div className="flex justify-between items-center pr-2">
                  <h3
                    className={cn(
                      "font-semibold text-md leading-tight transition-colors duration-300",
                      isActive
                        ? "text-pink-600 dark:text-pink-400"
                        : "text-foreground",
                    )}
                  >
                    {tab.title}
                  </h3>
                  {tab.isComingSoon && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-pink-500/30 text-pink-500 bg-pink-500/10 whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground  line-clamp-3">
                  {tab.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Image Display */}
      <div className="w-full bg-muted/20 border border-border p-2 relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabData.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col"
          >
            <div className="relative w-full aspect-video md:aspect-[16/10]">
              {activeTabData.isLottie ? (
                <div className="w-full h-full bg-[#171717] rounded-lg overflow-hidden">
                  <LottiePlayer src={activeTabData.image} />
                </div>
              ) : activeTabData.isVideo ? (
                <div
                  className="w-full h-full relative flex items-center justify-center bg-muted/20"
                  style={{
                    backgroundImage: `url('/images/pattern/pattern.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <video
                    src={activeTabData.image}
                    autoPlay
                    loop
                    muted
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  fill
                  className="object-cover object-top"
                  draggable={false}
                  priority
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Explore all works button */}
      <div className="pt-4 md:pt-8 w-full flex items-center justify-center">
        <Link href="/work" className="w-fit">
          <Button size="lg" className="w-fit flex items-center gap-2">
            Explore all works
            <SquareArrowOutUpRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;
