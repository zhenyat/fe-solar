import React       from 'react'
import MainContent from './MainContent'
import NewsBox     from './NewsBox'

export default function Main() {
  return (
    <div className='rowC'>
      <MainContent />
      {/* {  true && <NewsBox /> } */}
      <NewsBox />
    </div>
  )
}
