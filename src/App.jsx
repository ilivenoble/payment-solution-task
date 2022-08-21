import React from 'react'

import {Personal} from './components/Personal'
import {Billing} from './components/Billing'
import {Confirm } from './components/Confirm'
import { Completed } from './components/Completed'
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  
  return (
    <div className="w-full sm:m-0 p-3  flex flex-col justify-center items-center font-mono">
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App
