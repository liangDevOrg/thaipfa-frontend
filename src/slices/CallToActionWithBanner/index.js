import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.CallToActionWithBannerSlice} CallToActionWithBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionWithBannerSlice>} CallToActionWithBannerProps
 * @param {CallToActionWithBannerProps}
 */
const CallToActionWithBanner = ({ slice }) => {
  const data = slice.primary;
  const title = data.title;
  const imageBackgroundDesktop = data.image_background_desktop;
  const imageBackgroundMobile = data.image_background_mobile;
  const buttonName = data.button_name;
  const buttonLink = data.button_link;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>
        <PrismicRichText field={title} />
      </h1>
      <PrismicNextImage field={imageBackgroundDesktop} alt="" />
      <PrismicNextImage field={imageBackgroundMobile} alt="" />
      <PrismicLink field={buttonLink}>{buttonName}</PrismicLink>
    </section>
  );
};

CallToActionWithBanner.propTypes = {
  slice: PropTypes.string,
};

export default CallToActionWithBanner;
