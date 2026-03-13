"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "../ui/container";
import Socials from "./components/socials";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/about/Contacts" },
];

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <footer className="container w-auto flex flex-col">
        {/* Top Half */}
        <div className="flex flex-col md:flex-row items-start justify-between w-auto px-6 md:px-8 pt-8 md:pt-16 pb-8 md:pb-8">
          {/* Brand / Logo */}
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <Link href="/" className="flex flex-col items-center group w-fit">
              <Image
                src="/images/logo/Logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="dark:invert-0 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-custom-sans font-semibold tracking-tight text-foreground">
                Fathony Maulana
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-md text-center">
              Crafting intuitive digital experiences and pushing the boundaries
              of modern UI/UX design. Based in Indonesia, working globally.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              Licensed under the{" "}
              <Link
                href="/mit"
                className="font-bold text-foreground hover:underline underline-offset-4"
              >
                MIT License
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Bottom Half */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border px-6 md:px-8 py-4 md:py-8">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} fm/portfolio.</span>
            <span>All rights reserved.</span>
          </div>

          <Socials />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
