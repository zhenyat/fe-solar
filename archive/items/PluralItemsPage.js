import React          from 'react'
import axios          from 'axios'
// import singular    from 'pluralize'
import pluralize      from 'pluralize'
import * as Constants from 'constants/globals'
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import SideBox        from 'components/layout/SideBox'
// import ItemsList      from 'components/items/ItemsList'

class PluralItemsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:     [],
      itemsType: this.props.item,                           // e.g. 'category'
      title:     pluralize(this.props.item),                // e.g. 'categories'
      url:       Constants.API_URL + "/" + pluralize(this.props.item) // e.g. 'localhost:3001/api/v1/categories'
    }
  }
  
  componentDidMount() {
    axios({
      method: 'GET',
      url: this.state.url
    })
      .then(response => {
        // console.log("ZT! ItemsPage - response.data: ", response.data)
        this.setState({ items: response.data })
        console.log("ZT! ItemsPage - DidMount - items: ", this.state.items)
      })
      .catch(function (error) {
        console.log("ZT! error: ", error);
      });
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
              <Header title={this.state.title} />
            </div>
            <div className="App-main">
              <div className="main_background">
                <div className='rowC'>
                  <Container fluid="ms" className="pt-5">
                    {/* < ItemsList items={this.state.items} itemsType={this.state.itemsType} /> */}
                    <Dummy items={this.state.items} itemsType={this.state.itemsType} />
                  </Container>
                  <SideBox />
                </div>
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
export default PluralItemsPage