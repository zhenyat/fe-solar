import Container      from 'react-bootstrap/Container'
import CategoriesList from 'components/categories/CategoriesList'
import ProductsList   from 'components/products/ProductsList'
import SamplesList    from 'components/demo/samples/SamplesList'
import NewsBox        from 'components/layout/SideBox'

export default function ItemsMain(props) {
  // console.log("ZT! ItemsMain - props: ", props)
  // var itemsList;
  // switch (props.itemsType) {
  //   case "products":
  //     itemsList = <ProductsList products={props.items} />
  //     break
  //   case "samples":
  //     itemsList = <SamplesList samples={props.items} />
  //     break
  //   default:
  //     itemsList = <CategoriesList categories={props.items} />
  // }

  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        {itemsList}
      </Container>
      <NewsBox />
    </div>
  )
}

