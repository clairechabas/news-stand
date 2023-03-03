import Hero from './Hero'
import New from './New'
import Featured from './Featured'

function Posts() {
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

export default Posts