import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicImage } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ImageIconWithContentBottomSlice} ImageIconWithContentBottomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageIconWithContentBottomSlice>} ImageIconWithContentBottomProps
 * @param {ImageIconWithContentBottomProps}
 */
const ImageIconWithContentBottom = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;

  return (
    <div className="container-content py-[50px] lg:py-[100px]" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="content-with-icon lesson">
        <div className="content">
          {items.map((item) => (
            <div className="box-item" key={item.content_subject}>
              <PrismicImage field={item.image_icon} />
              <PrismicRichText field={item.content_subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageIconWithContentBottom;
