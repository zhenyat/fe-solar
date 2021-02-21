import React  from "react";
import HeaderBanner from "components/layout/HeaderBanner"
import HeaderNavBar from "components/layout/HeaderNavBar"

const Header = (props) => {
  // const titleCapitalized = props.title.charAt(0).toUpperCase() + props.title.slice(1)

  return (
    <div>
      <HeaderNavBar />
      <HeaderBanner title={props.title} />
      {/* <HeaderBanner title={titleCapitalized} /> */}
    </div>
  )
}
export default Header