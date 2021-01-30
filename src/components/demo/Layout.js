import React, { Component } from 'react'
import Head                 from 'components/general/Head'
import Header               from 'components/layout/Header'
import Main                 from 'components/layout/Main'
import Footer               from 'components/layout/Footer'

class Layout extends Component {
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
                <Main />
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
export default Layout;