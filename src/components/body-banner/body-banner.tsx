import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

const BodyBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16 bg-foreground text-background rounded-2xl">
      <div>
        <Badge variant="secondary">Get in touch</Badge>
      </div>
      <div className="space-y-4">
        <div className="text-4xl leading-tight tracking-tighter font-semibold">
          <p className="text-muted-foreground">HAVE AN IDEA?</p>
          <p className="">LET&apos;S DO IT TOGETHER!</p>
        </div>
        <p className="text-sm text-muted-foreground">
          Don&apos;t put your creativity on hold and let&apos;s build a
          professional web experience which will put you above your competitors.
        </p>
        <Link href="/about/Contacts" className="flex">
          <Button variant="secondary" className="w-full md:w-fit flex items-center gap-1">
            Contact
            <ArrowRight width={18} height={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BodyBanner;
