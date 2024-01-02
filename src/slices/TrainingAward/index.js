import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.TrainingAwardSlice} TrainingAwardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrainingAwardSlice>} TrainingAwardProps
 * @param {TrainingAwardProps}
 */
const TrainingAward = ({ slice }) => {
  const data = slice.primary;
  const trainingAwardTitle = data.training_award_title;
  const trainingAwardSubtitle = data.training_award_subtitle;
  const isActive = data.is_active;
  const items = slice.items;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h2>Section TrainingAward</h2>
      <h4>{trainingAwardTitle}</h4>
      <PrismicRichText field={trainingAwardSubtitle} />

      {items.map((item) => (
        <div key={item.training_award_step}>
          <h5>{item.training_award_step}</h5>
          <p>{item.training_award_step_detail}</p>
        </div>
      ))}
    </section>
  );
};

export default TrainingAward;
