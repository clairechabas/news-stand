import Logo from './Logo'

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Logo />

      <nav>
        <ul className='flex items-center'>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="/">Home</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="/new">New</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="/codinh">Coding</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="/growing">Growing</a></li>
          <li className="ml-10 text-gunmetal hover:text-yellow"><a href="/thinking">Thinking</a></li>
          <li className="ml-10 "><a href="/add-category" className='pb-.5 text-white bg-vermillion hover:bg-darkish w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm'>+</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header