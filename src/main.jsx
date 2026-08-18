import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="673132493559-gbla74r16q7lmsqikrp81hhjnjleu58t.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>;
    
    </BrowserRouter>
  </StrictMode>,
)
