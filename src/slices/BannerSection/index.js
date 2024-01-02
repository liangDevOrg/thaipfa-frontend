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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h2>Banner Section</h2>
      <PrismicImage field={imageDesktop} />
      <PrismicImage field={imageMobile} />
    </section>
  );
};

export default BannerSection;
