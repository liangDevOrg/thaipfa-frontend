"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Carousel } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }) => {
  const items = slice.items;

  return (
    <div className="hero-slider">
      <Carousel>
        {items.map((item, index) => (
          <div key={index}>
            <PrismicNextImage
              field={item.image_desktop}
              alt=""
              className="hero-image"
            />
            <div className="hero-caption">
              <h2>
                <PrismicRichText field={item.title} />
              </h2>
              <PrismicNextLink
                field={item.button_link}
                className="btn-primary m-auto"
              >
                {item.button_name}
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Hero.propTypes = {
  slice: PropTypes.string,
};

export default Hero;
