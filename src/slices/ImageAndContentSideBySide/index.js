/**
 * @typedef {import("@prismicio/client").Content.ImageAndContentSideBySideSlice} ImageAndContentSideBySideSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndContentSideBySideSlice>} ImageAndContentSideBySideProps
 * @param {ImageAndContentSideBySideProps}
 */
const ImageAndContentSideBySide = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_and_content_side_by_side (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ImageAndContentSideBySide;
