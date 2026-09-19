"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Values</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Shared community standards
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Organized Chaos is built on a simple idea. Art grows best in a
              space where everyone knows the ground rules and respects the
              people making the work.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Read">Read</Button>
              <Button title="Contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
