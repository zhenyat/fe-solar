/* https://dev.to/letsbsocial1/flexbox-sticky-footer-and-react-e1h */

import React, { Component } from 'react'
import Header               from 'components/layout/Header'
import Main                 from 'components/layout/Main'
import Footer               from 'components/layout/Footer'

class Layout extends Component {
render() {
  return (
    <>  
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
    );
  }
}

export default Layout;