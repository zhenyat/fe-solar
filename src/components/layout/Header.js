import React  from "react";
import HeaderBanner from "./HeaderBanner"
import HeaderNavBar from "./HeaderNavBar"

const Header = (props) => {
  return (
    <div>
      <HeaderNavBar />
      <HeaderBanner title={props.title} />
    </div>
  )
}
export default Header