"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

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

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-black": current === index + 1,
      "bg-neutral-darker/40": current !== index + 1,
    });
  };

  return { api, setApi, handleDotClick, dotClassName };
};

export function Gallery18() {
  const carouselState = useCarousel();
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The work, in progress
            </h2>
            <p className="md:text-md">
              Unfinished pieces from the studio, where the process lives.
            </p>
          </div>
          <Carousel
            setApi={carouselState.setApi}
            opts={{ loop: true, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 4"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 5"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                  <div className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 6"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
              <button
                onClick={carouselState.handleDotClick(3)}
                className={carouselState.dotClassName(3)}
              />
              <button
                onClick={carouselState.handleDotClick(4)}
                className={carouselState.dotClassName(4)}
              />
              <button
                onClick={carouselState.handleDotClick(5)}
                className={carouselState.dotClassName(5)}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
