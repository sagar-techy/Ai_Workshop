import React from 'react'
import { BrowserRouter as AppRouter, Route,Routes as AppRoutes } from "react-router-dom";
import Home from '../views/home/Home';
import Create from '../views/create-project/Create';
import Project from '../views/project/Project';

const Routes = () => {
  return (
    <>
      <AppRouter>
        <AppRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/create-project" element={<Create/>} />
          <Route path='/project/:id' element={<Project />} />
        </AppRoutes>
      </AppRouter>
    </>
  )
}

export default Routes