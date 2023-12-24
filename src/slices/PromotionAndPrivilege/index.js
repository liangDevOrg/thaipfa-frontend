/**
 * @typedef {import("@prismicio/client").Content.PromotionAndPrivilegeSlice} PromotionAndPrivilegeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromotionAndPrivilegeSlice>} PromotionAndPrivilegeProps
 * @param {PromotionAndPrivilegeProps}
 */
const PromotionAndPrivilege = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for promotion_and_privilege (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default PromotionAndPrivilege;
