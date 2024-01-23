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
  const themeColor = data.theme_color;

  return (
    <div className="container-content py-[50px] lg:py-[100px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 style={{marginBottom: 0, color: themeColor}}>{data.title}</h2>
      <div className="content-with-image speaker mt-[50px]">
        <div className="content">
          {items.map((item, index) => (
              <div className="box-item" key={index}>
                {/* <img alt="" src="../assets/images/icon-check.png"> */}
                <div className="hidden md:block">
                  <PrismicNextImage field={item.image_desktop} alt=""/>
                </div>
                <div className="block md:hidden">
                  <PrismicNextImage field={item.image_mobile} alt="" />
                </div>
                <h3>{item.speaker_name}</h3>
                <PrismicRichText field={item.speaker_description} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Speaker.propTypes = {
  slice: PropTypes.string,
};

export default Speaker;
