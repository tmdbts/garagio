import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Team from './views/Team';

const Router = (): React.ReactNode => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Team />} />
        </Routes>
    );
};

export default Router;
