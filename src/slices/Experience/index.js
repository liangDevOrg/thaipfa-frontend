/**
 * @typedef {import("@prismicio/client").Content.ExperienceSlice} ExperienceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExperienceSlice>} ExperienceProps
 * @param {ExperienceProps}
 */
const Experience = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for experience (variation: {slice.variation}) Slices
    </section>
  );
};

export default Experience;
