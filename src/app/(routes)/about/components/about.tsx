import BodyBanner from "@/components/body-banner/body-banner";
import { Separator } from "@/components/ui/separator";
import React from "react";

const About = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">About</h1>
        <p className="text-base text-muted-foreground">
          Frontend Developer | Crafting Engaging User Experiences
        </p>
      </div>
      <div className="pb-12 pt-8">
        <div className="mdx">
          <div className="leading-7 space-y-8">
            <p>
              Hi there! I&apos;m <code>Fathony Maulana</code> a frontend
              developer based in East Jakarta, Indonesia. For the past 2 years,
              I&apos;ve been freelancing on <code>Upwork</code>, helping
              businesses of all sizes create stunning web applications.
            </p>
            <p>
              I&apos;m passionate about building user-friendly interfaces that
              not only look great but also provide a seamless user experience.
              My favorite part of development is seeing a project come to life
              and knowing that I&apos;ve contributed to something meaningful.
            </p>
            <Separator />
            <div>
              <h2 className="font-semibold tracking-tighter text-2xl">
                Why choose me?
              </h2>
              <ul className="list-disc ml-4 py-4 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-semibold">
                    Problem-solver:
                  </span>{" "}
                  I love finding creative solutions to complex problems.
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Team player:
                  </span>{" "}
                  I thrive in collaborative environments.
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Continuous learner:
                  </span>{" "}
                  I&apos;m always eager to learn new technologies and stay
                  up-to-date with industry trends.
                </li>
              </ul>
            </div>
            <BodyBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
