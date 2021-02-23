import React from 'react'
import axios from 'axios'
import Image from 'react-bootstrap/Image'
import Head  from 'components/layout/Head'

import * as Constants from 'constants/globals'

class CategoryPageAsClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: {}
    }
    console.log("ZT! CategoryPage-constructor-this.props: ", this.props)
  }

  componentDidMount() {
    if (this.props.match) {
      axios({
        method: "GET",
        url: Constants.API_URL + '/categories/' + this.props.match.params.id
      }).then((response) => {
        this.setState({ category: response.data });
        console.log("ZT! CategoryPage-DidMount-this.state.category: ", this.state.category)

      });
    }
  }

  render() {
    return (
      <div>
        <Head
          seo_title={this.state.category.seo_title}
          seo_description={this.state.category.seo_description}
          seo_keywords={this.state.category.seo_keywords}
        />
        <h2>{this.state.category.title}</h2>
        <Image variant="top" src={this.state.category.cover_image_url} />

      </div>
    )
  }
}
export default CategoryPageAsClass