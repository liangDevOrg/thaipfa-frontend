import { PrismicNextLink } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.TraningCourseListSlice} TraningCourseListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TraningCourseListSlice>} TraningCourseListProps
 * @param {TraningCourseListProps}
 */
const TraningCourseList = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const title = data.title_course;
  const subtitle = data.subtitle_course;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>{title}</h1>
      <h5>{subtitle}</h5>

      {items.map((item, index) => (
        <div key={index}>
          <h5>{item.course_name}</h5>
          <PrismicNextLink
            href={item.course_button_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>{item.course_button_name}</h5>
          </PrismicNextLink>
        </div>
      ))}
    </section>
  );
};

TraningCourseList.propTypes = {
  slice: PropTypes.string,
};

export default TraningCourseList;
