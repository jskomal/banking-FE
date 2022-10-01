import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Transfer from './components/Transfer'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    element: <App />
  },
  { path: '/', element: <App />, children: [{ element: <Home /> }], index: true },
  {
    path: 'transfer',
    element: <App />,
    children: [{ path: '/transfer', element: <Transfer /> }]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
