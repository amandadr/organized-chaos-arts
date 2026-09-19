"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Contact</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Find us
          </h2>
          <p className="md:text-md">The feed is one door. There are others.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Write to us about anything.</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call during market hours.</p>
              <a className="underline" href="#">
                +1 (555) 000-0000
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Office
              </h3>
              <p className="mb-2">123 Sample St, Sydney NSW 2000 AU</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get Directions"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
