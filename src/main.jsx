import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './Components/DarkModeContext';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<DarkModeProvider>
   
   <App />

</DarkModeProvider>
  
</React.StrictMode>,

)
