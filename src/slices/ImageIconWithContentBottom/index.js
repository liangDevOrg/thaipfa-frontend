/**
 * @typedef {import("@prismicio/client").Content.ImageIconWithContentBottomSlice} ImageIconWithContentBottomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageIconWithContentBottomSlice>} ImageIconWithContentBottomProps
 * @param {ImageIconWithContentBottomProps}
 */
const ImageIconWithContentBottom = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_icon_with_content_bottom (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ImageIconWithContentBottom;
