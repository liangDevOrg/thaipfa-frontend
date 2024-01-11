/**
 * @typedef {import("@prismicio/client").Content.PortfolioSlice} PortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioSlice>} PortfolioProps
 * @param {PortfolioProps}
 */
const Portfolio = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for portfolio (variation: {slice.variation}) Slices
    </section>
  );
};

export default Portfolio;
