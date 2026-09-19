"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog64() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-x-20">
          <div className="rb-12 flex flex-col md:items-end md:justify-between">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Archive</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Keep reading the archive
              </h1>
              <p className="md:text-md">
                More stories from the community, the studios, and the street.
              </p>
              <div className="mt-6 md:mt-8">
                <Button title="View all" variant="secondary">
                  View all
                </Button>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr items-start gap-12 md:gap-y-16">
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Studio
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    A morning in the studio with a printmaker
                  </h3>
                </a>
                <p className="line-clamp-2">
                  Ink, pressure, and patience. A look at the process behind the
                  work.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Market
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    What we learned from the first pilot market
                  </h3>
                </a>
                <p className="line-clamp-2">
                  Rain, good coffee, and a lot of conversations. Notes from the
                  ground.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Process
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="text-xl font-bold md:text-2xl">
                    Why artists need a place to be messy
                  </h3>
                </a>
                <p className="line-clamp-2">
                  The best work starts before anyone knows what it is.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
