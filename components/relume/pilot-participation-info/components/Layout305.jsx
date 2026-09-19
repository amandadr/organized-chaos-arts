"use client";

import React from "react";

export function Layout305() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            What you get in the pilot
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                A profile that is yours
              </h3>
              <p>A clean space for your work and your story.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Your work in the gallery
              </h3>
              <p>A curated room where people actually look.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Promotion without the noise
              </h3>
              <p>We share your work with people who care.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                A room full of artists
              </h3>
              <p>Real conversations with people who make things.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
