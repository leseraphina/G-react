import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';

function NameForm({handleSubmit,handleChange}){
let [a, setA] = useState({value: ''})
return (
  <form onSubmit={handleSubmit}>
    <p>
    <label>Name:</label>
    <input 
      type="text" 
      value={a.value} 
      onChange={handleChange} />
  </p>
  <p>
   <input type="submit" value="Submit" />
  </p>     
  </form>
    );

function handleChange(event) {
  setA({value: event.target.value});
}

function handleSubmit(event) {
  event.preventDefault();
  alert('A name was submitted: ' + a.value);

}
}


// 출력
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameForm />
  </React.StrictMode>
);
