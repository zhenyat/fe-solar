import React from 'react'
import Table from 'react-bootstrap/Table';
import Head from '../general/Head'
import Source from '../general/Source'

const Page = (props) => {
  let title = props.title ? props.title : "ZT Dummy"
  let description = props.description ? props.description : "Dummy dummy"
  description = description + " | ZT "
  let keywords = props.keywords ? props.keywords : "zt dummy dummy dummy"
  
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
