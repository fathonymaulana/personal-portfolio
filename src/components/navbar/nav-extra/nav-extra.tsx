"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../../dark-mode/mode-toggle";
import { Separator } from "@/components/ui/separator";
import SearchButton from "./components/search-button";
import { Mail, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavExtra = () => {
  const [isContacting, setIsContacting] = useState(false);

  const handleContactClick = () => {
    setIsContacting(true);
    setTimeout(() => {
      setIsContacting(false);
    }, 1500); // Simulate processing time
  };
  return (
    <ul className="flex items-center gap-2">
      <li>
        <SearchButton />
      </li>
      <li>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="default"
                className="items-center gap-2"
                asChild
              >
                <Link
                  href="https://github.com/fathonymaulana?tab=repositories"
                  target="_blank"
                >
                  <GitHubLogoIcon width={18} height={18} />
                  <span className="text-xs font-mono text-muted-foreground">
                    87k
                  </span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent showArrow>
              <p className="Smaller">Github Repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
      <li>
        <ModeToggle />
      </li>
      <Separator orientation="vertical" className="h-6" />
      <li>
        <Button
          className={`md:flex hidden gap-2 ${isContacting ? "opacity-50 cursor-not-allowed" : ""}`}
          variant="default"
          size="sm"
          asChild
        >
          <Link
            href="mailto:maulanafathony@gmail.com"
            target="_blank"
            onClick={(e) => {
              if (isContacting) e.preventDefault();
              else handleContactClick();
            }}
          >
            {isContacting ? (
              <Loader2 className="w-[18px] h-[18px] animate-spin" />
            ) : (
              <Mail width={18} height={18} />
            )}
            Contact Me!
          </Link>
        </Button>
      </li>
      <li>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`md:hidden flex gap-2 ${isContacting ? "opacity-50 cursor-not-allowed" : ""}`}
                variant="outline"
                size="icon"
                asChild
              >
                <Link
                  href="mailto:maulanafathony@gmail.com"
                  target="_blank"
                  onClick={(e) => {
                    if (isContacting) e.preventDefault();
                    else handleContactClick();
                  }}
                >
                  {isContacting ? (
                    <Loader2 className="w-[18px] h-[18px] animate-spin" />
                  ) : (
                    <Mail width={18} height={18} />
                  )}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent showArrow>
              <p className="Smaller">Contact Me</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    </ul>
  );
};

export default NavExtra;
