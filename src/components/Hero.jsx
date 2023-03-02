import heroPostImg from '../assets/img/hero-post.jpg'

function Hero() {
  return (
    <div className="grow flex flex-col justify-between">
      <img src={heroPostImg} alt="hero post featured image" />
      
      <div className='flex mt-7'>
        <h2 className='basis-1/2 text-xl font-extrabold text-darkish'>The Bright Future of Web 3.0?</h2>
        <div className='basis-1/2	flex flex-col justify-between'>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <a className='text-white font-bold text-[14px] leading-6 tracking-[4.38px] px-8 py-3 uppercase bg-vermillion hover:bg-darkish self-start' href="/some-cool-post">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Hero