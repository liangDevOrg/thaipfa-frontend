import { PrismicImage } from "@prismicio/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.IntroductionSlice} IntroductionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroductionSlice>} IntroductionProps
 * @param {IntroductionProps}
 */
const Introduction = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const title = data.title;
  const themeBackground = data.theme_background;
  const imageIcon = data.image_icon;

  return (
    <>
      <div className="container-divider"></div>
      <div className="container-content faq py-[50px] lg:py-[100px]">
        <h2 style={{ color: themeBackground, marginBottom: 0 }}>{title}</h2>
      </div>
      <div
        className="container-content full py-[50px]"
        style={{ backgroundColor: themeBackground }}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="container-content introduction p-0">
          <ul className="introduction-list">
            {items.map((item, index) => (
              <li key={index}>
                <PrismicImage field={imageIcon} />
                <p>{item.subject}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Introduction.propTypes = {
  slice: PropTypes.string,
};

export default Introduction;
