import React, { useState, useEffect } from 'react'
import axios          from 'axios'
import {useParams }   from 'react-router-dom'
import * as Constants from 'constants/globals'
import Head           from 'components/layout/Head'
import Header         from 'components/layout/Header'
import Footer         from 'components/layout/Footer'
import Sample         from 'components/demo/samples/Sample'

function SamplePage(props) {
  const [sample, setSample] = useState({})
  let { id } = useParams()

  useEffect(() => {
    axios({
      method: "GET",
      // url: `http://localhost:3001/api/v1/samples/${props.match.params.id}`
      url: Constants.API_URL + '/samples/' + id

    }).then((response) => {
      // console.log("ZT! Sample-response.data: ", response.data)
      setSample(response.data)
      // console.log("ZT! Sample-sample: ", sample.quantity)
    })
  }, [id, sample.quantity] )    // useEffect gets triggered after every render! So, [] MUST BE!

  return (
    <>
      <Head
        // seo_title={sample.seo_title}
        // seo_description={sample.seo_description}
        // seo_keywords={sample.seo_keywords}
      />
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header title={sample.title} />
          </div>
          <div className="App-main">
            <div className="main_background">
              <Sample sample={sample} />
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
export default SamplePage