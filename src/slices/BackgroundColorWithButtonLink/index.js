/**
 * @typedef {import("@prismicio/client").Content.BackgroundColorWithButtonLinkSlice} BackgroundColorWithButtonLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BackgroundColorWithButtonLinkSlice>} BackgroundColorWithButtonLinkProps
 * @param {BackgroundColorWithButtonLinkProps}
 */
const BackgroundColorWithButtonLink = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for background_color_with_button_link (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default BackgroundColorWithButtonLink;
