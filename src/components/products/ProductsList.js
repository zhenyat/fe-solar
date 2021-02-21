import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import ProductBrief from './ProductBrief'

const ProductsList = props => (
  <Row>
    {props.categories.map(function(category){
      return (
        <Col md={3}>
          {/* <ProductBrief key={category.id} category={category} /> */}
        </Col>
      )
    })}
  </Row>
)

ProductsList.propTypes = {
  categories: PropTypes.array.isRequired
}
export default ProductsList