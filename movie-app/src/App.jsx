import { BrowserRouter, Routes, Route } from 'react-router-dom'

import data from '../utils/constants/data';
import { useState } from 'react';

import Home from "./pages/Home";
import Layout from './layouts/Layout';

// pages
import Create from "./pages/movies/Create";
import Popular from './pages/movies/Popular';
import NowPlaying from './pages/movies/NowPlaying';
import TopRated from './pages/movies/TopRated';

function App() {
  const moviesState = useState(data)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home moviesState={moviesState}/>} />
          <Route path='movies' >
            <Route index element={<Home moviesState={moviesState}/>} />
            <Route path='create' element={<Create />}></Route>
            <Route path='popular' element={<Popular moviesState={moviesState}/>}></Route>
            <Route path='now-playing' element={<NowPlaying />}></Route>
            <Route path='top-rated' element={<TopRated />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
