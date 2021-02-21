import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CategoryCard from './CategoryCard'

const CategoriesList = props => (
  <Row>
    {props.categories.map(function(category){
      return (
        <Col md={3}>
          <CategoryCard key={category.id} category={category} />
        </Col>
      )
    })}
  </Row>
)

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}
export default CategoriesList