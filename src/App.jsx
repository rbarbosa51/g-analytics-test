import {Home, Second} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<Second />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
