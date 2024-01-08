import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="hero-slider">
      <div className="hero-backdrop"></div>
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="slider-image"
        />
      )}
      <div className="hero-caption">
        <Bounded yPadding="lg">
          <PrismicRichText
            field={slice.primary.text}
            components={components}
          />
          {prismic.isFilled.link(slice.primary.buttonLink) && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="inline-block btn-primary"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicNextLink>
          )}
        </Bounded>
      </div>
    </section>
  );
};

export default Hero;
