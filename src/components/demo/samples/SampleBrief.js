import PropTypes from 'prop-types'
import Card      from 'react-bootstrap/Card'
import CardDeck  from 'react-bootstrap/CardDeck'
import Cart      from 'components/general/Cart'
import Price     from 'components/general/Price'

const SampleBrief = props => (
  <Card.Link href={`/samples/${props.sample.id}`} style={{ display: "flex", flexDirection: 'row', flex: '1', padding: "0.5rem"}}  >
    <CardDeck className="mx-auto text-center" >
      <Card bg="success" text="white" style={{ width: '10rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={props.sample.cover_image_url}  />
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.sample.title}</Card.Title>
          <Card.Text>
            {props.sample.quantity > 0 ? <p>В наличии: {props.sample.quantity}</p> : <p>Под заказ</p>}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Price price={props.sample.price} />
          <Cart />
        </Card.Footer>
      </Card>
    </CardDeck>
  </Card.Link>
)

SampleBrief.propTypes = {
  sample: PropTypes.shape({
    title:    PropTypes.string.isRequired,
    price:    PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })
}
export default SampleBrief
