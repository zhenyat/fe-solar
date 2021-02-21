import React          from 'react'
import axios          from 'axios'
import singular       from 'pluralize'
import * as Constants from 'constants/globals';
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import ItemsMain      from 'components/items/ItemsMain'

class ItemsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:     [],
      itemsType: singular(this.props.items),
      url:       Constants.API_URL + "/" + this.props.items
    }
  }
  
  componentDidMount() {
    axios({
      method: 'GET',
      url: this.state.url
    })
      .then(response => {
        console.log("ZT! ItemsPage - response.data: ", response.data)
        this.setState({ items: response.data })
        // console.log("ZT! ItemsPage - this.state.items: ", this.state.items)
    })
  }

  render() {
    return (
      <>
        <Head
          // seo_title={this.state.items.seo_title}
          // seo_description={this.state.items.seo_description}
          // seo_keywords={this.state.items.seo_keywords}
        />
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header title={this.props.items} />
            </div>
            <div className="App-main">
              <div className="main_background">
                <ItemsMain items={this.state.items} itemsType={this.state.itemsType} />
              </div>
            </div>
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}
export default ItemsPage