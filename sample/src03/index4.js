//  import
import React from 'react'
import ReactDOM from 'react-dom/client'

const str = {
  str1 : 'sample01',
  str2 : 'sample02',
  str3 : 'sample03'
}

function App(){
return (
  <ul>
    <li>{str.str1}</li>
    <li>{str.str2}</li>
    <li>{str.str3}</li>
    <li>{ 4 * 10}</li>
  </ul>
)
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)