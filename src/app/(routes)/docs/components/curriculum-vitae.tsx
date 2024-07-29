import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Circle, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurriculumVitae = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Curriculum Vitae
        </h1>
        <p className="text-base text-muted-foreground">Personal Information</p>
      </div>

      <div className="my-8 p-8 flex items-center justify-start rounded-lg border-2 border-muted text-left ">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> You can{" "}
          <Badge
            variant="secondary"
            className="font-mono text-muted-foreground"
          >
            Download CV
          </Badge>{" "}
          to see my resume in detail starting from Profile, Experience, Skills,
          Education, etc
        </p>
      </div>
      <div className="flex flex-col space-y-8 pb-12 pt-8 ">
        <div>
          <div className="flex items-center justify-between">
            <div className="pb-4 flex flex-col items-start gap-2">
              <h1 className="text-2xl font-semibold tracking-tight">Preview</h1>
              <p className="text-sm font-normal text-muted-foreground">
                Curriculum vitae available for you to view
              </p>
            </div>
          </div>
          <Separator />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 border border-muted rounded-2xl shadow">
          <Image
            src="/images/projects/resume.png"
            width={910}
            height={1280}
            alt="Resume"
            className="order-2 md:order-1 object-cover shadow rounded-xl p-2"
          />
          <div className="order-1 md:order-2 flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Deployment</span>
              <Link href="/" className="font-semibold truncate">
                fathonymaulana.vercel.app
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Domains</span>
              <span className="font-semibold truncate">
                fathonymaulana.vercel.app/cv/Resume.pdf
              </span>
            </div>
            <div className="flex items-center gap-10 md:gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Status</span>
                <span className="font-semibold flex items-center gap-2">
                  <Circle
                    width={12}
                    height={12}
                    className="text-green-500 fill-green-500"
                  />
                  Ready
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground flex items-center gap-1">
                  Created <Info width={14} height={14} />
                </span>
                <span className="text-muted-foreground flex items-center gap-2">
                  1 yrs ago
                </span>
              </div>
            </div>
            <Link href="/cv/Resume.pdf" target="_blank">
              <Button>Download CV</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumVitae;
