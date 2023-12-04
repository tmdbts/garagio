import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Team from './views/Team';
import About from './views/About';

const Router = (): React.ReactNode => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
        </Routes>
    );
};

export default Router;
