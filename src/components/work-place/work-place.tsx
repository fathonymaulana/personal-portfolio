import Image from "next/image";
import React from "react";

const companies = [
  "image%205.png", // Depending on the actual filename match - will use 8 from folder
  "image%204.png",
  "image%203.png",
  "Union.png",
  "image%206.png",
  "image%207.png",
  "image%208.png",
  "image%209.png",
  "siliwangi.svg",
];

const WorkPlace = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 flex flex-col items-center justify-center gap-12 w-full border-b border-border"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl px-4">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans">
          Trusted By
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Featured In
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          I&apos;ve been proudly featured on renowned platforms.
        </p>
      </div>

      {/* Logos Marquee */}
      <div className="relative flex w-full max-w-5xl overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
          {[...companies, ...companies].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 md:p-8"
            >
              <div className="relative w-28 h-10 md:w-36 md:h-12 hover:scale-105 transition-transform duration-300">
                <Image
                  src={`/images/companies/${logo}`}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPlace;
