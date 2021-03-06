// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CategoriesIndex from 'components/categories/CategoriesIndex'
import CategoryPage    from 'components/categories/CategoryPage'

// import ProductsPage    from 'components/products/ProductsPage'


import Layout from 'components/demo/Layout'
import SamplesPage     from 'components/demo/samples/SamplesPage'
import SamplePage      from 'components/demo/samples/SamplePage'
import Page            from 'components/demo/Page'

// import ItemsPage   from 'components/items/ItemsPage'
// import Category   from 'components/categories/Show'
// import About      from 'components/pages//About';
// import Contacts   from 'components/pages//Contacts';
// import Notes      from 'components/pages//Notes';
// import Delivery   from 'components/pages//Delivery';
// import Demo       from 'components/demo/Demo';
// import Categories from 'components/categories/Index';

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        {/* <AppHeader /> */}
      </Route>
      <Route exact path="/">
        {/* <ItemsPage item='categories' /> */}
        <CategoriesIndex />
      </Route>
      <Route exact path="/categories/:id">
        <CategoryPage />
      </Route>
      {/* <Route exact path="/categories/:id" render={routeProps => (
        <CategoryPageAsClass {...routeProps} />
      )} /> */}
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
        <Page
          // title='Demo Page'
          // description='demo page description'
          // keywords='treplexus, demo, page'
        />
      </Route>
      <Route exact path="/demo/layout">
        <Layout />
      </Route>
      <Route exact path="/demo/samples">
        <SamplesPage />
        {/* <ItemsPage items="samples" /> */}
      </Route>
      <Route exact path="/demo/samples/:id">
        <SamplePage />
      </Route>
      {/* <Route exact path="/demo/samples/:id" render={routeProps => (
        <SamplePage {...routeProps} />
        )} /> */}
      <Route />
      <Route path="/categories">
        {/* <Categories /> */}
      </Route>
    </Router>
  )
}
export default Routes
