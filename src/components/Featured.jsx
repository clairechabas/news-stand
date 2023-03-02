import featuredImg1 from '../assets/img/featured-1.jpg'
import featuredImg2 from '../assets/img/featured-2.jpg'
import featuredImg3 from '../assets/img/featured-3.jpg'

function Featured() {
  return (
    <div className="mt-14 mb-32">
      <ul className='flex'>
        <li className='basis-1/3 flex mr-7'>
          <div className='h-[127px] w-[100px]'>
            <img className='h-full w-full object-cover' src={featuredImg1} alt="Tech equipment photo by Lorenzo Herrera on Unsplash" />
          </div>

          <div className='grow flex flex-col justify-between ml-6'>
            <span className='text-md text-silver font-bold'>01</span>
            <h3 className='text-xs font-extrabold text-darkish hover:text-vermillion cursor-pointer'>Reviving Retro PCs</h3>
            <p className='text-base text-gunmetal'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </li>
        <li className='basis-1/3 flex mr-7'>
          <div className='h-[127px] w-[100px]'>
            <img className='h-full w-full object-cover' src={featuredImg2} alt="Keyboard photo by Chris J. Davis on Unsplash" />
          </div>
          
          <div className='flex flex-col justify-between ml-6'>
            <span className='text-md text-silver font-bold'>02</span>
            <h3 className='text-xs font-extrabold text-darkish hover:text-vermillion cursor-pointer'>Top 10 Laptops of 2022</h3>
            <p className='text-base text-gunmetal'>Our best picks for various needs and budgets.</p>
          </div>
        </li>
        <li className='basis-1/3 flex'>
          <div className='h-[127px] w-[100px]'>
            <img className='h-full w-full object-cover' src={featuredImg3} alt="Gaming console handler photo by Nikita Kachanovsky on Unsplash" />
          </div>
          
          <div className='flex flex-col justify-between ml-6'>
            <span className='text-md text-silver font-bold'>03</span>
            <h3 className='text-xs font-extrabold text-darkish hover:text-vermillion cursor-pointer'>The Growth of Gaming</h3>
            <p className='text-base text-gunmetal'>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Featured