import './App.css'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Galeria from './pages/Galeria';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  )
}

export default App
