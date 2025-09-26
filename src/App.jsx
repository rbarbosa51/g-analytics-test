import {Home, Second} from './pages'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <HashRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </HashRouter>
  )
}

export default App
