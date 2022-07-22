import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function App(props){
  const [count,setCount] = useState(0)
  useEffect(()=>{console.log('effect0')});
  useEffect(()=>{console.log('effect1',count)},[]);
  useEffect(()=>{console.log('effect2',count)},[count]);
  return (
    <div>
      <h1>effect 기본 {props.title}</h1>
      <p>count변경보기 : {count}</p>
      <button onClick = {click}>click</button>
    </div>
  )
  function click(){
    setCount(count + 1)
  }
}


// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="welcome" />
  </React.StrictMode>
);

