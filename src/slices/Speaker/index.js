import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.SpeakerSlice} SpeakerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpeakerSlice>} SpeakerProps
 * @param {SpeakerProps}
 */
const Speaker = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      {data.title}
      {items.map((item, index) => (
          <div key={index}>
            {/* <img alt="" src="../assets/images/icon-check.png"> */}
            <PrismicNextImage field={item.image_desktop}  alt=""/>
            <PrismicNextImage field={item.image_mobile} alt="" />
            <p>{item.speaker_name}</p>
            <PrismicRichText field={item.speaker_description} />
          </div>
        ))}
    </section>
  );
};

Speaker.propTypes = {
  slice: PropTypes.string,
};

export default Speaker;
