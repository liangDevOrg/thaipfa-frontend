import { PrismicRichText, PrismicLink } from "@prismicio/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.BackgroundColorWithButtonLinkSlice} BackgroundColorWithButtonLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BackgroundColorWithButtonLinkSlice>} BackgroundColorWithButtonLinkProps
 * @param {BackgroundColorWithButtonLinkProps}
 */
const BackgroundColorWithButtonLink = ({ slice }) => {
  
  const items = slice.items;

  return (
    <>
      <div className="container-divider"></div>
      <div className="container-content py-[80px] py-[50px]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
      <div className="call-action">
        {items.map((item, index) => (
          <div key={index}>
            <PrismicLink field={item.button_link} className="button-call-action" style={{backgroundColor: item.button_color}}>
              <h3>{item.button_title}</h3>
              <PrismicRichText field={item.button_description} />
            </PrismicLink>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

BackgroundColorWithButtonLink.propTypes = {
  slice: PropTypes.string,
};

export default BackgroundColorWithButtonLink;
