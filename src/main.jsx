import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import './component/nav/Nav.css'
 import './component/home/Home.css'
 import './component/about/About.css'
 import './component/projects/Projects.css'
 import './component/technology/Technology.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
