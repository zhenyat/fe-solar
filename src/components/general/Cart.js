import React     from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus }     from "@fortawesome/free-solid-svg-icons"

const Cart = (props) => {
  return (
      <Button href="/cart" variant="info" size="sm" className='mt-3 mb-2'>
        <FontAwesomeIcon icon={faCartPlus} />
      </Button>
  )
}

Cart.propTypes = {
  link: PropTypes.string 
}

Cart.defaultProps = {
  link: '/cart'
}
export default Cart;
