"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Artist</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Mara Voss
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Mixed media and installation artist working in Chicago. Her work
              examines urban decay and small acts of care.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Follow">Follow</Button>
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
