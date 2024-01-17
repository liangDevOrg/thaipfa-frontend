import PropTypes from "prop-types";
import { PrismicImage, PrismicLink, PrismicText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.TraningCourseSlice} TraningCourseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TraningCourseSlice>} TraningCourseProps
 * @param {TraningCourseProps}
 */
const TraningCourse = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const titleCourse = data.title_course;
  const subTitleCourse = data.subtitle_course;
  const buttonAllNameCourse = data.button_all_name_course;
  const buttonAllNameLink = data.button_all_link_course;

  return (
    <div
      className="container-content py-[50px] lg:py-[100px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{titleCourse}</h2>
      <h3>{subTitleCourse}</h3>
      <div className="course-horizontal">
        {items.map((item, index) => (
          <div className="box-course" key={index}>
            <PrismicLink field={item.course_button_link}>
              <PrismicImage field={item.course_image_icon} />
              <h4>{item.course_name}</h4>
              <p>
                <PrismicText field={item.course_description} />
              </p>
            </PrismicLink>
          </div>
        ))}
      </div>
      <div className="link-more text-center mt-[80px]">
        <PrismicLink field={buttonAllNameLink}>
          <span className="font-medium text-[20px]">{buttonAllNameCourse}</span>
        </PrismicLink>
        <i className="fa fa-play ml-[10px]" aria-hidden="true"></i>
      </div>
    </div>
  );
};

TraningCourse.propTypes = {
  slice: PropTypes.string,
};

export default TraningCourse;
