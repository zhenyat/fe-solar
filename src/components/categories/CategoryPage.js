import React, { useState, useEffect } from 'react'
import axios          from 'axios'
import {useParams }   from 'react-router-dom'
import * as Constants from 'constants/globals'
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import Category       from 'components/categories/Category'

function CategoryPage(props) {
  const [category, setCategory] = useState({})
  let { id } = useParams()

  useEffect(() => {
    axios({
      method: "GET",
      url: Constants.API_URL + '/categories/' + id
    }).then((response) => {
      setCategory(response.data)
    })
  }, [id] )    // useEffect gets triggered after every render! So, [] MUST BE!

  return (
    <>
      <Head
        seo_title={category.seo_title}
        seo_description={category.seo_description}
        seo_keywords={category.seo_keywords}
      />
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header title={category.title} />
          </div>
          <div className="App-main">
            <div className="main_background">
              <Category category={category} />
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
export default CategoryPage