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
    <div
      className="content-banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="background-overlay"></div>
      <div className="hidden md:block">
        <PrismicNextImage field={imageBackgroundDesktop} alt="" />
      </div>
      <div className="block md:hidden">
        <PrismicNextImage field={imageBackgroundMobile} alt="" />
      </div>
      <div className="container-content py-[50px]">
        <div className="banner-content">
          <PrismicRichText field={title} />
          <div className="text-center">
            <PrismicLink field={buttonLink} className="inline-block btn-primary btn-large">{buttonName}</PrismicLink>
          </div>
        </div>
      </div> 
    </div>
  );
};

CallToActionWithBanner.propTypes = {
  slice: PropTypes.string,
};

export default CallToActionWithBanner;
