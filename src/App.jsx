import React from 'react';
import styles from './App.module.scss';

import Header from './Header';
import Swiper from './Movies';
import Trending from './Trending';
import MoviePage from './MoviePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Swiper />
      <Routes>
        <Route path='/' element={<Trending />} />
        <Route path=':id' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
