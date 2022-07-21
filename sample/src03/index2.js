import React from 'react'
import ReactDOM from 'react-dom/client'
// 컴포넌트
function App(){
  return (
    <h1>
      {/* JSX 안에서  */}
      welcome
      </h1>
    
  )
}
// 자바스크립트
const root =ReactDOM.createRoot(document.querySelector('#root'))
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
)