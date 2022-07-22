import React from 'react';
import ReactDOM from 'react-dom/client';

const List = ['title01','title02','title03']

function App(props){
  console.log(props.title)
  return (
    <ul>
      {props.title.map((item, index) => (<li key={index}>{item}</li>))}
    </ul>
  )
}
// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  title = {List} />
  </React.StrictMode>
);

