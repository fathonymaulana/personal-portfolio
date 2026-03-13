"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  title: string;
  folder: string;
  images: string[];
  mainImage?: string;
}

export default function ProjectGallery({
  title,
  folder,
  images,
  mainImage,
}: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(mainImage || images[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* Thumbnail Triggers */}
      <div className="flex w-full gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`relative flex-1 aspect-square rounded-xl overflow-hidden shadow-sm border transition-all ${
              activeImage === img
                ? "border-primary ring-2 ring-primary/20 opacity-100"
                : "border-border/50 bg-muted/10 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={`/images/projects/${folder}/${img}`}
              alt={`${title} Preview ${idx + 1}`}
              fill
              className="object-contain p-1 cursor-pointer"
            />
          </button>
        ))}
      </div>

      {/* Main Big Image Preview */}
      <div className="relative w-full rounded-2xl shadow-sm border border-border/50 bg-muted/5 p-4 lg:p-8 h-fit">
        <Image
          src={`/images/projects/${folder}/${activeImage}`}
          alt={`${title} Main View`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
