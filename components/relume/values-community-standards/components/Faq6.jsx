"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          FAQs
        </h2>
        <p className="md:text-md">
          Questions about how we keep this space fair and safe for everyone.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How do I report a concern?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Send a message through the Contact page. A community moderator
              will review it within three business days. All reports are handled
              with discretion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How are standards enforced?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We start with a direct conversation. If a pattern continues, the
              moderator team may issue a warning or remove a listing. Removal is
              always a last resort.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I propose changes?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes. Any member can suggest an update to these standards.
              Proposals are discussed openly before the community decides
              together.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What counts as a violation?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Harassment, plagiarism, or misrepresenting another artist's work.
              Anything that makes the space unsafe for others. We keep the list
              short and clear.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Who makes final decisions?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The moderator team reviews each case. They follow the written
              standards, not personal preference. Decisions can be appealed by
              any member.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
