import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.ImageIconWithContentBottomSlice} ImageIconWithContentBottomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageIconWithContentBottomSlice>} ImageIconWithContentBottomProps
 * @param {ImageIconWithContentBottomProps}
 */
const ImageIconWithContentBottom = ({ slice }) => {
  const items = slice.items;

  return (
    <div
      className="container-content py-[50px] lg:py-[100px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="content-with-icon lesson">
        <div className="content">
          {items.map((item, index) => (
            <div className="box-item" key={index}>
              <PrismicNextImage field={item.image_icon} alt=""/>
              <PrismicRichText field={item.content_subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageIconWithContentBottom.propTypes = {
  slice: PropTypes.string,
};

export default ImageIconWithContentBottom;
