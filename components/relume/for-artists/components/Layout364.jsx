"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout364() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Receive</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What you get when you join
            </h2>
            <p className="md:text-md">
              A real place to stand, not a funnel to fall through.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary p-6 md:p-8 lg:p-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                A community that actually looks at your work
              </h3>
              <p>
                Other artists, curious people, and collectors who read past the
                first image.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Apply</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Gallery
              </Button>
            </div>
          </div>
          <div className="border border-border-primary p-6 md:p-8 lg:p-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                A gallery that treats your art like the main event
              </h3>
              <p>
                Your work gets the room it deserves. No thumbnails lost in a
                feed.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Apply</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Artists
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
