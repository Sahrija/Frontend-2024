import { BrowserRouter, Routes, Route } from 'react-router-dom'

import data from '../utils/constants/data';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../utils/constants/theme';

import Home from "./pages/Home";
import Layout from './layouts/Layout';

// pages
import Create from "./pages/movies/Create";
import Popular from './pages/movies/Popular';
import NowPlaying from './pages/movies/NowPlaying';
import TopRated from './pages/movies/TopRated';

function App() {
  const [movies, setMovies] = useState(data)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home movies={movies} setMovies={setMovies} />} />
            <Route path='movies' >
              <Route index element={<Home movies={movies} setMovies={setMovies} />} />
              <Route path='create' element={<Create />}></Route>
              <Route path='popular' element={<Popular movies={movies} setMovies={setMovies} />}></Route>
              <Route path='now-playing' element={<NowPlaying />}></Route>
              <Route path='top-rated' element={<TopRated />}></Route>
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
