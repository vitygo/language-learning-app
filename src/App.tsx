import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import UserDashboardPage from './pages/UserDashboardPage'

function App() {
  return (
    <>   
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/dashboard' element={<UserDashboardPage/>}/>
    </Routes>
    </>

  );
}

export default App;
