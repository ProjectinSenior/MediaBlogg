import React from 'react'
import PostDetail from './PostDetail'
function Home({data}) {
  //Render the Home component, which includes  a map function that iterates over the data array and renders a PostDetail component for each item, passing the item as a prop
  return (
    <div className='container'>  
      {data.map((el, i) => (
      <PostDetail el={el} key={i}  />
    )).reverse()}
    </div>
  )
}

export default Home