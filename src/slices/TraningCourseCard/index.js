/**
 * @typedef {import("@prismicio/client").Content.TraningCourseSlice} TraningCourseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TraningCourseSlice>} TraningCourseProps
 * @param {TraningCourseProps}
 */
const TraningCourse = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for traning_course (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TraningCourse;
