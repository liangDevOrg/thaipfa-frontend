"use client";
import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import PropTypes from "prop-types";

export function Footer({ data }) {
  const contactTitle = data.contact_title;
  const companyNameEng = data.company_name_eng;
  const companyNameThai = data.company_name_thai;
  const companyAddress = data.company_address;
  const email = data.email;
  const telephone = data.telephone;
  const fax = data.fax;
  const subscribeName = data.subscribe_name;
  const subscribePlaceholder = data.subscribe_placeholder;
  const subscribeButtonName = data.subscribe_button_name;
  const our_services = data.our_services;
  const socialMediaList = data.social_media_list;
  const imageLogo = data.image_logo;

  return (
    <div className="footer">
      <div className="background-darkgrey">
        <div className="container-content py-[35px]">
          <div className="content">
            <div className="content-left">
              <PrismicNextImage field={imageLogo} alt="" className="footer-logo" />
              <p>
                {contactTitle}
                <br />
                {companyNameEng}
                <br />
                {companyNameThai}
                <br />
                {companyAddress}
                <br />
                {email}
                <br />
                {telephone}
                <br />
                {email}
                <br />
                {fax}
              </p>
            </div>
            <div className="content-center">
              <h3>Our Services</h3>
              <ul className="link-service">
                {our_services.map((item, index) => (
                  <li key={index}>
                    <PrismicNextLink
                      key={index}
                      field={item.service_link}
                      target={item.service_link}
                    >
                      {item.service_name}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-right">
              <h3>{subscribeName}</h3>
              <input
                type="text"
                name=""
                placeholder={subscribePlaceholder}
                className="input-email"
              />
              <button className="block btn-primary mt-[15px]">
                {subscribeButtonName}
              </button>
              <div className="link-social">
                {socialMediaList.map((item, index) => (
                  <div className="social-item" key={index}>
                    <PrismicNextLink field={item.social_media_link}>
                      <PrismicNextImage
                        field={item.social_media_logo}
                        width={25}
                        alt=""
                      />
                    </PrismicNextLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        Copyright &copy; 2024 Thai Professional Finance Academy (ThaiPFA) All
        Rights Reserved
      </div>
    </div>
  );
}

Footer.propTypes = {
  data: PropTypes.string,
};
