import { PrismicRichText } from "@/components/PrismicRichText";
// import { color } from "@prismicio/client/dist/helpers/isFilled";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.FeeSlice} FeeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeeSlice>} FeeProps
 * @param {FeeProps}
 */
const Fee = ({ slice }) => {
  const data = slice.primary;
  
  const title = data.title;
  const subtitle = data.subtitle;
  const themeBackground = data.theme_background;
  const smallCourseName = data.small_course_name;
  const smallCoursePrice = data.small_course_price;
  const smallCourseCondition = data.small_course_condition;
  return (
    <div className="container-content full py-[50px] color-white text-center" style={{backgroundColor: themeBackground}}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{title}</h2>
      <h3>
        <PrismicRichText field={subtitle} />
      </h3>
      <div className="mt-[70px]">
        <p className="font-bold text-[26px]">{smallCourseName}</p>
        <p className="font-bold text-[50px]">{smallCoursePrice}</p>
        <p className="font-bold text-[26px]">{smallCourseCondition}</p>
      </div>
    </div>
  );
};

Fee.propTypes = {
  slice: PropTypes.string,
};

export default Fee;
