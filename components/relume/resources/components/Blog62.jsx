"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Archive</p>
              <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                Notes from the community
              </h1>
              <p className="md:text-md">
                Essays, guides, and field notes from working artists
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:justify-end">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:gap-y-16 lg:grid-cols-2">
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-square w-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-start">
              <div className="rb-4 mb-3 flex w-full items-center justify-start sm:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Studio
                </p>
                <p className="inline text-sm font-semibold">4 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  Keeping a sketchbook alive when the work gets hard
                </h3>
              </a>
              <p>
                A working artist on the habit that keeps the practice honest.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-square w-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-start">
              <div className="rb-4 mb-3 flex w-full items-center justify-start sm:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Process
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  What no one tells you about photographing your own work
                </h3>
              </a>
              <p>
                Light, patience, and the cheap setup that works better than you
                think.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-square w-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-start">
              <div className="rb-4 mb-3 flex w-full items-center justify-start sm:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Community
                </p>
                <p className="inline text-sm font-semibold">3 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  How to run a market table without losing your mind
                </h3>
              </a>
              <p>
                Practical advice from artists who have done a hundred of them.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-square w-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-start">
              <div className="rb-4 mb-3 flex w-full items-center justify-start sm:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Money
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h3 className="text-xl font-bold md:text-2xl">
                  Pricing your work when you are afraid to
                </h3>
              </a>
              <p>
                A straightforward method for numbers that make sense to you.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-end md:hidden">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
