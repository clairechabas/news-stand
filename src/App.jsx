import Header from './components/Header'
import Home from './Home'
import Error from './Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
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
