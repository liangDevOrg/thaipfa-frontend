/**
 * @typedef {import("@prismicio/client").Content.CallToActionWithBannerSlice} CallToActionWithBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionWithBannerSlice>} CallToActionWithBannerProps
 * @param {CallToActionWithBannerProps}
 */
const CallToActionWithBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for call_to_action_with_banner (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CallToActionWithBanner;
