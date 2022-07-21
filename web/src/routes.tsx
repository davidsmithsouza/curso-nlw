import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';

function WebRoutes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing}/>
        </BrowserRouter>
    );

    
}

export default WebRoutes;