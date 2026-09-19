"use client";

import clsx from "clsx";
import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const TabItem = ({ tabItem, index, activeTab }) => {
  if (index !== activeTab) {
    return null;
  }
  const media = tabItem.image || tabItem.video?.image;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="size-full"
    >
      {media ? (
        <img
          src={media.src}
          alt={media.alt}
          className="size-full object-cover"
        />
      ) : null}
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-border-primary py-6", {
      "opacity-100": activeTab === index,
      "opacity-25": activeTab !== index,
    });
  };
  const getActiveTabButtonContentStyles = (index) => {
    return {
      height: activeTab === index ? "auto" : 0,
      opacity: activeTab === index ? 1 : 0,
    };
  };
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    activeTab,
  };
};

export function Layout492() {
  const useActive = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Honesty</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What we do not provide
          </h1>
          <p className="md:text-md">
            We are not a funding body, a physical gallery, or a legal service.
            We are a community and a digital wall for your work.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Apply" variant="secondary">
              Apply
            </Button>
            <Button
              title="About"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              About
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="mb-6 flex max-h-full w-full items-center justify-center overflow-hidden md:mb-0">
            <AnimatePresence initial={false}>
              <TabItem
                tabItem={{
                  heading: "From the studio floor",
                  description:
                    "Independent artists deserve a clear place to be found. We keep the focus on the work, the makers, and the people who care about both.",
                  image: {
                    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                    alt: "Relume placeholder image 1",
                  },
                }}
                index={0}
                activeTab={useActive.activeTab}
              />
              <TabItem
                tabItem={{
                  heading: "From the studio floor",
                  description:
                    "Independent artists deserve a clear place to be found. We keep the focus on the work, the makers, and the people who care about both.",
                  video: {
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
                      alt: "Relume placeholder image 2",
                    },
                    url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
                  },
                }}
                index={1}
                activeTab={useActive.activeTab}
              />
              <TabItem
                tabItem={{
                  heading: "From the studio floor",
                  description:
                    "Independent artists deserve a clear place to be found. We keep the focus on the work, the makers, and the people who care about both.",
                  image: {
                    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                    alt: "Relume placeholder image 3",
                  },
                }}
                index={2}
                activeTab={useActive.activeTab}
              />
            </AnimatePresence>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                No funding
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(0)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  We do not offer grants, stipends, or financial support. Your
                  practice stays yours, funded by your own hands.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                No funding
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(1)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  We do not offer grants, stipends, or financial support. Your
                  practice stays yours, funded by your own hands.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                No funding
              </h2>
              <motion.div
                initial={false}
                animate={useActive.getActiveTabButtonContentStyles(2)}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 md:mt-4">
                  We do not offer grants, stipends, or financial support. Your
                  practice stays yours, funded by your own hands.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
