/**
 * @typedef {import("@prismicio/client").Content.TrainingAwardSlice} TrainingAwardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrainingAwardSlice>} TrainingAwardProps
 * @param {TrainingAwardProps}
 */
const TrainingAward = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for training_award (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TrainingAward;
