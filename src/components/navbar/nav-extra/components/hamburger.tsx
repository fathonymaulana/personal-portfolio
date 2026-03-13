"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Mail, CheckCircle2, Menu } from "lucide-react";
import SearchButton from "./search-button";
import { ModeToggle } from "../../../dark-mode/mode-toggle";

const links = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
];

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="text-left pt-6 pb-2">
              <DrawerTitle className="flex items-center gap-3">
                <div onClick={() => setIsOpen(false)}>
                  <Logo />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="font-bold text-lg tracking-tight">
                    Fathony Maulana
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Available for work</span>
                  </div>
                </div>
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Navigation menu for mobile devices
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="Smaller font-light text-muted-foreground mb-2">
                  Tools
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <SearchButton isMobileDrawer />
                  </div>
                  <div className="flex [&>button]:border [&>button]:border-border [&>button]:w-10 [&>button]:h-10 [&>button]:rounded-md">
                    <ModeToggle />
                  </div>
                  <Link
                    href="https://github.com/fathonymaulana?tab=repositories"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 border border-border rounded-md hover:bg-muted transition-colors text-foreground"
                  >
                    <GitHubLogoIcon width={18} height={18} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <span className="Smaller font-light text-muted-foreground mb-2">
                  Navigation
                </span>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold py-3 border-b border-border/50 hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-muted-foreground group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="flex justify-between items-center bg-muted/50 p-4 rounded-xl border border-border mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground">
                    Have a project?
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Let's talk and collaborate
                  </span>
                </div>
                <Button size="icon" className="rounded-full shadow-md" asChild>
                  <Link href="mailto:hi@fathony.dev">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <DrawerFooter className="flex-row justify-between items-center mt-2 pb-8 px-4">
              <span className="text-xs font-medium text-muted-foreground">
                © 2026 Fathony Maulana
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://x.com/maulanafathony"
                  target="_blank"
                  className="p-2 bg-muted rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fathony-maulana-96a2a71ba/"
                  target="_blank"
                  className="p-2 bg-muted rounded-full hover:bg-[#0A66C2] hover:text-white transition-colors text-foreground"
                >
                  <LinkedInLogoIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Hamburger;
