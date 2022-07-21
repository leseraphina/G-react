//  import
import React from 'react'
import ReactDOM from 'react-dom/client'

// const book = {
//   title:'react',
//   price:'30000원',
//   room : 'A장소'
// }

// function ReactBook({title,price,room}){
//   return (
//     <dl>
//       <dt>책의 이름</dt>
//       <dd>{title}</dd>
//       <dt>가격</dt>
//       <dd>{price}</dd>
//       <dt>강의실</dt>
//       <dd>{room}</dd>
//     </dl>
//   )
// }
//  함수, class
class ReactBook extends React.Component{
   render(){
    return (
        <dl style={
            {   color:'red',
                backgroundColor:'yellow',
                fontSize:'25px',
                textAlign:'center'
            }
        }>
            <dt>책의이름</dt>
            <dd>{this.props.title}</dd>
            <dt>책의 가격</dt>
            <dd>{this.props.price}</dd>
            <dt>강의실</dt>
            <dd>{this.props.room}</dd>
        </dl>
    )
   } 
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