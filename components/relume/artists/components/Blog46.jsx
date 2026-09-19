"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog46() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Notes</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              From the community board
            </h2>
            <p className="md:text-md">
              Calls for work, studio visits, and artist-to-artist advice.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-video size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Open call
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Submit your work for the spring group show
              </h2>
            </a>
            <p>
              We are looking for new pieces about weather, memory, and the
              spaces between.
            </p>
            <Button
              title="View all"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              View all
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-video size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Spotlight
              </p>
              <p className="inline text-sm font-semibold">6 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Inside June Park's tiny printmaking studio
              </h2>
            </a>
            <p>
              A tour of the press, the ink shelf, and the window that faces the
              train yard.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center md:mt-20">
          <Button variant="secondary">Read more</Button>
        </div>
      </div>
    </section>
  );
}
