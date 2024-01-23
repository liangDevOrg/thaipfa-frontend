import React from 'react'
import PropTypes from "prop-types";
export default function TitleAndSubTitle({ title, subtitle, themePage }) {
  return (
    <>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <h6>{themePage}</h6>
    </>
  );
}

TitleAndSubTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

