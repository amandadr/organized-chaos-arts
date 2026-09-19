"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Welcome</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              For independent artists
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              This is a home for artists who want to be seen, not sold to. We
              built Organized Chaos to give independent creators a place to show
              their work and find their people.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Apply">Apply</Button>
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
