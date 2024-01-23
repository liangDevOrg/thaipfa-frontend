import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.ImageAndContentSideBySideSlice} ImageAndContentSideBySideSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndContentSideBySideSlice>} ImageAndContentSideBySideProps
 * @param {ImageAndContentSideBySideProps}
 */
const ImageAndContentSideBySide = ({ slice }) => {
  const data = slice.primary;
  
  const imageDesktop = data.image_desktop;
  const imageMobile = data.image_mobile;
  const themeBackground = data.theme_background;

  const content = data.content;
  return (
    <div className="container-content full p-0" style={{backgroundColor: themeBackground}}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="content-side-by-side">
        <div className="side-left">
          <div className="hidden md:block">
            <PrismicNextImage field={imageDesktop} alt=""/>
          </div>
          <div className="block md:hidden">
            <PrismicNextImage field={imageMobile} alt=""/>
          </div>
        </div>
        <div className="content-right color-white">
          <PrismicRichText field={content} />
        </div>
      </div>
    </div>
  );
};

ImageAndContentSideBySide.propTypes = {
  slice: PropTypes.string,
};

export default ImageAndContentSideBySide;
