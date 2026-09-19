"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const options = {
    loop: true,
  };

  const plugins = [
    Autoplay({
      delay: 5000,
    }),
  ];

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return {
    options,
    plugins,
    api,
    setApi,
    handleDotClick,
    dotClassName,
  };
};

export function Header102() {
  const carousel = useCarousel();
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0"
    >
      <div className="mx-[5%] max-w-md justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Art from the neighborhood, made by hand
        </h1>
        <p className="md:text-md">
          Organized Chaos Arts is a local cultural hub for independent artists.
          We built this directory by hand so you can find the work and the
          people behind it.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Artists" asChild>
            <Link href="/artists">Artists</Link>
          </Button>
          <Button title="Gallery" variant="secondary" asChild>
            <Link href="/gallery">Gallery</Link>
          </Button>
        </div>
      </div>
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#ddd] text-center">
        <Carousel
          opts={carousel.options}
          plugins={carousel.plugins}
          setApi={carousel.setApi}
          className="relative left-0 right-0 z-10 block h-full overflow-hidden whitespace-nowrap pl-4"
        >
          <CarouselContent>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                  <div className="relative bg-background-secondary px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                        Independent arts community
                      </h6>
                      <p>No middlemen, no algorithms, just the work itself</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                  <div className="relative bg-background-secondary px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                        Independent arts community
                      </h6>
                      <p>No middlemen, no algorithms, just the work itself</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full whitespace-normal text-left align-top">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                    />
                  </div>
                  <div className="relative bg-background-secondary px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                        Independent arts community
                      </h6>
                      <p>No middlemen, no algorithms, just the work itself</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute bottom-[52px] left-8 right-auto top-auto flex w-full items-start justify-start">
              <button
                onClick={carousel.handleDotClick(0)}
                className={carousel.dotClassName(0)}
              />
              <button
                onClick={carousel.handleDotClick(1)}
                className={carousel.dotClassName(1)}
              />
              <button
                onClick={carousel.handleDotClick(2)}
                className={carousel.dotClassName(2)}
              />
            </div>
            <CarouselPrevious className="bottom-2 left-auto right-[5.5rem] top-auto size-12 bg-transparent md:right-24" />
            <CarouselNext className="bottom-2 left-auto right-8 top-auto size-12 bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
