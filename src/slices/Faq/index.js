import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faq = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const faqTitle = data.faq_title;
 
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <hr />
      <h1>{faqTitle}</h1>
      {items.map((item, index) => (
        <div key={index}>
          <PrismicRichText field={item.faq_question} />
          <PrismicRichText field={item.faq_answer} />
        </div>
      ))}
    </section>
  );
};

export default Faq;
