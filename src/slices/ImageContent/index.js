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
  const isImageContainer = data.is_image_container;
  return (
    <>
      <div
        className={`content-image ${isImageContainer ? "fixed-width" : ""}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="hidden md:block">
          <PrismicNextImage field={imageDesktop} alt="" />
        </div>
        <div className="block md:hidden">
          <PrismicNextImage field={imageMobile} alt="" />
        </div>
      </div>
    </>
    
  );
};

ImageContent.propTypes = {
  slice: PropTypes.string,
};

export default ImageContent;
