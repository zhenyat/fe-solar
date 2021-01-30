import React from 'react'
import * as Constants   from 'constants/globals';
import Table  from 'react-bootstrap/Table';
import Head   from 'components/general/Head'
import Source from 'components/general/Source'

const Page = (props) => {
  let title = props.title ? props.title : Constants.SEO_TITLE_DEFAULT
  let description = props.description ? props.description + Constants.SEO_DESCRIPTION_ADDENDUM
                                      : Constants.SEO_DESCRIPTION_DEFAULT
  let keywords = props.keywords ? props.keywords : Constants.SEO_KEYWORDS_DEFAULT
  
  return (
    <div className='container'>
      <Head 
        title={title}
        description={description}
        keywords={keywords}
      />
      <main>
        <Source />
        <h1>Page with Head</h1>
        <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <th>SEO title</th>
            <td>{title}</td>
          </tr>
          <tr>
            <th>SEO Description</th>
            <td>{description}</td>
          </tr>
          <tr>
            <th>SEO Keywords</th>
            <td>{keywords}</td>
          </tr>
        </tbody>
        </Table>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}
export default Page
