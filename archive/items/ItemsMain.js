import Container from 'react-bootstrap/Container'
import SideBox   from 'components/layout/SideBox'

// export default function ItemsMain(props) {
const ItemsMain = props => {
  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        < itemsList items={props.items} itemsType={props.itemsType} />
      </Container>
      <SideBox />
    </div>
  )
}
export default ItemsMain
