import PropTypes from 'prop-types'
import Card      from 'react-bootstrap/Card'
import CardDeck  from 'react-bootstrap/CardDeck'

const CategoryCard = props => (
  <Card.Link href={`/categories/${props.category.id}`} style={{ display: "flex", flexDirection: 'row', flex: '1', padding: "0.5rem"}}  >
    <CardDeck className="mx-auto text-center" >
      <Card bg="success" text="white" style={{ width: '10rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={props.category.cover_image_url}  />
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.category.title}</Card.Title>
          {/* <Card.Text>
            {props.category.quantity > 0 ? <p>В наличии: {props.category.quantity}</p> : <p>Под заказ</p>}
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardDeck>
  </Card.Link>
)

CategoryCard.propTypes = {
  category: PropTypes.shape({
    title:    PropTypes.string.isRequired,
    // quantity: PropTypes.number.isRequired,
  })
}
export default CategoryCard
