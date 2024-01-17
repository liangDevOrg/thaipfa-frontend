/**
 * @typedef {import("@prismicio/client").Content.SpeakerSlice} SpeakerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpeakerSlice>} SpeakerProps
 * @param {SpeakerProps}
 */
const Speaker = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for speaker (variation: {slice.variation}) Slices
    </section>
  );
};

export default Speaker;
