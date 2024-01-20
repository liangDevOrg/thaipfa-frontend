import React from 'react'
import PropTypes from "prop-types";
export default function TitleAndSubTitle( {title, subtitle}) {
  return (
    <>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
    </>
  )
}

TitleAndSubTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

