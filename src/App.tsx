import {Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import MainPage from './pages/MainPage'

function App() {
  return (
    <>   
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    </>

  );
}

export default App;
