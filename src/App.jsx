import Header from './components/Header'
import Root from './Root'
import Error from './Error'
import Posts from './components/Posts'
import Post from './components/Post'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
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

function App() {
  return (
    <div className="flex flex-col max-w-[1100px] mx-auto mt-14">
      <Header />

      <RouterProvider router={router} />
    </div>
  )
}

export default App
