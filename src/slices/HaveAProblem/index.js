import { PrismicImage, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HaveAProblemSlice} HaveAProblemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HaveAProblemSlice>} HaveAProblemProps
 * @param {HaveAProblemProps}
 */
const HaveAProblem = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  
  const haveAProblemTitle = data.have_a_problem_title;
  const haveAProblemDesktop = data.have_a_problem_image_desktop;
  const haveAProblemMobile = data.have_a_problem_image_mobile;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>{haveAProblemTitle}</h1>
      <PrismicImage field={haveAProblemDesktop} />

      {items.map((item, index) => (
        <div key={index}>
          {item.button_title}
          {item.button_color}
          <PrismicImage field={item.have_a_problem_image_icon} />
          <PrismicRichText field={item.have_a_problem_description} />
        </div>
      ))}
    </section>
  );
};

export default HaveAProblem;
