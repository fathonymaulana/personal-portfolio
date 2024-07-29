import ToolsStack from "@/components/hero-section/components/tools-stack";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SkillsTools = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Skills and Tools
          </h1>
          <p className="text-base text-muted-foreground">
            A look at all the programming languages, libraries, and tools I&apos;ve
            worked with.
          </p>
        </div>
        <div className="space-y-4">
          <p>
            I started my career as a web developer about 8 years ago. I&apos;ve tried
            some programming languages and tech stack, both Back-End, and
            Front-End.
          </p>
          <p>
            Even though the scope of web development is broad, I was very
            interested and focused on Front-End Development and UI/UX Design.
          </p>
          <ToolsStack />
        </div>
        <Separator />
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tighter">
              Front-End Developer
            </h2>
            <p className="text-base text-muted-foreground">
              I love creating something that is clean and minimalistic,
              attractive and has value, and of course, easy to use.
            </p>
          </div>
          <div>
            <p>
              I really enjoy creating websites with rich UI components,
              including:
            </p>
            <ul className="list-disc ml-4 py-4 text-sm text-muted-foreground">
              <li>Web application</li>
              <li>Documentation pages</li>
              <li>CMS contents layout</li>
              <li>Dashboard layout</li>
              <li>etc</li>
            </ul>
          </div>
          <p>
            But I still like to make simple website pages like landing pages.
            So, what tools did I feel comfortable using during the website
            creation?
          </p>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold tracking-tigh text-foreground">
              TypeScript
            </h3>
            <p>
              First of all, the programming language. I&apos;m very used to using
              TypeScript, although website creation can be done using PHP,
              Python, etc.
            </p>
            <p>
              The JavaScript superset—TypeScript—has accompanied me for about 6
              years.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              React
            </h3>
            <p>
              I really enjoy building single page application websites and React
              is my go-to library.
            </p>
            <p>
              I&apos;ve been using it since 2018 (4 years) and have become quite
              proficient with it.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              Next.js
            </h3>
            <p>
              I&apos;ve been using CRA for a few years, but since discovering
              Next.js, I don&apos;t think I would want to use any other web
              framework. It&apos;s just that good!
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              Tailwind CSS
            </h3>
            <p>
              For now, I love using Tailwind CSS for styling, even though I&apos;ve
              been using SCSS for a longer time (2 years).
            </p>
            <p>
              I&apos;m really comfortable using it and I think it&apos;s a great tool.
            </p>
          </div>
        </div>
        <Separator />
        <div className="space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
            UI/UX Designer
          </h2>
          <p>
            Designing user interfaces is something I&apos;m really good at and I&apos;ve
            been a UI/UX designer from 2022 - present.
          </p>
          <p>
            I&apos;m always thinking about how to create the best possible user
            experience, in addition to creating visually appealing user
            interfaces.
          </p>
          <p>
            The biggest challenge is finding the balance between creating a
            great user interface and an amazing user experience.
          </p>
        </div>
        <Separator />
        <div className="space-y-8 text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
              Detail and Summary
            </h2>
            <p>
              I represent all data in labels to make it easier to read. The
              underline indicator shows how often I used the related item, e.g.:
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary">Frequently Used</Badge>
            <Badge variant="secondary">Occasionally</Badge>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Programming Languages
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">CSS/SCSS</Badge>
            <Badge variant="secondary">PHP</Badge>
            <Badge variant="secondary">SQL</Badge>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Technologies</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Framer Motion</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Softwares and Tools
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary">VS Code</Badge>
            <Badge variant="secondary">Figma</Badge>
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">Photoshop</Badge>
            <Badge variant="secondary">Chat GPT</Badge>
            <Badge variant="secondary">Gemini</Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsTools;
