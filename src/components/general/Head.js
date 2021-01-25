import React from "react";
import { Helmet } from "react-helmet";
// import TopHeader from './TopHeader'

const Head = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Helmet>
      {/* <TopHeader /> */}
    </div>
  )
}
export default Head