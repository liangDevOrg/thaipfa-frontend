import { PrismicNextImage } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.PortfolioSlice} PortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioSlice>} PortfolioProps
 * @param {PortfolioProps}
 */
const Portfolio = ({ slice }) => {
  const data = slice;

  const items = data.items;
  return (
    <>
      <div className="container-divider"></div>
      <div
        className="container-content portfolio py-[50px] lg:py-[100px]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h2>ผลงานที่ผ่านมา</h2>
        {items.map((item, index) => (
          <div key={index}>
            <PrismicNextImage alt="" field={item.portfolio_image_desktop} />
          </div>
        ))}
      </div>
    </>
  );
};

Portfolio.propTypes = {
  slice: PropTypes.string,
};

export default Portfolio;
