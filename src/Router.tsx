import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

const Router = (): React.ReactNode => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
};

export default Router;
