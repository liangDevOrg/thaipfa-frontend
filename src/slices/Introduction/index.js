import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.IntroductionSlice} IntroductionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroductionSlice>} IntroductionProps
 * @param {IntroductionProps}
 */
const Introduction = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const title =data.title;
  const themeBackground = data.theme_background;
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{title}</h1>
      <p>{themeBackground}</p>
      {items.map((item, index) => (
        <li key={index}>
          <p>{item.subject}</p>
        </li>
      ))}
    </section>
  );
};

Introduction.propTypes = {
  slice: PropTypes.string,
};

export default Introduction;
