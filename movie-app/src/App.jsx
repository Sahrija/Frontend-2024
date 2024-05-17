import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Layout from './layouts/Layout';

// pages
import Create from "./pages/movies/Create";
import Popular from './pages/movies/Popular';
import NowPlaying from './pages/movies/NowPlaying';
import TopRated from './pages/movies/TopRated';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' >
            <Route index element={<Home />} />
            <Route path='create' element={<Create />}></Route>
            <Route path='popular' element={<Popular />}></Route>
            <Route path='now-playing' element={<NowPlaying />}></Route>
            <Route path='top-rated' element={<TopRated />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
