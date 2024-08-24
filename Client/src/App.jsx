import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Auth from './Components/Auth'
import EnvCheck from './Components/EnvCheck';
import Test from './Components/Test';
import Signup from './Components/Signup';
import SubmittedTest from './Components/SubmittedTest';

function App() {
  return (
    <>   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/EnvCheck" element={<EnvCheck />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/SubmittedTest" element={<SubmittedTest />} />
      </Routes>
    </BrowserRouter>
    </>
  ); 
}

export default App;