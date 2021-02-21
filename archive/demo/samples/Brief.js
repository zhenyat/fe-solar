import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import Button from 'react-bootstrap/Button'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

import Cart from 'components/general/Cart'
import Price from 'components/general/Price'
// import Currency from 'component/general/Currency'

const Brief = props => (
  <CardDeck
    style={{
      display: "flex",
      // flexDirection: "row",
      // padding: "10px",
      // width: "80rem",

    }}
    className="mx-auto text-center"
    // className="text-center"
  >
    <Card  bg="secondary" text="white" style={{ width: '12rem' }}>
    <Card.Header>
      <Card.Img variant="top" src={props.sample.cover_image_url} />
    </Card.Header>
    <Card.Body>
      <Card.Title>{props.sample.title}</Card.Title>
      <Card.Subtitle className="mb-2 card-subtitle">
        {/* {parseFloat(props.sample.price).toFixed(2)} руб */}
      </Card.Subtitle>
      <Card.Text>
      {props.sample.quantity > 0 ? <p>В наличии: {props.sample.quantity}</p> : <p>Под заказ</p>}
      </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Price price={props.sample.price} />
        {/* <Currency value={props.sample.price} /> */}
        &nbsp;&nbsp;
        <Cart />
      </Card.Footer>
    </Card>
  </CardDeck>
)

Brief.propTypes = {
  sample: PropTypes.shape({
    title:    PropTypes.string.isRequired,
    price:    PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })
}
export default Brief
