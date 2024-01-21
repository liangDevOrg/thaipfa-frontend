import { PrismicNextImage } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.ImageContentSlice} ImageContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageContentSlice>} ImageContentProps
 * @param {ImageContentProps}
 */
const ImageContent = ({ slice }) => {
  const data = slice.primary;
  const imageDesktop = data.image_desktop;
  const imageMobile = data.image_mobile;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <PrismicNextImage field={imageDesktop} alt="" />
      <PrismicNextImage field={imageMobile} alt="" />
    </section>
  );
};

ImageContent.propTypes = {
  slice: PropTypes.string,
};

export default ImageContent;
