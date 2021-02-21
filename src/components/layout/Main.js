import React       from 'react'
import MainContent from './MainContent'
import NewsBox     from './SideBox'

export default function Main() {
  return (
    <div className='rowC'>
      <MainContent />
      {/* {  true && <NewsBox /> } */}
      <NewsBox />
    </div>
  )
}
