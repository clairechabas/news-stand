import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './Error'
import Home from './components/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':category',
        element: <Posts />
      },
      {
        path: ':category/:postId',
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
