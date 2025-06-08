import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing/Landing"
import UserProfile from "./pages/UserProfile/UserProfile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App