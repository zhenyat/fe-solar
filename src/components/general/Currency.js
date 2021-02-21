import NumberFormat from 'react-number-format'

const Currency = props => {
  return (
    <NumberFormat
      value={props.value}
      displayType={'text'}
      isNumericString={true}
      decimalScale={2}
      fixedDecimalScale={true}
      decimalSeparator={','}
      thousandSeparator={false}
      suffix={' \u20BD'}
      renderText={value => <h5>{value}</h5>}

      // Alternative (US) presentation:
      // decimalSeparator={'.'}
      // thousandSeparator={true}
    />  
  )
}
export default Currency