"use client";

import React from "react";

export function Layout9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              The work comes from walking the city at night
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Mara started documenting late-night markets in 2019 with a
              disposable camera. The photographs became drawings, then rooms,
              then entire installations built from what the city left behind.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-8"
                  />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    The work
                  </h6>
                  <p>
                    Found objects collected from alleys and construction sites
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-8"
                  />
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    The artist
                  </h6>
                  <p>
                    Dried plants gathered from vacant lots and sidewalk cracks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
