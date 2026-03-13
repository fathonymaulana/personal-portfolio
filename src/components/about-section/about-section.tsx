"use client";

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-32 flex flex-col items-center justify-center w-full border-b border-border"
    >
      {/* Header */}
      <div className="px-6 md:px-24 py-14 flex flex-col gap-4 md:gap-12 items-start space-y-4 max-w-4xl w-full border-x border-border text-center">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans text-center w-full">
          Who am I?
        </span>

        <div className="flex flex-col gap-8 text-foreground text-sm md:text-base leading-relaxed text-left max-w-3xl font-medium">
          <p className="leading-tight md:leading-relaxed text-justify">
            Hello! I&apos;m <span className="font-bold">Fathony Maulana</span>,
            a <span className="font-bold">UI/UX Designer</span> and{" "}
            <span className="font-bold">Web Developer</span> from{" "}
            <span className="font-bold">
              Padalarang, Bandung Barat, Indonesia
            </span>
            , born on May 12, 1996. My expertise includes frontend development
            and creating user-centered designs.
          </p>

          <p className="leading-tight md:leading-relaxed text-justify">
            I&apos;m passionate about crafting intuitive interfaces that offer
            engaging experiences. I&apos;m fulfilled when a project succeeds,
            knowing my contributions played a key role.
          </p>

          <p className="leading-tight md:leading-relaxed text-justify">
            I&apos;ve worked as a{" "}
            <span className="font-bold">UI/UX Designer since 2022</span>. I use
            tools like <span className="font-bold">Figma</span> and{" "}
            <span className="font-bold">Visual Studio Code</span>, with a tech
            stack that includes{" "}
            <span className="font-bold">
              MongoDB, Express.JS, React.JS, Node.JS, Next.js, Tailwind CSS
            </span>
            , and <span className="font-bold">Shadcn/UI</span>. Let&apos;s
            collaborate and bring your digital vision to life.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Image
              src="/images/avatar/Avatar.png"
              alt="Fathony Maulana"
              width={200}
              height={200}
              quality={100}
              className="w-12 h-12 rounded-full bg-muted object-cover border border-border"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                Fathony Maulana
              </span>
              <span className="text-xs text-muted-foreground">
                UI/UX Designer @ediflysolusiindonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
