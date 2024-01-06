import { PrismicImage } from "@prismicio/react";

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
    <div className="content-banner no-text"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hidden md:block">
        <PrismicImage field={imageDesktop} />
      </div>
      <div className="block md:hidden">
        <PrismicImage field={imageMobile} /> 
      </div>
    </div>
  );
};

export default BannerSection;
