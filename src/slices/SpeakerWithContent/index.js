/**
 * @typedef {import("@prismicio/client").Content.SpeakerWithContentSlice} SpeakerWithContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpeakerWithContentSlice>} SpeakerWithContentProps
 * @param {SpeakerWithContentProps}
 */
const SpeakerWithContent = ({ slice }) => {
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      
    </section>
  );
};

export default SpeakerWithContent;
