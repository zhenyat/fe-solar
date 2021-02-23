import React from 'react'
import Image from 'react-bootstrap/Image'

const Category = props => (
  <>
    <h1>{props.category.title}</h1>
    <Image variant="top" src={props.category.cover_image_url} />
  </>
)
export default Category