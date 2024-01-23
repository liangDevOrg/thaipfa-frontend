import { PrismicRichText } from "@/components/PrismicRichText";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>{title}</h1>
      <PrismicRichText field={subtitle} />
      <p> use theme color {themeBackground}</p>
      <h6>{smallCourseName}</h6>
      <h6>{smallCoursePrice}</h6>
      <h6>{smallCourseCondition}</h6>
    </section>
  );
};

export default Fee;
