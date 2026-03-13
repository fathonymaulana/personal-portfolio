import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCategories } from "@/constant/work";
import Container from "@/components/ui/container";
import BodyBanner from "@/components/body-banner/body-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Figma,
  Info,
  CalendarDays,
  Clock,
  CheckCircle2,
  Code2,
  Home,
  BarChart,
  Globe,
  Database,
} from "lucide-react";
import ProjectGallery from "./components/project-gallery";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project = null;

  for (const category of projectCategories) {
    const found = category.projects.find((p) => p.slug === slug);
    if (found) {
      project = found;
      break;
    }
  }

  if (!project) {
    return <div>Project not found for slug: {slug}</div>;
  }

  return (
    <Container>
      <div className="flex flex-col w-full min-h-screen">
        {/* Header Section */}
        <section className="flex flex-col w-full items-stretch border-b border-border relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/banner/header-bg.png"
              alt="Background Pattern"
              fill
              className="object-cover object-center dark:hidden block"
              priority
            />
            <Image
              src="/images/banner/header-bg-dark.png"
              alt="Background Pattern"
              fill
              className="object-cover object-center hidden dark:block"
              priority
            />
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24 gap-6 relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="absolute top-6 md:top-10 left-4 md:left-8 flex items-center gap-2 text-sm text-muted-foreground w-[90%] truncate">
              <Link
                href="/"
                className="hover:text-foreground transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link
                href="/work"
                className="hover:text-foreground transition-colors shrink-0"
              >
                Work
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-foreground font-semibold truncate">
                {project.title}
              </span>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <h1 className="font-bold tracking-tight leading-[1.1] text-foreground max-w-4xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {project.techStack?.map((tech, idx) => {
                  let src = "";
                  let darkSrc = "";
                  let LucideFallback = null;

                  if (tech.includes("Next.js") || tech.includes("NextJs")) {
                    src = "/images/icons/next-logo.svg";
                    darkSrc = "/images/icons/next-logo-white.svg";
                  } else if (tech.includes("TypeScript")) {
                    src = "/images/icons/ts-logo.svg";
                  } else if (tech.includes("Tailwind")) {
                    src = "/images/icons/tailwind-logo.svg";
                  } else if (tech.includes("Shadcn")) {
                    src = "/images/icons/shadcn-logo.svg";
                  } else if (tech.includes("Figma")) {
                    src = "/images/icons/figma-logo.svg";
                  } else if (
                    tech.includes("React Native") ||
                    tech.includes("React")
                  ) {
                    src = "/images/icons/react-logo.svg";
                  } else if (tech.includes("Framer")) {
                    src = "/images/icons/framer-logo.svg";
                  } else if (tech.includes("Node.js")) {
                    src = "/images/icons/node-logo.svg";
                  } else if (tech.includes("Prisma")) {
                    src = "/images/icons/prisma-logo.svg";
                    darkSrc = "/images/icons/next-logo-white.svg"; // Actually Prisma logo might need white bg, but I use white text version if possible. Not provided, so no darkSrc.
                  } else if (tech.includes("PostgreSQL")) {
                    src = "/images/icons/postgresql-logo.svg";
                  } else if (tech.includes("Redux")) {
                    src = "/images/icons/redux-logo.svg";
                  } else if (tech.includes("Material UI")) {
                    src = "/images/icons/mui-logo.svg";
                  } else if (tech.includes("Angular")) {
                    src = "/images/icons/angular-logo.svg";
                  } else if (tech.includes("Express")) {
                    src = "/images/icons/express-logo.svg";
                    darkSrc = "/images/icons/next-logo-white.svg"; // fallback if text expresses it
                  } else if (tech.includes("Firebase")) {
                    src = "/images/icons/firebase-logo.svg";
                  } else if (tech.includes("Mapbox")) {
                    src = "/images/icons/mapbox-logo.svg";
                  } else if (tech.includes("Chart.js")) {
                    src = "/images/icons/chartjs-logo.svg";
                  } else if (tech.includes("D3.js")) {
                    src = "/images/icons/d3js-logo.svg";
                  } else if (tech.includes("SQL Server")) {
                    src = "/images/icons/sqlserver-logo.svg";
                  } else if (tech.includes("Data Visualization")) {
                    LucideFallback = BarChart;
                  } else if (tech.includes("WebSockets")) {
                    LucideFallback = Globe;
                  } else if (
                    tech.includes("Database") ||
                    tech.includes("Firebase")
                  ) {
                    LucideFallback = Database;
                  }

                  if (src) {
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-center rounded-full w-10 h-10 border border-border bg-background/50 hover:bg-background transition-colors shadow-sm"
                        title={tech}
                      >
                        {darkSrc ? (
                          <>
                            <Image
                              src={src}
                              alt={tech}
                              width={20}
                              height={20}
                              className="dark:hidden block object-contain"
                            />
                            <Image
                              src={darkSrc}
                              alt={tech}
                              width={20}
                              height={20}
                              className="hidden dark:block object-contain"
                            />
                          </>
                        ) : (
                          <Image
                            src={src}
                            alt={tech}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        )}
                      </div>
                    );
                  } else if (LucideFallback) {
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-center rounded-full w-10 h-10 border border-border bg-background/50 hover:bg-background transition-colors shadow-sm"
                        title={tech}
                      >
                        <LucideFallback className="w-5 h-5 text-foreground/80" />
                      </div>
                    );
                  }

                  // Fallback text pill for tech without custom SVG
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-center rounded-full border border-border bg-background/50 hover:bg-background transition-colors px-4 h-10 shadow-sm"
                      title={tech}
                    >
                      <span className="text-xs font-semibold text-foreground/80">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="py-12 md:py-20 px-4 md:px-8 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
            {/* Left Column - Main Details */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-12 md:gap-16">
              {/* Interactive Image Gallery */}
              <ProjectGallery
                title={project.title}
                folder={project.folder}
                images={project.images}
                mainImage={project.mainImage}
              />

              {/* Typography Content */}
              <div className="flex flex-col gap-10">
                {project.overview && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-2xl font-bold">Overview:</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-2xl font-bold">Features:</h3>
                    <ul className="flex flex-col gap-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span className="text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-2xl font-bold">
                      Tech Stack:
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {project.techStack.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-primary">-</span>
                          <span className="text-muted-foreground leading-relaxed">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.whoShouldUse && project.whoShouldUse.length > 0 && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl md:text-2xl font-bold">
                      Who Should Use & Benefit from this Project:
                    </h3>
                    <div className="flex flex-col gap-6">
                      {project.whoShouldUse.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <h4 className="font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground flex items-start gap-3 leading-relaxed">
                            <span className="mt-1">-</span>
                            <span>{item.description}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="col-span-1 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
              {/* Project Info Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-background shadow-sm flex flex-col gap-6">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="Smaller text-muted-foreground">
                      Release Date
                    </span>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      <span>{project.releaseDate || "N/A"}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="Smaller text-muted-foreground">
                      Last Update
                    </span>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{project.lastUpdate || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-600 font-medium leading-relaxed">
                    This product is an exclusive prototype indicating features
                    for potential applications, strictly limited for
                    demonstration.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-2">
                  {project.previewLink &&
                  project.previewLink !== "#" &&
                  project.previewLink !== "maintenance" ? (
                    <Button
                      variant="default"
                      className="flex-1 gap-2 rounded-lg group text-xs md:text-sm"
                      asChild
                    >
                      <Link
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/icons/next-logo-white.svg"
                          alt="Next.js"
                          width={16}
                          height={16}
                          className="dark:hidden block w-4 h-4 object-contain"
                        />
                        <Image
                          src="/images/icons/next-logo.svg"
                          alt="Next.js"
                          width={16}
                          height={16}
                          className="hidden dark:block w-4 h-4 object-contain"
                        />
                        Next Preview
                      </Link>
                    </Button>
                  ) : project.previewLink === "maintenance" ? (
                    <Button
                      variant="default"
                      className="flex-1 gap-2 rounded-lg group text-xs md:text-sm"
                      disabled
                    >
                      <Image
                        src="/images/icons/next-logo-white.svg"
                        alt="Next.js"
                        width={16}
                        height={16}
                        className="dark:hidden block w-4 h-4 object-contain opacity-50"
                      />
                      <Image
                        src="/images/icons/next-logo.svg"
                        alt="Next.js"
                        width={16}
                        height={16}
                        className="hidden dark:block w-4 h-4 object-contain opacity-50"
                      />
                      Under Maintenance
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      className="flex-1 gap-2 rounded-lg group text-xs md:text-sm"
                      disabled
                    >
                      <Image
                        src="/images/icons/next-logo-white.svg"
                        alt="Next.js"
                        width={16}
                        height={16}
                        className="dark:hidden block w-4 h-4 object-contain opacity-50"
                      />
                      <Image
                        src="/images/icons/next-logo.svg"
                        alt="Next.js"
                        width={16}
                        height={16}
                        className="hidden dark:block w-4 h-4 object-contain opacity-50"
                      />
                      Coming Soon
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 rounded-lg group bg-background"
                    asChild
                  >
                    <Link
                      href={project.figmaLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Figma className="w-4 h-4 text-foreground/80 group-hover:text-foreground" />
                      Figma Preview
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Tech Stack Icons Card */}
              {project.techStack && (
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-background shadow-sm flex flex-col gap-5">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1.5 font-medium rounded-lg text-xs md:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List Sidebar Card */}
              {project.features && (
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-background shadow-sm flex flex-col gap-5">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Features
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-foreground/80 font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="line-clamp-1 hover:line-clamp-none transition-all">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reusable Body Banner Component */}
        <BodyBanner />
      </div>
    </Container>
  );
}
