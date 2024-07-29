import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDemo = () => {
  return (
    <>
      <div className="border border-muted shadow rounded-xl overflow-hidden grid grid-cols-1">
        <Link
          href="https://nakama-preorder.vercel.app"
          target="_blank"
          className="w-full"
        >
          <Image
            src="/images/projects/nakama-preorder.png"
            alt="projects"
            width={500}
            height={500}
            className="w-full"
            loading="lazy"
          />
        </Link>
        <div className="flex flex-col justify-between space-y-4 p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-1">
                Nakama Preorder
              </h1>
              <span className="text-sm text-muted-foreground">
                Release Year: 2023
              </span>
            </div>
            <div className="text-muted-foreground text-sm text-justify">
              This application was designed to simplify the process of ordering
              favorite foods from various stores.
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Websites</Badge>
              <Badge variant="secondary">E-Commerce</Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://nakama-preorder.vercel.app"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full flex items-center gap-1">
                <SquareArrowOutUpRight width={14} height={14} />
                Live Demo
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">or</span>
            <Link href="#" className="w-full flex items-center gap-2">
              <Button variant="outline" className="w-full">
                Study Case
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDemo;
