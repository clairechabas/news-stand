import Hero from './components/Hero'
import New from './components/New'
import Featured from './components/Featured'

function Home() {
  return (
    <main>
        <div className="flex min-h-[511px] justify-between mt-14">
          <Hero />
          <New />
        </div>
        
        <Featured />
      </main>
  )
}

export default Home