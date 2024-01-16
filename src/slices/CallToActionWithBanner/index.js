import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";

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
      <PrismicNextImage field={imageBackgroundDesktop} />
      <PrismicNextImage field={imageBackgroundMobile} />
      <PrismicLink field={buttonLink}>{buttonName}</PrismicLink>
    </section>
  );
};

export default CallToActionWithBanner;
