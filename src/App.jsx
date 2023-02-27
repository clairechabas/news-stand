import Header from './components/Header'
import Hero from './components/Hero'
import New from './components/New'
import Featured from './components/Featured'

function App() {
  return (
    <div className="flex flex-col max-w-[1100px] mx-auto border border-indigo-600">
      <Header className="border border-indigo-600" />

      <main className="border border-indigo-600">
        <div className="flex min-h-[511px] justify-between mt-14 border border-indigo-600">
          <Hero className="border border-indigo-600" />
          <New className="border border-indigo-600" />
        </div>
        
        <Featured className="mt-14 border border-indigo-600" />
      </main>
    </div>
  )
}

export default App
