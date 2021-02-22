import React from 'react'
import axios from 'axios'
import Image from 'react-bootstrap/Image'

import * as Constants from 'constants/globals'

class SampleAsClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sample: {}
    }
  }

  componentDidMount() {
    if (this.props.match) {
      axios({
        method: "GET",
        url: Constants.API_URL + '/samples/' + this.props.match.params.id
      }).then((response) => {
        this.setState({ sample: response.data });
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.sample.title}</h2>
        <Image variant="top" src={this.state.sample.cover_image_url} />

      </div>
    )
  }
}
export default SampleAsClass