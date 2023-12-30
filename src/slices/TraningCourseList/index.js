/**
 * @typedef {import("@prismicio/client").Content.TraningCourseListSlice} TraningCourseListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TraningCourseListSlice>} TraningCourseListProps
 * @param {TraningCourseListProps}
 */
const TraningCourseList = ({ slice }) => {

  const data = slice.primary;
  console.log(data);


  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        Placeholder component for traning_course_list (variation:{" "}
        {slice.variation}) Slices
      </section>
    </>
  );
};

export default TraningCourseList;
