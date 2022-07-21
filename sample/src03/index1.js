import React from 'react'
import ReactDOM from 'react-dom'
// 컴포넌트
function App(){
  return (
    <h1>welcome</h1>
  )
}

const root = document.querySelector('#root')
ReactDOM.render(
  // <h1>welcome</h1>,root
  <App />,root
)