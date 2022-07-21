
import React from "react";

const allColor = ['red','blue','yellow','orange','violet']

function ProColor(){
  function optionColor(){
    let colors = allColor
      return colors.map( (item,index) => {
        return (<option value={item} key={index}>{item}</option>)
      })
  }
  return (
    <p>
      <label htmlFor="color">color:</label>
      <select id="color">
        {optionColor()}
      </select>
    </p>
  )
}

function App(){
  return (<ProColor />)
}

export default App 