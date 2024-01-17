import { PrismicRichText } from "@/components/PrismicRichText";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.TrainingAwardSlice} TrainingAwardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrainingAwardSlice>} TrainingAwardProps
 * @param {TrainingAwardProps}
 */
const TrainingAward = ({ slice }) => {
  const data = slice.primary;
  const trainingAwardHighlight = data.training_award_highlight;
  const trainingAwardTitle = data.training_award_title;
  const trainingAwardSubtitle = data.training_award_subtitle;
  const items = slice.items;
  return (
    <div
      className="container-content timeline py-[50px] lg:py-[100px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="content-timeline">
        <h2>
          {trainingAwardHighlight}
          {trainingAwardTitle}
        </h2>
        <h3>
          <PrismicRichText field={trainingAwardSubtitle} />
        </h3>
        <div className="timeline">
          <div className="outer">
            {items.map((item, index) => (
              <div className="card" key={index}>
                <div className="info">
                  <h4 className="title">{item.training_award_step}</h4>
                  <p>{item.training_award_step_detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TrainingAward.propTypes = {
  slice: PropTypes.string,
};

export default TrainingAward;
