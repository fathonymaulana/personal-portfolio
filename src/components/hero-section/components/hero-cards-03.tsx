import React from "react";
import { Circle, Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const HeroCards03 = () => {
  return (
    <div className="flex items-center justify-center [&>div]:w-full">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex-col p-6 items-start gap-4 space-y-0">
          <div className="space-y-1">
            <h3 className="font-semibold leading-none tracking-tight">
              Cookie Settings Examples
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your cookie settings here.
            </p>
          </div>
        </div>
        <div className="p-6 pt-0 grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="terms" className="flex flex-col">
              <span>Strictly Necessary</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies are essential in order to use the website and use
                its features.
              </span>
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="terms" className="flex flex-col">
              <span>Functional Cookies</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="terms" className="flex flex-col">
              <span>Performance Cookies</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <Button variant="outline" className="w-full">Save preferences</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCards03;
