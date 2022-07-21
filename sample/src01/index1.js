import React from 'react';
import ReactDOM from 'react-dom/client';

function Black(props){
  return(
    <p>
      Black 입니다.
    </p>
  )
}
function White(props){
  return (
    <p>White 입니다.</p>
  )
}
function App(props){
const bool = props.title
if(bool){
  return <White />
}
else{
  return <Black />
}

}

// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title={false} />
  </React.StrictMode>
);

