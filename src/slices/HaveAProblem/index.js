/**
 * @typedef {import("@prismicio/client").Content.HaveAProblemSlice} HaveAProblemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HaveAProblemSlice>} HaveAProblemProps
 * @param {HaveAProblemProps}
 */
const HaveAProblem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for have_a_problem (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HaveAProblem;
