"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute -ml-8 flex h-full w-8 items-start justify-center">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
      />
    </div>
  );
};

export function Timeline5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Where we are</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              We are building this thing in the open
            </h2>
            <p className="md:text-md">
              Organized Chaos is pre-incorporation and in a pilot stage. We are
              testing the idea, learning from artists, and building toward a
              co-operative structure.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Artists" variant="secondary">
                Artists
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-8 flex-col items-center md:left-auto">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-20">
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Now
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Pilot stage
                </h4>
                <p>
                  We are working with a small group of Atlantic Canadian artists
                  to test the platform. Their feedback shapes everything we
                  build.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Artists</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Next
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Co-operative incorporation
                </h4>
                <p>
                  We are moving toward a formal co-operative structure. Artists
                  will have ownership and a real say in how the platform runs.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Artists</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Later
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Artist-led community
                </h4>
                <p>
                  The goal is a self-sustaining community platform owned and
                  shaped by the artists who use it. No outside investors, no
                  gatekeepers.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Artists</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Always
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Built on values
                </h4>
                <p>
                  Accessibility, artist ownership, inclusivity, community care,
                  creative autonomy, and practical support guide every decision
                  we make.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary">Artists</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
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
