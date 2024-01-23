/**
 * @typedef {import("@prismicio/client").Content.FeeSlice} FeeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeeSlice>} FeeProps
 * @param {FeeProps}
 */
const Fee = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fee (variation: {slice.variation}) Slices
    </section>
  );
};

export default Fee;
