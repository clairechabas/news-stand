import Header from './components/Header'
import Hero from './components/Hero'
import New from './components/New'
import Featured from './components/Featured'

function App() {
  return (
    <div className="flex flex-col max-w-[1100px] mx-auto border border-indigo-600">
      <Header />

      <main>
        <div className="flex min-h-[511px] justify-between mt-14">
          <Hero />
          <New />
        </div>
        
        <Featured />
      </main>
    </div>
  )
}

export default App
