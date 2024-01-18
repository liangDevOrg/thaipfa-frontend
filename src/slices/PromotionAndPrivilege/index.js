import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicImage } from "@prismicio/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.PromotionAndPrivilegeSlice} PromotionAndPrivilegeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromotionAndPrivilegeSlice>} PromotionAndPrivilegeProps
 * @param {PromotionAndPrivilegeProps}
 */
const PromotionAndPrivilege = ({ slice }) => {
  const data = slice.primary;
  const bannerDesktop = data.promotion_image_banner_desktop;
  const bannerMobile = data.promotion_image_banner_mobile;
  const items = slice.items;

  return (
    <>
      <div className="content-banner">
        <div className="background-overlay"></div>
        <div className="hidden md:block">
          <PrismicImage field={bannerDesktop} alt="" />
        </div>
        <div className="block md:hidden">
          <PrismicImage field={bannerMobile} alt="" />
        </div>
        <div className="container-content py-[80px] py-[50px]">
          <div className="banner-content">
            <PrismicRichText field={data.promotion_and_privilege_title} />
          </div>
        </div>
      </div>
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

PromotionAndPrivilege.propTypes = {
  slice: PropTypes.string,
};

export default PromotionAndPrivilege;
