import PropTypes from 'prop-types'
import Button    from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRubleSign } from "@fortawesome/free-solid-svg-icons"

const Price = props => {
  return (
      <Button variant="light" size="sm" className='mt-3 mb-2'>
        <strong>{parseFloat(props.price).toFixed(2)}{' '}</strong>
        <FontAwesomeIcon icon={faRubleSign} />
      </Button>
  )
}

Price.propTypes = {
  price: PropTypes.string 
}
export default Price;
