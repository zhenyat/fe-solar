import React     from 'react'
import PropTypes from 'prop-types'
import Button    from 'react-bootstrap/Button'

const Source = (props) => {
  return (
      <Button href={props.link} variant="info" size="sm" className='mt-3 mb-2'>
        Source
      </Button>
  )
}

Source.propTypes = {
  link: PropTypes.string 
}

Source.defaultProps = {
  link: '#'
}
export default Source;
