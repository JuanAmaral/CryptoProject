import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/index';
import Feed from '../Pages/Feed/index';

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        {/* <Route path="/" element={Home} /> */}
      </Routes>
    </div>
  );
}
