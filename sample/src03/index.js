import React from 'react'
import ReactDOM from 'react-dom/client'
import Sample01 from './components/Sample01'
import Sample02 from './components/Sample02'
import Sample03 from './components/Sample03'

function App(){
    return (
        <div>
            <Sample01 title="red" />
            <Sample02 title="yellow" />
            <Sample03 title="green" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)