import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Create from "./pages/movies/Create";
import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
