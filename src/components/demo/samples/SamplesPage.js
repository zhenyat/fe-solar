import React from 'react'
import axios from 'axios'
import * as Constants from 'constants/globals';
import Head                 from 'components/layout/Head'
import Header               from 'components/layout/Header'
import SamplesPageMain      from 'components/demo/samples/SamplesPageMain'
import Footer from 'components/layout/Footer'

class SamplesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      samples: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: Constants.API_URL + '/samples'
    })
    .then(response => {
      console.log("ZT! response.data:", response.data)
      this.setState({ samples: response.data })
    })

  }

  render() {
    return (
      <>
        <Head />
        <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header title="Образцы"/>
            </div>
            <div className="App-main">
              <div className="main_background">
                <SamplesPageMain samples={this.state.samples} />
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
export default SamplesPage