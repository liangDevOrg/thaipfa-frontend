import Link from "next/link";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{titleCourse}</h1>
      <p>{subTitleCourse}</p>
      <Link
        href={buttonAllNameLink.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {buttonAllNameCourse}
      </Link>

      <ul>
        <li></li>
      </ul>
    </section>
  );
};

export default TraningCourse;
