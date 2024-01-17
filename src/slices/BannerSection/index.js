import { PrismicImage } from "@prismicio/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.BannerSectionSlice} BannerSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSectionSlice>} BannerSectionProps
 * @param {BannerSectionProps}
 */
const BannerSection = ({ slice }) => {
  const data = slice.primary;

  const imageDesktop = data.image_desktop;
  const imageMobile = data.image_mobile;

  return (
    <div
      className="content-banner no-text"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hidden md:block">
        <PrismicImage field={imageDesktop} alt="" />
      </div>
      <div className="block md:hidden">
        <PrismicImage field={imageMobile} alt="" />
      </div>
    </div>
  );
};

BannerSection.propTypes = {
  slice: PropTypes.string,
};

export default BannerSection;
