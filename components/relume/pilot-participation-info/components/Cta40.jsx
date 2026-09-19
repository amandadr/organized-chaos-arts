"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta40() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Want more details first?
            </h2>
            <p className="md:text-md">
              Read the full breakdown on the For Artists page. Or send us a
              question directly.
            </p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form className="rb-4 mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="you@example.com" />
                <Button
                  title="Sign up"
                  variant="primary"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  Sign up
                </Button>
              </form>
              <p className="text-xs">
                By clicking Sign Up you're confirming that you agree with our
                Terms and Conditions.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape4x3.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
