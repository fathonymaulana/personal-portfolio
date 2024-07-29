"use client";

import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Education: FC = () => {
  return (
    <>
      <div className="space-y-8">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Education
        </h1>
        <p>
          Bachelor of Information Systems, Gunadarma University (2014-2019)
          During my studies, I actively participated in various self-development
          activities such as web & desktop app development workshops. This enabled me
          to hone my skills in HTML, CSS, JavaScript, React.
        </p>
        <Separator />
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/gunadarma.png"
              alt="logo"
              width={55}
              height={55}
              loading="lazy"
              className="object-cover w-10"
            />
            <h2 className="text-2xl font-semibold tracking-tighter">
              University of Gunadarma
            </h2>
          </div>
          <div className="text-sm mt-4">
            <p className="font-semibold">Bachelor of Information System</p>
            <p className="text-muted-foreground">
              Faculty of Computer Science & Information Technology
            </p>
          </div>
          <Separator className="mt-4" />
          <div className="flex items-center gap-4 mt-4 text-muted-foreground text-sm">
            <small>(2014 - 2019)</small>
            <span className="text-muted">|</span>
            <small>Indonesia</small>
          </div>
          <ul className="list-disc ml-4 py-4 text-sm text-muted-foreground">
            <li>Focus on software engineering and web development.</li>
            <li>
              Completed a final project involving the creation of a task
              management web application.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
