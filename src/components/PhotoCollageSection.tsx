"use client";

import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  name: string; // One-word descriptor, normal title case
  span: string;
  objectPosition?: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: "vibe-amma",
    src: "/photos/vibe-amma-sq.jpg",
    alt: "Warm silhouette shadow of mother lifting her baby in the air",
    name: "Amma",
    span: "col-span-2 row-span-2",
    objectPosition: "object-center",
  },
  {
    id: "vibe-yellove",
    src: "/photos/vibe-yellove-sq.png",
    alt: "MS Dhoni and Suresh Raina in iconic Chennai Super Kings Yellove celebration",
    name: "Yellove",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-goat",
    src: "/photos/vibe-thala-sq.png",
    alt: "MS Dhoni walking towards the G.O.A.T sign with jersey number 7",
    name: "G.O.A.T",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-rockstar",
    src: "/photos/vibe-rockstar-sq.png",
    alt: "Ravindra Jadeja iconic bat celebration in test match whites - The Rockstar",
    name: "Rockstar",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-alone",
    src: "/photos/vibe-alone-sq.jpg",
    alt: "Peaceful silhouette gazing up at the glowing full moon under starry night skies",
    name: "Alone :)",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-nature",
    src: "/photos/vibe-peaks.png",
    alt: "Panoramic green mountain peaks and clouds in nature across the Western Ghats",
    name: "Nature",
    span: "col-span-2 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-kichcha",
    src: "/photos/vibe-baadshah-sq.png",
    alt: "Kichcha Sudeep iconic joyful smile and stretched arms",
    name: "Kichcha",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
  {
    id: "vibe-raghudixit",
    src: "/photos/vibe-raghudixit-sq.png",
    alt: "Raghu Dixit singing enthusiastically with acoustic guitar in scenic nature",
    name: "Raghu Dixit",
    span: "col-span-1 row-span-1",
    objectPosition: "object-center",
  },
];

export function PhotoCollageSection() {
  const [activePhotoId, setActivePhotoId] = React.useState<string | null>(null);

  return (
    <section id="curated-vibes" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 scroll-mt-20">
      <div className="space-y-6">
        {/* Section Heading: Curated Vibes */}
        <ScrollReveal className="text-left px-3 sm:px-4">
          <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--ink)] font-semibold">
            Curated Vibes
          </h2>
        </ScrollReveal>

        {/* Non-Uniform Photo Collage Grid */}
        <div className="px-3 sm:px-4">
          <StaggerContainer
            staggerDelay={0.07}
            className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[135px] xs:auto-rows-[150px] sm:auto-rows-[165px] md:auto-rows-[180px] gap-2.5 xs:gap-3 sm:gap-3.5"
          >
            {PHOTOS.map((photo) => {
              const isActive = activePhotoId === photo.id;
              return (
                <StaggerItem key={photo.id} className={`${photo.span} h-full`}>
                  <div
                    onClick={() => setActivePhotoId((prev) => (prev === photo.id ? null : photo.id))}
                    role="button"
                    tabIndex={0}
                    aria-label={`${photo.name} - ${photo.alt}`}
                    className="group relative w-full h-full overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] shadow-2xs hover:border-[var(--hairline-strong)] cursor-pointer focus:outline-none transition-all duration-300"
                  >
                    {/* Photo Image: Black & White by default, reveals color and subtle scale on hover or tap */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-700 ease-out ${
                        photo.objectPosition || "object-center"
                      } ${
                        isActive
                          ? "grayscale-0 contrast-100 scale-105"
                          : "grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
                      }`}
                    />

                    {/* Corner One-Word Descriptor on Hover/Tap (No background, normal casing, template font) */}
                    <div
                      className={`absolute bottom-3 left-3 transition-all duration-300 transform pointer-events-none ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                      }`}
                    >
                      <span className="font-sans text-xs sm:text-sm font-medium text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] tracking-tight">
                        {photo.name}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
