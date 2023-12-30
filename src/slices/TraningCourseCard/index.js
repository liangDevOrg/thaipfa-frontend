import Link from "next/link";
import { PrismicImage, PrismicText } from "@prismicio/react";
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
  const isActive = data.is_active;

  return (
    <>
      <hr />
      <h1>Slicezone TrainingCourseCard</h1>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h1>{titleCourse}</h1>
        <p>{subTitleCourse}</p>

        {items.map((item) => (
          <div key={item.course_name}>
            {item.course_name}
            <br />
            <PrismicText field={item.course_description} />
            <PrismicImage
              field={item.course_image_icon}
              width={50}
              height={50}
            />
          </div>
        ))}

        <Link
          href={buttonAllNameLink.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {buttonAllNameCourse}
        </Link>
      </section>
    </>
  );
};

export default TraningCourse;
