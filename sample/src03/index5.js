//  import
import React from 'react'
import ReactDOM from 'react-dom/client'

// const book = {
//   title:'react',
//   price:'30000원',
//   room : 'A장소'
// }

function ReactBook(props){
  console.log(props)
  return (
    <dl>
      <dt>책의 이름</dt>
      <dd>{props.title}</dd>
      <dt>가격</dt>
      <dd>{props.price}</dd>
      <dt>강의실</dt>
      <dd>{props.room}</dd>
    </dl>
  )
}
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <ReactBook 
      title="react" 
      price="30000원"
      room = "A 강의실"
      />
  </React.StrictMode>
)