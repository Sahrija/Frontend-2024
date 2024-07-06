import { BrowserRouter, Routes, Route } from 'react-router-dom'

import data from '../utils/constants/data';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../utils/constants/theme';

import MoviesContext from './context/MoviesContext';

import Home from "./pages/Home";
import Layout from './layouts/Layout';

// pages
import Create from "./pages/movies/Create";
import Popular from './pages/movies/Popular';
import NowPlaying from './pages/movies/NowPlaying';
import TopRated from './pages/movies/TopRated';
import Detail from './pages/movies/Detail';


function App() {
  const [movies, setMovies] = useState(data)

  const contextValue = {
    movies,
    setMovies
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
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
              <Route path='movie/:id' element={<Detail />} />
            </Route>
          </Routes>
        </MoviesContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
