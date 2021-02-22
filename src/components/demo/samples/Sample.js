import React from 'react'
// import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'

import Currency from 'components/general/Currency';

const Sample = props => (
  <>
    <h1>{props.sample.title}</h1>
    <Image variant="top" src={props.sample.cover_image_url} />

    <Currency value={props.sample.price} />
    <p>В наличии: {props.sample.quantity} шт.</p>
  </>
)

// Sample.propTypes = {
//   sample: PropTypes.shape({
//     title:    PropTypes.string.isRequired,
//     price:    PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired
//   })
// }
export default Sample