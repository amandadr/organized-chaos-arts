"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Gallery</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Fresh off the wall
          </h2>
          <p className="md:text-md">
            A few recent pieces from the directory. Click through to see the
            whole room.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Marcus Webb</a>
            </h3>
            <p>
              Silver gelatin print from the last summer at the corner store.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Photography
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Film
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Documentary
                </a>
              </li>
            </ul>
            <Button
              title="View work"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View work</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Maya Chen</a>
            </h3>
            <p>
              Stoneware vessel with ash glaze. Fired during the January cold
              snap.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Ceramics
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Stoneware
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Handbuilt
                </a>
              </li>
            </ul>
            <Button
              title="View work"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View work</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Elena Ruiz</a>
            </h3>
            <p>
              Linocut on handmade paper. An edition of twelve, all pulled by
              hand.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Printmaking
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Linocut
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  Edition
                </a>
              </li>
            </ul>
            <Button
              title="View work"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View work</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
