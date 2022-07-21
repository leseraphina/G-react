//  import
import React from 'react'
import ReactDOM from 'react-dom/client'
function Com(){
  return (
    <>
    <h1 id="main">welcome</h1>
    <h2 className="sub" name={5}>welcome2</h2>
    </>
    // <div>
    // <h1>welcome</h1>
    // <h2>welcome2</h2>
    // </div>
  )}
// export
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <Com />
  </React.StrictMode>
)