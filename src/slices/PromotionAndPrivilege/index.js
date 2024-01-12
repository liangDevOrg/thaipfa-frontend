import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.PromotionAndPrivilegeSlice} PromotionAndPrivilegeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromotionAndPrivilegeSlice>} PromotionAndPrivilegeProps
 * @param {PromotionAndPrivilegeProps}
 */
const PromotionAndPrivilege = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>
        <PrismicRichText field={data.promotion_and_privilege_title} />
      </h1>

      {items.map((item, index) => (
        <div key={index}>
          <PrismicRichText field={item.promotion_and_privilege_desc} />
        </div>
      ))}
    </section>
  );
};


export default PromotionAndPrivilege;