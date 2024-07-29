import { Separator } from "@/components/ui/separator";
import { AppWindowMac, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const IntroducingLink = () => {
  return (
    <div className="group inline-flex items-center text-sm font-medium">
      <Link href="" className="flex items-center gap-1">
        <AppWindowMac width={18} height={18} />
        <Separator
          orientation="vertical"
          className="shrink-0 bg-border w-[1px] mx-2 h-4"
        />
        <span className="underline-offset-4 group-hover:underline">
          Introducing nakama/preorder
        </span>
        <ArrowRight width={18} height={18} />
      </Link>
    </div>
  );
};

export default IntroducingLink;
