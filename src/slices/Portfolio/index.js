import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.PortfolioSlice} PortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioSlice>} PortfolioProps
 * @param {PortfolioProps}
 */
const Portfolio = ({ slice }) => {
  const data = slice;
  // const isActive = data.is_active;
  const items = data.items
  return (
    <>
      <div className="container-divider"></div>
      <div className="container-content portfolio py-[50px] lg:py-[100px]" 
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h2>ผลงานที่ผ่านมา</h2>
        {items.map((item) => (
          <div key={item.portfolio_image_desktop}>
            <PrismicNextImage
              alt=""
              field={item.portfolio_image_desktop}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
