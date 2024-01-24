import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import PropTypes from "prop-types";

/**
 * @typedef {import("@prismicio/client").Content.SpeakerWithContentSlice} SpeakerWithContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpeakerWithContentSlice>} SpeakerWithContentProps
 * @param {SpeakerWithContentProps}
 */
const SpeakerWithContent = ({ slice }) => {
  const data = slice.primary;
  const imageLogo = data.image_logo;
  const title = data.title;
  const subtitle = data.subtitle;
  const items = slice.items;

  return (
    <>
      <div className="container-content py-[50px] lg:py-[100px]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="content-speaker">
          <PrismicNextImage field={imageLogo} alt="" className="top-image"/>
          <h2 style={{marginBottom: 50}}>{title}</h2>
          <h3><PrismicRichText field={subtitle} /></h3>
          <div className="content-with-image speaker mt-[50px]">
            <div className="content">
              {items.map((item, index) => (
                <div className="box-item" key={index}>
                  {/* <img alt="" src="../assets/images/icon-check.png"> */}
                  <div className="hidden md:block">
                    <PrismicNextImage field={item.speaker_image_desktop} alt="" />
                  </div>
                  <div className="block md:hidden">
                    <PrismicNextImage field={item.speaker_image_mobile} alt="" />
                  </div>
                  <h3>{item.speaker_name}</h3>
                  <PrismicRichText field={item.speaker_detail} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SpeakerWithContent.propTypes = {
  slice: PropTypes.string,
};

export default SpeakerWithContent;
