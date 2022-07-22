import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
//  40
// const AllSize = [7,8,9,10,11,12,13]
let AllSize = (
    function(small,large){
              let sized = [ ];
              for(let i = small ; i <= large ; i++) { 
                sized.push(i)
                sized.push( i + 0.5)
              }
                return sized;
              })(7,13) ;
  
  
  function ProSize(){
      function optionSize(){
        const sizes = AllSize;
        console.log(sizes)
    
        return sizes.map((item, index) => {
          return (<option value={item} key={index}>{item}</option>)
        })
      }
  return (
    <p>
      <label htmlFor="size">size :</label>
      <select>
        {optionSize()}
      </select>
    </p>
  )
  
  }
  
  function App(){
    return (
      <ProSize />
    )
  }
// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

