import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import AddToCartPage from './pages/AddToCartPage.jsx'
import TodoApp from './pages/TodoApp.jsx'

const routes = createBrowserRouter([
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "cart",
    element: <AddToCartPage />
  },
  {
    path: "todo",
    element: <TodoApp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
