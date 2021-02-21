import React        from 'react'
import PropTypes    from 'prop-types'
import Row          from 'react-bootstrap/Row'
import Col          from 'react-bootstrap/Col'

import CategoryCard from 'components/categories/CategoryCard'
import ProductCard  from 'components/products/ProductCard'
import SampleCard   from 'components/demo/samples/SampleCard'

export default function ItemsList(props) {
  console.log("ZT! ItemsList - props: ", props)
  var itemsList
  switch (props.itemsType) {
    case "products":
      itemsList = <ProductCard key={props.item.id} products={props.items} />
      break
    case "samples":
      itemsList = <SampleCard key={props.item.id} samples={props.items} />
      break
    default:
      itemsList = <CategoryCard key={props.item.id} categories={props.items} />
  }

  <Row>
    {props.items.map(function (item) {
      return (
        <Col md={3}>
          {itemsList}
        </Col>
      )
    })}
  </Row>
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
}
