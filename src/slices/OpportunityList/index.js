import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.OpportunityListSlice} OpportunityListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OpportunityListSlice>} OpportunityListProps
 * @param {OpportunityListProps}
 */
const OpportunityList = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  
  const title = data.oppportunity_title;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>Slicezone OpportunityList</h1>
      <h1>
        <PrismicRichText field={title} />
      </h1>
      {items.map((item) => (
        <p key={item.opportunity_list_name}>{item.opportunity_list_name}</p>
      ))}
    </section>
  );
};

export default OpportunityList;
