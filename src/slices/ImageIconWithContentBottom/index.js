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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>Slicezone ImageIconWithContentBottom</h1>
      {items.map((item) => (
        <div key={item.content_subject}>
          
          <PrismicImage field={item.image_icon} width={50} height={50}/>
          <PrismicRichText field={item.content_subject} />
        </div>
      ))}
    </section>
  );
};

export default ImageIconWithContentBottom;
