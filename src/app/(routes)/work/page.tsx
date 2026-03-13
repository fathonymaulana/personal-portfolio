"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutTemplate,
  MonitorSmartphone,
  Smartphone,
  ArrowRight,
  Github,
  ChevronRight,
  Home,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";

import { projectCategories } from "@/constant/work";

export default function WorkPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Landing Page");
  const alreadyLoaded =
    typeof window !== "undefined" &&
    sessionStorage.getItem("workPageLoaded") === "true";
  const [isLoading, setIsLoading] = useState(!alreadyLoaded);
  const [navigatingSlug, setNavigatingSlug] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (alreadyLoaded) return;
    // Show skeleton on first visit, then mark as loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("workPageLoaded", "true");
    }, 1500);
    return () => clearTimeout(timer);
  }, [alreadyLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-150px 0px -50% 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleViewDetails = (slug: string) => {
    if (navigatingSlug) return; // Prevent multiple clicks
    setNavigatingSlug(slug);
    router.push(`/work/${slug}`);
  };

  return (
    <Container>
      <div className="flex flex-col w-full min-h-screen">
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
              <span className="text-foreground font-semibold">Work</span>
            </div>

            <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans w-fit">
              Work
            </span>
            <h1>Streamline Your Workflow</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              Discover our suite of robust dashboard applications thoughtfully
              designed to enhance your digital experiences and facilitate your
              day-to-day operations.
            </p>
          </div>
          {/* Banner image right side */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-auto border-b lg:border-b-0 lg:border-l border-border bg-[#0070F3]/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/banner/work-banner.png"
              alt="Streamline your workflow"
              fill
              className="object-cover object-center lg:object-right-bottom"
              priority
            />
          </div>
        </ScrollReveal>

        <div className="sticky top-[56px] z-40 w-full bg-background/90 backdrop-blur-md border-b border-border py-4">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 w-full px-4 md:px-8">
            {/* Segmented Control */}
            <div className="flex items-center p-1 bg-muted/60 rounded-lg border border-border/50 overflow-x-auto w-full md:w-auto">
              {[
                {
                  id: "Landing Page",
                  label: "Landing Page",
                  icon: LayoutTemplate,
                },
                {
                  id: "Dashboard & Application",
                  label: "Dashboard & Application",
                  icon: MonitorSmartphone,
                },
                { id: "Mobile Apps", label: "Mobile Apps", icon: Smartphone },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToCategory(tab.id)}
                    className={cn(
                      "px-4 py-2 md:py-1.5 flex-1 md:flex-none flex items-center justify-center text-xs transition-colors rounded-md whitespace-nowrap",
                      activeCategory === tab.id
                        ? "font-semibold bg-background text-foreground shadow-sm"
                        : "font-medium text-muted-foreground hover:text-foreground",
                    )}
                    aria-label={tab.label}
                    title={tab.label}
                  >
                    <span className="hidden md:inline">{tab.label}</span>
                    <Icon className="w-4 h-4 md:hidden" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Portfolios Section */}
        <section className="flex flex-col w-full py-12 md:py-16">
          <div className="flex flex-col gap-24">
            {isLoading ? (
              // Skeleton Loading State
              <>
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col w-full">
                    {/* Category Header Skeleton */}
                    <div className="px-4 md:px-8 flex flex-col gap-4 mb-10 max-w-3xl">
                      <Skeleton className="h-8 md:h-10 w-48 md:w-64 bg-muted/80 rounded-lg" />
                      <Skeleton className="h-4 w-full bg-muted/40 rounded-md" />
                      <Skeleton className="h-4 w-3/4 bg-muted/40 rounded-md" />
                    </div>

                    {/* Projects List Skeleton */}
                    <div className="flex flex-col divide-y divide-border border-y border-border">
                      <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-border">
                        {/* Project Info Skeleton */}
                        <div className="lg:w-1/4 p-4 md:p-8 flex flex-col gap-6 bg-muted/5">
                          <div className="flex items-center gap-2">
                            <Skeleton className="w-8 h-8 rounded-md bg-muted/60" />
                            <Skeleton className="h-4 w-16 bg-muted/40" />
                            <Skeleton className="ml-auto w-6 h-6 rounded-full bg-muted/60" />
                          </div>
                          <Skeleton className="h-8 w-4/5 bg-muted/80 rounded-md" />
                          <div className="flex flex-col gap-2">
                            <Skeleton className="h-4 w-full bg-muted/40" />
                            <Skeleton className="h-4 w-full bg-muted/40" />
                            <Skeleton className="h-4 w-5/6 bg-muted/40" />
                          </div>
                          <div className="mt-auto pt-4 relative z-10 w-full">
                            <Skeleton className="h-12 w-full sm:w-32 bg-muted/80 rounded-md" />
                          </div>
                        </div>

                        {/* Project Images Grid Skeleton */}
                        <div className="lg:w-3/4 p-4 md:p-8 bg-muted/10">
                          <div className="grid gap-4 md:gap-6 w-full h-full grid-cols-1 md:grid-cols-3">
                            <Skeleton className="h-[200px] md:h-[220px] lg:h-[280px] w-full rounded-xl bg-muted/50" />
                            <Skeleton className="h-[200px] md:h-[220px] lg:h-[280px] w-full rounded-xl bg-muted/50 hidden md:block" />
                            <Skeleton className="h-[200px] md:h-[220px] lg:h-[280px] w-full rounded-xl bg-muted/50 hidden md:block" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Actual Loaded Content
              projectCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  id={category.title}
                  ref={(el) => {
                    sectionRefs.current[catIndex] = el;
                  }}
                  className="flex flex-col w-full scroll-mt-32"
                >
                  {/* Category Header */}
                  <ScrollReveal className="px-4 md:px-8 flex flex-col gap-4 mb-10 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {category.description}
                    </p>
                  </ScrollReveal>

                  {/* Projects List */}
                  <div className="flex flex-col divide-y divide-border border-y border-border">
                    {category.projects.map((project, projIndex) => {
                      const Icon = project.icon;
                      const isNavigating = navigatingSlug === project.slug;
                      return (
                        <ScrollReveal
                          key={projIndex}
                          className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-border"
                        >
                          {/* Project Info */}
                          <div className="lg:w-1/4 p-4 md:p-8 flex flex-col gap-6 bg-muted/5 group hover:bg-muted/10 transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 border border-border rounded-md bg-background flex items-center justify-center">
                                <Icon className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                {project.tag}
                              </span>
                              
                              <div className="ml-auto w-6 h-6 rounded-full border border-border flex items-center justify-center bg-background shadow-sm overflow-hidden p-1">
                                {project.companyLogo ? (
                                  <Image 
                                    src={`/images/companies/${project.companyLogo}`} 
                                    height={16} 
                                    width={16} 
                                    className="object-contain" 
                                    alt="Company Logo" 
                                  />
                                ) : (
                                  <Github className="w-3 h-3 text-muted-foreground" />
                                )}
                              </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>

                            <p className="text-sm text-muted-foreground line-clamp-4">
                              {project.description}
                            </p>

                            <div className="mt-auto pt-4 relative z-10">
                              <Button
                                variant="default"
                                className="w-full sm:w-fit group/btn"
                                size="lg"
                                disabled={!!navigatingSlug}
                                onClick={() => handleViewDetails(project.slug)}
                              >
                                <span>
                                  {isNavigating ? "Loading..." : "View Details"}
                                </span>
                                {isNavigating ? (
                                  <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                                ) : (
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {/* Project Images Grid */}
                          <div className="lg:w-3/4 p-4 md:p-8 bg-muted/10">
                            <div
                              className={cn(
                                "grid gap-4 md:gap-6 w-full h-full",
                                category.title === "Mobile Apps"
                                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                  : "grid-cols-1 md:grid-cols-3 lg:grid-cols-3",
                              )}
                            >
                              {project.images.map((img, imgIndex) => (
                                <Link
                                  href={`/work/${project.slug}`}
                                  key={imgIndex}
                                  className="relative block w-full rounded-xl overflow-hidden shadow-sm border border-border/50 group hover:shadow-md transition-all duration-300 hover:border-primary/30 bg-background/50 h-[200px] md:h-[220px] lg:h-[280px]"
                                >
                                  <Image
                                    src={`/images/projects/${project.folder}/${img}`}
                                    alt={`${project.title} detail ${imgIndex + 1}`}
                                    fill
                                    className="object-cover object-top p-1"
                                    draggable={false}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </Container>
  );
}
