"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline20() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The road from form to profile
            </h2>
            <p className="md:text-md">
              You send the form. We handle the rest. The work stays yours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Apply" variant="secondary">
                Apply
              </Button>
              <Button
                title="FAQ"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                FAQ
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-normal">
          <div className="relative hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="flex flex-col items-center md:w-full md:flex-row">
              <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
            <Fragment>
              <div className="hidden md:block" />
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-8 flex flex-col items-start md:mb-0 md:mr-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Form</h3>
                <p>
                  Send the interest form. Tell us who you are and what you make.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
            <Fragment>
              <div className="order-last mb-8 flex flex-col items-start md:order-none md:mb-0 md:mr-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Intake</h3>
                <p>We ask for your bio, images, links, and what you prefer.</p>
              </div>
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="hidden md:block" />
            </Fragment>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
            <Fragment>
              <div className="hidden md:block" />
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-8 flex flex-col items-start md:mb-0 md:mr-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Build</h3>
                <p>
                  We shape your profile and gallery presence from what you gave
                  us.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
            <Fragment>
              <div className="order-last mb-8 flex flex-col items-start md:order-none md:mb-0 md:mr-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Approve</h3>
                <p>You review the page. We adjust until it feels right.</p>
              </div>
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="hidden md:block" />
            </Fragment>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
            <Fragment>
              <div className="hidden md:block" />
              <div className="flex flex-col items-center md:w-full md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full hidden md:block" />
              </div>
              <div className="mb-8 flex flex-col items-start md:mb-0 md:mr-4">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Publish</h3>
                <p>
                  Your work goes live. We gather feedback and keep improving.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}
