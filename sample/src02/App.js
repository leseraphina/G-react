import React,{useState} from 'react'
import './App.css'

const selectColor = ['red','blue','green','purple','brown']
function ProImg(props){
  return (
    <img src={`./data/${props.color}.jpg`} alt="상세이미지" />
  )
}

function ProColor(props){
  function optionColor(){
    let colors = selectColor;
    return colors.map( (item, index) => {
      return (<option value={item} key={index}>{item}</option>)
    })
  }
  function onColorChange(evt){
    // console.log(evt.target.value)
    props.hColorChange(evt.target.value)
  }
  return (
    <p>
      <label htmlFor="color">color:</label>
      <select 
        id="color"
        defaultValue={props.color}
        onChange={onColorChange}
        >
        {optionColor()}
      </select>
    </p>
  )
}

function App(){
  const [color,setColor] = useState('blue')
  function hColorChange(selectColor){
    setColor(selectColor)
  }
  return (
    <div className="main">
    <ProImg color={color} />
    <ProColor 
      color={color}
      hColorChange={hColorChange} />
    </div>
  )
}

export default App