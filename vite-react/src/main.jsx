import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuickStart from './QuickStart.jsx'
import ThinkingReact from './ThinkingInReact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br /><hr /><br />
    <QuickStart />
    <br /><hr /><br />
    <ThinkingReact />
    <br /><hr /><br />
  </React.StrictMode>,
)
