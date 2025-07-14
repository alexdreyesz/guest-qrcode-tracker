import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, UserProfile, FindUserQr} from './pages'
import PagesUrl from '../router/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path={PagesUrl.Landing} element={<Landing />} />
        <Route path={PagesUrl.UserProfile} element={<UserProfile />} />
        <Route path={PagesUrl.FindUserQr} element={<FindUserQr />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App