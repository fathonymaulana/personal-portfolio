import React from "react";
import { Circle, Star } from "lucide-react";

const HeroCards01 = () => {
  return (
    <div className="flex items-center justify-center [&>div]:w-full">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex-col p-6 items-start gap-4 space-y-0">
          <div className="space-y-1">
            <h3 className="font-semibold leading-none tracking-tight">
              fm/portfolio journey...
            </h3>
            <p className="text-sm text-muted-foreground">
              I started my professional career as a frontend developer around 2022.
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Circle width={14} height={14} />
              TypeScript
            </div>
            <div className="flex items-center gap-1">
              <Star width={14} height={14} />
              20k
            </div>
            <div>Updated 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards01;
