import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Application from './Pages/Application';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

function App() {
  return (
    <Routes>

      {/* Page d'aceuil */}
      <Route path='/' element={<Home />} />

      {/* Page de login */}
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />

      {/* Page dans l'app */}
      <Route path='/app/*' element={<Application />} />

    </Routes>
  )
}

export default App
