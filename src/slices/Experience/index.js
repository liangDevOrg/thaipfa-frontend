import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.ExperienceSlice} ExperienceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExperienceSlice>} ExperienceProps
 * @param {ExperienceProps}
 */
const Experience = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const experienceTitle = data.experience_title;
  const experienceSubtitle = data.experience_subtitle;

  return (
    <div
      className="container-content experience py-[50px] lg:py-[100px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{experienceTitle}</h2>
      <h3>{experienceSubtitle}</h3>
      <div className="box-experience">
        {items.map((item, index) => (
          <div key={index}>
            <PrismicNextLink document={item.experience_link_youtube}>
              <PrismicNextImage alt="" field={item.experience_image} />
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
};

Experience.propTypes = {
  slice: PropTypes.string,
};

export default Experience;
