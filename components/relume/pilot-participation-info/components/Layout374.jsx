"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout374() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Benefits</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why join the pilot
            </h2>
            <p className="md:text-md">
              You get seen, you get heard, and you help build something useful.
              The work stays yours.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:row-span-2">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold">Benefits</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Exposure
                  </h3>
                  <p>
                    Your work appears in a curated gallery and featured artist
                    spots. People find you without an algorithm.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Apply" variant="secondary">
                    Apply
                  </Button>
                  <Button
                    title="FAQ"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    FAQ
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 5"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Exposure</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Community
                  </h3>
                  <p>
                    You connect with other working artists who understand the
                    grind. No networking events, just real conversations.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Exposure</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Community
                  </h3>
                  <p>
                    You connect with other working artists who understand the
                    grind. No networking events, just real conversations.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Exposure</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Community
                  </h3>
                  <p>
                    You connect with other working artists who understand the
                    grind. No networking events, just real conversations.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Exposure</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Community
                  </h3>
                  <p>
                    You connect with other working artists who understand the
                    grind. No networking events, just real conversations.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
