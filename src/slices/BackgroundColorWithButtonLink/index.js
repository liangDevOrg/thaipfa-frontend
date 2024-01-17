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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      {items.map((item, index) => (
        <div key={index}>
          {item.button_title}
          {item.button_color}
          <PrismicRichText field={item.button_description} />
          <PrismicLink field={item.button_link} />
        </div>
      ))}
    </section>
  );
};

BackgroundColorWithButtonLink.propTypes = {
  slice: PropTypes.string,
};

export default BackgroundColorWithButtonLink;
