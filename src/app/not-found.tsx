import React from "react";
import Container from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center w-full px-8">
        <div className="flex flex-row items-center gap-6">
          <h1 className="text-2xl font-semibold tracking-tight pr-6 border-r border-border">
            404
          </h1>
          <p className="text-sm">This page could not be found.</p>
        </div>
      </div>
    </Container>
  );
}
