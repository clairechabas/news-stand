import { Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Logo />

      <nav>
        <ul className='flex items-center'>
          <li className="ml-10 text-gunmetal hover:text-yellow"><Link to={`/`}>Home</Link></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><Link to={`/new`}>New</Link></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><Link to={`/coding`}>Coding</Link></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><Link to={`/growing`}>Growing</Link></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><Link to={`/thinking`}>Thinking</Link></li>
          <li className="ml-10 "><Link to={`/create-category`} className='pb-.5 text-white bg-vermillion hover:bg-darkish w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm'>+</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header