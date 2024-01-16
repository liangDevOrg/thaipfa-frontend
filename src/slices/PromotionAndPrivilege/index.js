import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicImage } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PromotionAndPrivilegeSlice} PromotionAndPrivilegeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromotionAndPrivilegeSlice>} PromotionAndPrivilegeProps
 * @param {PromotionAndPrivilegeProps}
 */
const PromotionAndPrivilege = ({ slice }) => {
  const data = slice.primary;
  const bannerDesktop = data.promotion_image_banner_desktop;
  const bannerMobile  = data.promotion_image_banner_mobile;
  const items = slice.items;

  return (
    <>
      <h1>
        <PrismicRichText field={data.promotion_and_privilege_title} />
        <PrismicImage field={bannerDesktop} />
        <PrismicImage field={bannerMobile} />
      </h1>
      <div
        className="container-content promotion py-[50px] lg:py-[100px]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="content">
          {items.map((item, index) => (
            <div className="box-promotion" key={index}>
              <div className="mb-[30px]">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              </div>
              <PrismicRichText field={item.promotion_and_privilege_desc} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default PromotionAndPrivilege;