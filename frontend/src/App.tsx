import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, UserProfile, EditUserProfile } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/edit-user-profile" element={<EditUserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App