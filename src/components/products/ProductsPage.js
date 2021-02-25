import React from 'react'
import Container      from 'react-bootstrap/Container'
import axios          from 'axios'
import * as Constants from 'constants/globals';
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import SideBox        from 'components/layout/SideBox'
import ProductsList   from 'components/products/ProductsList'

// import productsMain   from 'components/products/productsMain'

class ProductsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: Constants.API_URL + '/products'
    })
    .then(response => {
      // console.log("ZT! DidMount-response.data:", response.data)
      this.setState({ products: response.data })
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
                {/* <productsMain products={this.state.products} /> */}
                <div className='rowC'>
                  <Container fluid="ms" className="pt-5">
                    <ProductsList products={this.state.products} />
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
export default ProductsPage