import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = (): React.ReactNode => {
    return (
        <Routes>
            <Route path='/' element={<div>Home</div>} />
        </Routes>
    );
};

export default Router;
