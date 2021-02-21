import React from 'react'
import axios from 'axios'
import * as Constants from 'constants/globals';
import Head   from 'components/layout/Head'
import Header from 'components/layout/Header'
import Main   from 'components/categories/Main'
import Footer from 'components/layout/Footer'

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
      // console.log("ZT! Demo :", response.data)
      this.setState({ categories: response.data })
    })

  }

  render() {
    return (
      <>
        <Head seo_title="zt-categories"/>
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header title="Категории товаров" />
            </div>
            <div className="App-main">
              <div className="main_background">
                <Main categories={this.state.categories} />
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