import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

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
  console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>{experienceTitle}</h1>
      <h5>{experienceSubtitle}</h5>

      {items.map((item, index) => (
        <div key={index}>
          <PrismicNextLink document={item.experience_link_youtube}>
            <PrismicNextImage field={item.experience_image} />
          </PrismicNextLink>
        </div>
      ))}
    </section>
  );
};

export default Experience;
