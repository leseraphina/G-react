import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'

function App(props) {
  const [loading,setLoading] = useState(true)
  const [users,setUsers] = useState([])
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((item) => item.json())
  .then((users) => {setUsers(users)
    setLoading(false)})
})
if(loading) {console.log('loading')};
return (
  
  <ul>
    {users.map((user) => (
      <li key = {user.id}>{user.name}</li>
    ))}
  </ul>
)

}
/*
function App() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    console.log('useEffect',count)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

