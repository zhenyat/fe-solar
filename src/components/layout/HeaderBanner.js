import React from "react";

const HeaderBanner = (props) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-text">
          <div className="banner-heading">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderBanner