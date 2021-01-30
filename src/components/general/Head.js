import React          from "react"
import { Helmet }     from "react-helmet"
import * as Constants from 'constants/globals'


const Head = (props) => {
  let title = props.title ? props.title : Constants.SEO_TITLE_DEFAULT
  let description = props.description ? props.description + Constants.SEO_DESCRIPTION_ADDENDUM
                                      : Constants.SEO_DESCRIPTION_DEFAULT
  let keywords = props.keywords ? props.keywords : Constants.SEO_KEYWORDS_DEFAULT
  console.log("props:", props.description)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}
export default Head