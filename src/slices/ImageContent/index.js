/**
 * @typedef {import("@prismicio/client").Content.ImageContentSlice} ImageContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageContentSlice>} ImageContentProps
 * @param {ImageContentProps}
 */
const ImageContent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_content (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageContent;
