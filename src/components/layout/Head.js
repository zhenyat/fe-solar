/************************************************************
 *  NB! 'props.seo_description' to be verified for:
 *      'undefined' (don't know why??) or empty ('') 
 ************************************************************/
import React from "react"
import { Helmet }     from "react-helmet"
import * as Constants from 'constants/globals'

const Head = (props) => {
  let title = props.seo_title || Constants.SEO_TITLE_DEFAULT
  let description = (props.seo_description === null || props.seo_description === '')
    ? Constants.SEO_DESCRIPTION_DEFAULT
    : props.seo_description + Constants.SEO_DESCRIPTION_ADDENDUM
  let keywords = props.seo_keywords || Constants.SEO_KEYWORDS_DEFAULT

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords"    content={keywords} />
    </Helmet>
  )
}
export default Head