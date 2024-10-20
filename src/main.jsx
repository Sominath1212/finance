import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Nps from './components/Nps.jsx'
import Rd from './components/Rd.jsx'
import Fd from './components/Fd.jsx'
import Mf from './components/Mf.jsx'
import Sip from './components/Sip.jsx'
import Navbar from './components/Navbar.jsx'
import Calculators from './components/Calculators.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/fd',
    element: <Fd />
  },
  {
    path: '/Mf',
    element: <Mf />
  },
  {
    path: "/Nps",
    element: <Nps />
  },
  {
    path: '/Rd',
    element: <Rd />
  },
  {
    path: '/sip',
    element: <Sip/>
  },
  {
    path: '/services',
    element: <Calculators />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </StrictMode>,
)
