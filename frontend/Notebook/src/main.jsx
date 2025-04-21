import React from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { AlertProvider } from './context/note/alert/alertContext.jsx'

createRoot(document.getElementById('root')).render( 
    <AlertProvider>
    <App /> 
    </AlertProvider>
)
