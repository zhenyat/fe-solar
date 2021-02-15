import Container      from 'react-bootstrap/Container'
import CategoriesList from 'components/categories/CategoriesList'
import NewsBox        from 'components/layout/NewsBox'

export default function Main(props) {
  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        <CategoriesList categories={props.categories} />
      </Container>
      <NewsBox />
    </div>
  )
}