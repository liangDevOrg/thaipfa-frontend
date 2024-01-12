import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BackgroundColorWithButtonLinkSlice} BackgroundColorWithButtonLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BackgroundColorWithButtonLinkSlice>} BackgroundColorWithButtonLinkProps
 * @param {BackgroundColorWithButtonLinkProps}
 */
const BackgroundColorWithButtonLink = ({ slice }) => {
  const data = slice.primary;

  const isActive = data.is_active;

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

export default BackgroundColorWithButtonLink;
