import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router/dom'

import Homepage from './pages/Homepage/Homepage.jsx'
import Books from './pages/Books/Books.jsx'
import MainLayout from './layout/MainLayout/Mainlayout.jsx'
import { router } from './routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
