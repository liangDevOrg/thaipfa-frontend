"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }) => {
  const items = slice.items;

  return (
    <div className="hero-slider">
      <Carousel>
        {items.map((item) => (
          <div key={item.image_desktop.alt}>
            <PrismicNextImage
              field={item.image_desktop}
              alt=""
              className="hero-image"
            />
            <div className="hero-caption">
              <Typography variant="h2">
                อบรมหลักสูตร<br />การวางแผนการเงิน CFP
              </Typography>
              <Button className="btn-primary m-auto">
                สมัครเลย
              </Button>
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
