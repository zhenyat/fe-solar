import Container   from 'react-bootstrap/Container'
import SamplesList from 'components/demo/samples/SamplesList'
import NewsBox     from 'components/layout/NewsBox'

export default function SamplesPageMain(props) {
  return (
    <div className='rowC'>
      <Container fluid="ms" className="pt-5">
        <SamplesList samples={props.samples} />
      </Container>
      <NewsBox />
    </div>
  )
}
