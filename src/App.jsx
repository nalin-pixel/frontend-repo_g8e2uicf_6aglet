import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="lg:pl-[240px]">
        <Hero />
        <Sections />
      </main>
    </div>
  )
}

export default App
