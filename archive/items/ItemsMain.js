import Container from 'react-bootstrap/Container'
import Dummy from 'components/items/Dummy'

import NewsBox        from 'components/layout/SideBox'

// export default function ItemsMain(props) {
const ItemsMain = props => {
  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        < itemsList items={props.items} itemsType={props.itemsType} />
      </Container>
      <NewsBox />
    </div>
  )
}
export default ItemsMain
