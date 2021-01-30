import React  from "react";
import HeaderBanner from "./HeaderBanner"
import HeaderNavBar from "./HeaderNavBar"

const Header = (props) => {
  return (
    <div>
      <HeaderNavBar />
      <HeaderBanner />
    </div>
  )
}
export default Header