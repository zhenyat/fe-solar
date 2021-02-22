import Container      from 'react-bootstrap/Container'
import CategoriesList from 'components/categories/CategoriesList'
import SideBox        from 'components/layout/SideBox'

export default function Main(props) {
  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        <CategoriesList categories={props.categories} />
      </Container>
      <SideBox />
    </div>
  )
}
