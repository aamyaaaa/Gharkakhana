import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "./auth/Login";
import Signup from "./auth/Signup"
import Cards from "./Cards";
import Forgotpass from "./auth/Forgotpass";

function App() {
  return (
    <Routes>
    <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/cards" element={<Cards/>}/>
        <Route path ="/forgotpass" element={<Forgotpass/>}/>


    </Route>
</Routes>
  );
}

export default App;
