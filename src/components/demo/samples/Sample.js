import React from 'react'
import axios from 'axios'
import * as Constants from 'constants/globals';
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Details from 'components/demo/samples/Details'

class Sample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sample: {}
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: Constants.API_URL + '/samples/3'
    })
      .then(response => {
        // console.log("ZT! response.data :", response.data)
        this.setState({ sample: response.data })
        // console.log("ZT! Sample :", this.state.sample)

    })
  }

  render() {
    return (
      <>
        <Head
          title={this.state.sample.title}
          seo_title={this.state.sample.seo_title}
          seo_description={this.state.sample.seo_description}
          seo_keywords={this.state.sample.seo_keywords}
        />
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header title={this.state.sample.title} />
            </div>
            <div className="App-main">
              <div className="main_background">
                <Details sample={this.state.sample} />
              </div>
            </div>
            <div className='App-footer'>
              <Footer />
            </div>
          </div>
         </div>
      </>
    )
  }
}
export default Sample