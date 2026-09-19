"use client";

import React, { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Content29() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-20">
            <Fragment>
              <h3>Introduction</h3>
              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
              </p>
              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
              <figure>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
                <figcaption>Image caption goes here</figcaption>
              </figure>
              <h6>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </h6>
              <p>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                imperdiet commodo consectetur convallis risus. Sed condimentum
                enim dignissim adipiscing faucibus consequat, urna. Viverra
                purus et erat auctor aliquam. Risus, volutpat vulputate posuere
                purus sit congue convallis aliquet. Arcu id augue ut feugiat
                donec porttitor neque. Mauris, neque ultricies eu vestibulum,
                bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus,
                pharetra, porttitor.
              </p>
              <blockquote>
                "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus."
              </blockquote>
              <p>
                Tristique odio senectus nam posuere ornare leo metus, ultricies.
                Blandit duis ultricies vulputate morbi feugiat cras placerat
                elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                pellentesque suscipit accumsan. Cursus viverra aenean magna
                risus elementum faucibus molestie pellentesque. Arcu ultricies
                sed mauris vestibulum.
              </p>
              <h4>Conclusion</h4>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </p>
              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor.Nulla adipiscing erat a erat.
                Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </Fragment>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="sm:max-w-1/2">
              <p className="font-semibold md:text-md">Share this post</p>
              <div className="mt-3 flex items-start gap-2 md:mt-4">
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLinkAlt className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoFacebookCircle className="size-6" />
                </a>
              </div>
            </div>
            <div className="sm:max-w-1/2">
              <ul className="flex flex-wrap gap-2 sm:justify-end">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Process
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Studio
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Community
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Making
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-8 h-px bg-border-primary md:my-12" />
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
              alt="Logo"
              className="size-14 rounded-full object-cover"
            />
            <div className="grow">
              <p className="font-semibold md:text-md">Mara Voss</p>
              <p>Writer, Organized Chaos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
