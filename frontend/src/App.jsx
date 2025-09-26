import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import LandingPage from './pages/landingpage'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <Router>
      <div className='min-h-screen w-full bg-white'>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App