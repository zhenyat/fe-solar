import React from 'react'
import Container      from 'react-bootstrap/Container'
import axios          from 'axios'
import * as Constants from 'constants/globals';
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import SideBox        from 'components/layout/SideBox'
import CategoriesList from 'components/categories/CategoriesList'

// import CategoriesMain   from 'components/categories/CategoriesMain'

class CategoriesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: Constants.API_URL + '/categories'
    })
    .then(response => {
      // console.log("ZT! DidMount-response.data:", response.data)
      this.setState({ categories: response.data })
    })

  }

  render() {
    return (
      <>
        <Head seo_title="Категории товаров"/>
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header title="Категории товаров" />
            </div>
            <div className="App-main">
              <div className="main_background">
                {/* <CategoriesMain categories={this.state.categories} /> */}
                <div className='rowC'>
                  <Container fluid="ms" className="pt-5">
                    <CategoriesList categories={this.state.categories} />
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
export default CategoriesIndex