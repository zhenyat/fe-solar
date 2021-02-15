import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import SampleBrief from './SampleBrief'

const SamplesList = props => (
  <Row>
    {props.samples.map(function(sample){
      return (
        // <Col>
          <SampleBrief key={sample.id} sample={sample} />
        // </Col>
      )
    })}
  </Row>
)

SamplesList.propTypes = {
  samples: PropTypes.array.isRequired
}
export default SamplesList