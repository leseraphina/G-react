import React from 'react';
import ReactDOM from 'react-dom/client';

function Black(){
  return(
    <p>
      Black 입니다.
    </p>
  )
}
function White(){
  return (
    <p>White 입니다.</p>
  )
}
function App(props){
  return (
    // <Black />
    props.title === 'black' ? <Black /> : <White />
  )
}

// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="white" />
  </React.StrictMode>
);

