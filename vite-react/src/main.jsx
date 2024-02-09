import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuickStart from './QuickStart.jsx'
import ThinkingReact from './ThinkingInReact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>TEST HEADER</h1> 
    <p>The quick brown fox jumped over the lazy dog</p>
    <hr/>
    {/* Non-React element will still get styled and rendered on the page*/}
    {/* But, the 'npm run dev' might need to be run again */}
    {/* Actually, ViteJS sometimes loads automatically, sometimes it doesn't, so it depends */}
    

    <App />
    <br /><hr /><br />
    <QuickStart />
    <br /><hr /><br />
    <ThinkingReact />
    <br /><hr /><br />
  </React.StrictMode>,
)
