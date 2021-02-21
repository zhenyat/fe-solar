import React from 'react'
import axios from 'axios'
import * as Constants from 'constants/globals';
import Head   from 'components/layout/Head'
import Header from 'components/layout/Header'
import Main   from 'components/demo/samples/SamplesPageMain'
import Footer from 'components/layout/Footer'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      samples: []
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
        <Head />
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header />
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
export default Home