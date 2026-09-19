"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
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
    // No TypeScript annotation
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `relative mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-white" : "bg-white/40"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Gallery13() {
  const carouselState = useCarousel();
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Maya Chen
          </h2>
          <p className="md:text-md">
            Her vessels hold the shape of old neighborhoods. See the full
            collection and read about her process in the studio.
          </p>
        </div>
      </div>
      <Carousel
        setApi={carouselState.setApi}
        opts={{ loop: true, align: "start" }}
        className="overflow-hidden"
      >
        <CarouselContent className="ml-0">
          <CarouselItem className="relative h-dvh pl-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="absolute inset-0 size-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative h-dvh pl-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 2"
              className="absolute inset-0 size-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-mt-8 ml-8 hidden lg:flex" />
        <CarouselNext className="-mt-8 mr-8 hidden lg:flex" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <button
            onClick={carouselState.handleDotClick(0)}
            className={carouselState.dotClassName(0)}
          />
          <button
            onClick={carouselState.handleDotClick(1)}
            className={carouselState.dotClassName(1)}
          />
        </div>
      </Carousel>
    </section>
  );
}
