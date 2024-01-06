import { PrismicImage, PrismicRichText } from "@prismicio/react";

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
    <div className="container-content opportunity"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>
        <PrismicRichText field={title} />
      </h2>
      <ul className="point-list">
        {items.map((item) => (
          <li>
            {/* <img alt="" src="../assets/images/icon-check.png"> */}
            <PrismicImage field={data.oppportunity_icon_list} width={20}/>
            <p key={item.opportunity_list_name}>{item.opportunity_list_name}</p>
          </li>
        ))}     
      </ul>
    </div>
  );
};

export default OpportunityList;
