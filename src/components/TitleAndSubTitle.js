import React from 'react'
import PropTypes from "prop-types";
export default function TitleAndSubTitle({ title, subtitle, themePage }) {
  return (
    <div className="container-content py-[50px] lg:py-[100px]">
      <div className="content-title" style={{ color: themePage}}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

TitleAndSubTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

