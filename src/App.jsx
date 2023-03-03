import Header from './components/Header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col max-w-[1100px] mx-auto mt-14">
      <Header />

      <Outlet />
    </div>
  )
}

export default App
