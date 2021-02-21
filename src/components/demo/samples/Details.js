// import PropTypes from 'prop-types'
import Currency from 'components/general/Currency';

const Details = props => (
  <>
    <h1>{props.sample.title}</h1>
    <Currency value={props.sample.price} />
    <p>В наличии: {props.sample.quantity} шт.</p>
  </>
)

// Details.propTypes = {
//   sample: PropTypes.shape({
//     title:    PropTypes.string.isRequired,
//     price:    PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired
//   })
// }
export default Details