import Logo from './Logo'

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Logo />

      <nav>
        <ul className='flex'>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="#">Home</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="#">New</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="#">Popular</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="#">Trending</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="#">Categories</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header