import './App.css'
import Navbar from './components/navbar'
import LandingPage from './pages/landingpage'

function App() {
  return (
    <div className='min-h-screen w-full bg-white'>
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App