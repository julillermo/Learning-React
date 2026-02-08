import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TicTacToe from './TicTacToe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <br /><hr /><br /> */}

    <TicTacToe />
  </React.StrictMode>,
)
