// import react from 'react';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// function App() {
//     return (
//         <>
//         <h1>component</h1>
//         <ClassComponent />
//         <FunctionComponent />
//             </>
//     );
// }
// // export default ClassComponent;
// export default App;

import { useState } from 'react';
// import './App.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Navbar from './Nav-bar.jsx';
import User from './User.jsx';
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/User/:name" element={<User />} />
        <Route path="/Dashboard/:name" element={<Dashboard />}>
         <Route path="Settings" element={<h1>Settings</h1>}/>
         <Route path="/Profile/" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
