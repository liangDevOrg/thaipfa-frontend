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
    <>
      <div className="container-divider"></div>
      <div className="container-content problem py-[50px] lg:py-[80px]">
        <h2>{haveAProblemTitle}</h2>
      </div>
      <div className="content-banner no-text"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="hidden md:block">
          <PrismicImage field={haveAProblemDesktop} />
        </div>
        <div className="block md:hidden">
          <PrismicImage field={haveAProblemDesktop} />
        </div>
      </div>
      <div className="container-content py-[50px] lg:py-[100px]">
        <div className="content-with-icon">
          <div className="content">
            {items.map((item, index) => (
              <div className="box-item" key={index}>
                {/* {item.button_title}
                {item.button_color} */}
                <PrismicImage field={item.have_a_problem_image_icon} />
                <PrismicRichText field={item.have_a_problem_description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HaveAProblem;
