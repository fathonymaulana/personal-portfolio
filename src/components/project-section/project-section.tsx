import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

interface Project {
  image: string;
  title: string;
  releaseYear: number;
  description: string;
  badges: string[];
  liveDemo: string;
  studyCase: string;
  isPersonalPortfolio?: boolean;
}

const projects: Project[] = [
  {
    image: "/images/projects/nakama-admin.png",
    title: "Nakama Admin Dashboard",
    releaseYear: 2023,
    description:
      "Nakama Admin Dashboard is a website launched in 2023 that is still in active production. It serves as a control center or dashboard for the Nakama team to manage various aspects of their platform. This dashboard falls under the category of administrative websites and is a crucial part of the Nakama infrastructure.",
    badges: ["Websites", "Admin Dashboard"],
    liveDemo: "https://nakamaadmin.vercel.app/",
    studyCase: "#",
  },
  {
    image: "/images/projects/nakama-preorder.png",
    title: "Nakama Preorder",
    releaseYear: 2023,
    description:
      "This application was designed to simplify the process of ordering favorite foods from various stores.",
    badges: ["Websites", "E-Commerce"],
    liveDemo: "https://nakama-preorder.vercel.app/",
    studyCase: "#",
  },
  {
    image: "/images/projects/personal-portfolio-v1.png",
    title: "Personal Portfolio",
    releaseYear: 2023,
    description:
      "This repository showcases my projects, skills, and accomplishments as a developer. It includes a collection of my work, from coding projects to professional experiences, highlighting my journey and expertise in the tech world.",
    badges: ["Websites", "Portfolio"],
    liveDemo: "https://fathonymaulana.vercel.app",
    studyCase: "#",
    isPersonalPortfolio: true,
  },
];

const ProjectCard: React.FC<Project> = ({
  image,
  title,
  releaseYear,
  description,
  badges,
  liveDemo,
  studyCase,
  isPersonalPortfolio,
}) => (
  <div className="border border-muted shadow rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
    <Link
      href={liveDemo}
      target="_blank"
      className="w-full"
    >
      <Image
        src={image}
        alt="projects"
        width={500}
        height={500}
        className="w-full"
        loading="lazy"
      />
    </Link>
    <div className="flex flex-col justify-between space-y-4 py-4 px-8">
      <div className="space-y-4">
        <div className="flex items-center flex-col md:flex-row gap-1 justify-between">
          <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-1">
            {title} {isPersonalPortfolio && <Badge>v.1</Badge>}
          </h1>
          <span className="text-xs md:text-sm text-muted-foreground">
            Release Year: {releaseYear}
          </span>
        </div>
        <div className="text-muted-foreground text-sm text-justify">
          {description}
        </div>
        <div className="flex items-center gap-4">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link
          href={liveDemo}
          target="_blank"
          className={`w-full ${
            isPersonalPortfolio ? "cursor-not-allowed" : ""
          }`}
        >
          <Button className="w-full flex items-center gap-1">
            <SquareArrowOutUpRight width={14} height={14} />
            Live Demo
          </Button>
        </Link>
        <span className="text-sm text-muted-foreground">or</span>
        <Link href={studyCase} className="w-full flex items-center gap-2">
          <Button variant="outline" className="w-full">
            Study Case
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const ProjectSection: React.FC = () => (
  <div className="grid grid-cols-1 gap-8 py-32">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
);

export default ProjectSection;
