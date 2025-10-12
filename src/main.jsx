import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Tables from './Tables.jsx'
// import App from './Form.jsx'
// import App from './ClassComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Tables /> */}
  </StrictMode>,
)
