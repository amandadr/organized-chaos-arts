"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header110() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
        <div className="flex h-full flex-col justify-between">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            The daily feed from Organized Chaos Arts
          </h2>
          <div className="ml-[7.5%]">
            <p className="md:text-md">
              Artist features, studio glimpses, event coverage, and community
              highlights. A living archive of the work being made right now.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8 md:flex-wrap">
              <Button title="Follow">Follow</Button>
              <Button title="Browse" variant="secondary">
                Browse
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          <div className="w-full">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="size-full object-cover aspect-[2/3]"
            />
          </div>
          <div className="w-full">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image 2"
              className="size-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
