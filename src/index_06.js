import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  let [year,setYear] = useState(2022)
  return (
    <div>
      <p>올해는 : {year}</p>
      <button onClick={ () => setYear(year + 1)}>더하기</button>
    </div>
  )
}


// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

