"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout378() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Values</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What this place stands for
            </h2>
            <p className="md:text-md">
              We built this for the working artist. The one with clay under
              their nails and paint on their jeans.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Values</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Accessibility
                  </h3>
                  <p>
                    Art should be seen by everyone. We build for clear
                    navigation, strong contrast, and readable text. No
                    exceptions.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="About"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    About
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Artist support
                  </h3>
                  <p>
                    We link to your shop. We do not take a cut. Your sales are
                    your business.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Values"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Values
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Artist support
                  </h3>
                  <p>
                    We link to your shop. We do not take a cut. Your sales are
                    your business.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Values"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Values
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold">Community</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Local culture
                  </h3>
                  <p>
                    This is a hub for the people making art in your
                    neighborhood. The community is the point.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Values" variant="secondary">
                    Values
                  </Button>
                  <Button
                    title="Resources"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Resources
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
          </div>
        </div>
      </div>
    </section>
  );
}
