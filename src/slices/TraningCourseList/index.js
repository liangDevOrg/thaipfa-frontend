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

  const buttonAllNameCourse = data.button_all_name_course;
  const buttonAllNameLink = data.button_all_name_link;

  return (
    <>
      <div className="container-divider"></div>
      <div
        className="container-content py-[50px] lg:py-[100px]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="course-vertical">
          {items.map((item, index) => (
            <div className="box-course" key={index}>
              <PrismicNextLink
                href={item.course_button_link}
                rel="noopener noreferrer"
                target="_blank"
                className="btn-register"
              >
                {item.course_button_name}
              </PrismicNextLink>
              <p>{item.course_name}</p>
            </div>
          ))}
        </div>
        <div className="link-more text-center mt-[80px]">
          <PrismicNextLink field={buttonAllNameLink}>
            <span className="font-medium text-[20px]">
              {buttonAllNameCourse}
            </span>
          </PrismicNextLink>
          <i className="fa fa-play ml-[10px]" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

TraningCourseList.propTypes = {
  slice: PropTypes.string,
};

export default TraningCourseList;
