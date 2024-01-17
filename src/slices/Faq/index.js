"use client";
import { useState } from "react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import PropTypes from "prop-types";
/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faq = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const faqTitle = data.faq_title;
  const [open, setOpen] = useState(null);
  const handleOpen = (value) => setOpen(open === value ? null : value);
 
  return (
    <>
      <div className="container-divider"></div>
      <div className="container-content faq py-[50px] lg:py-[100px]" 
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h2>{faqTitle}</h2>
        <div className="faq-content">
          {items.map((item, index) => (
            <div className="faq-card" key={index}>
              <Accordion className="faq-header" open={open === index}>
                <AccordionHeader onClick={() => handleOpen(index)}>
                  <PrismicRichText field={item.faq_question} />
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </AccordionHeader>
                <AccordionBody className="faq-body">
                  <PrismicRichText field={item.faq_answer} />
                </AccordionBody>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Faq.propTypes = {
  slice: PropTypes.string,
};

export default Faq;