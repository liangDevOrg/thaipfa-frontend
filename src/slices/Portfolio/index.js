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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      {items.map((item) => (
        <div key={item.portfolio_image_desktop}>
          <PrismicNextImage
            field={item.portfolio_image_desktop}
            width={450}
          />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
