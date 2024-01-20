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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <PrismicNextImage field={imageDesktop} alt=""/>
      <PrismicNextImage field={imageMobile} alt=""/>
      {themeBackground}
      <div><PrismicRichText field={content} /></div>
    </section>
  );
};

ImageAndContentSideBySide.propTypes = {
  slice: PropTypes.string,
};

export default ImageAndContentSideBySide;
