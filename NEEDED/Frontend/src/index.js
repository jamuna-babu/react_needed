

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/SignUp.jsx';
import SignIn from './pages/signin/SignIn.jsx';
import Home from './pages/home/home'
import MyReservations from './pages/myreservations/MyReservations.js'
import ListEmployeeComponent from './Components/ListEmployeeComponent.jsx';
import ReceivedRequests from './pages/receivedrequest/ReceivedRequests'
import MyHouses from './pages/myhouses/MyHouses'
import AddMyHouse from './pages/addmyhouse/AddMyHouse'
import FindMyHouse from './pages/findmyhouse/FindMyHouse'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
       <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/addproduct" element={<ListEmployeeComponent/>} />
      <Route path="/Home/MyReservations" element={<MyReservations/>} />
      <Route path="/Home/ReceivedRequests" element={<ReceivedRequests/>} />
      <Route path="/Home/MyHouses" element={<MyHouses/>} />
      <Route path="/Home/FindMyHouse" element={<FindMyHouse/>} />
      <Route path="/Home/AddMyHouse" element={<AddMyHouse/>} /> 
    </Routes>

  </BrowserRouter>
);