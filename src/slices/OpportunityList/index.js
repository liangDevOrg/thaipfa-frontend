/**
 * @typedef {import("@prismicio/client").Content.OpportunityListSlice} OpportunityListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OpportunityListSlice>} OpportunityListProps
 * @param {OpportunityListProps}
 */
const OpportunityList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for opportunity_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default OpportunityList;
