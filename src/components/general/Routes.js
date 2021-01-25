import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import TopHeader  from './TopHeader'
// import Samples from '../demo/Samples'
import Page from '../demo/Page'




// import Category   from '../categories/Show'
// import Home       from '../pages/Home';
// import About      from '../pages//About';
// import Contacts   from '../pages//Contacts';
// import Notes      from '../pages//Notes';
// import Delivery   from '../pages//Delivery';
// import Demo       from '../demo/Demo';
// import Categories from '../categories/Index';

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        {/* <TopHeader /> */}
      </Route>
      <Route exact path="/">
        {/* <Home /> */}
      </Route>
      <Route exact path="/categories/:id">
        {/* <Category/> */}
      </Route>
      <Route path="/about">
        {/* <About /> */}
      </Route>
      <Route path="/contacts">
        {/* <Contacts /> */}
      </Route>
      <Route path="/notes">
        {/* <Notes /> */}
      </Route>
      <Route path="/delivery">
        {/* <Delivery /> */}
      </Route>
      <Route exact path="/demo">
        {/* <Demo /> */}
      </Route>
      <Route exact path="/demo/page">
        <Page />
      </Route>
      {/* <Route exact path="/demo/samples">
        <Samples />
      </Route> */}
      <Route path="/categories">
        {/* <Categories /> */}
      </Route>
    </Router>
  )
}
export default Routes
