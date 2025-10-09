import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import LandingPageV2 from './pages/LandingPageV2'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ChangePassword from './pages/ChangePassword'
import Maps from './pages/Maps'
import Profile from './pages/Profile'
import Page404 from './pages/Page404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/landing-v2' element={<LandingPageV2/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changePassword' element={<ChangePassword/>}/>
        <Route path='/maps' element={<Maps/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
