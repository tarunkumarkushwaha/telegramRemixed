import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorRoute from './components/Error.jsx'
import Chat from './components/Chat.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContextWrapper from './customHooks/ContextWrapper.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorRoute />,
  }
  ,
  {
    path: '/:chat',
    element: <Chat />,
    errorElement: <ErrorRoute />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>,
)
