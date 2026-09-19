"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer8() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <a href="#" className="mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Organized Chaos Arts"
                className="inline-block"
              />
            </a>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-semibold md:mb-4">Subscribe</p>
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-xs">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col items-start justify-start pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between md:pb-0 md:pt-8 md:text-center">
          <ul className="grid grid-flow-row grid-cols-[max-content] gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            <li className="underline decoration-black underline-offset-1">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
          <p>© Organized Chaos Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
