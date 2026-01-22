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

// import { useState } from 'react';
// import './App.css';
// import Home from './Home.jsx';
// import About from './About.jsx';
// import Contact from './Contact.jsx';
// import Navbar from './Nav-bar.jsx';
// import User from './User.jsx';
// import Dashboard from './Dashboard.jsx';
// import Profile from './Profile.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/User/:name" element={<User />} />
//         <Route path="/Dashboard/:name" element={<Dashboard />}>
//          <Route path="Settings" element={<h1>Settings</h1>}/>
//          <Route path="/Profile/" element={<Profile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from 'react';
// import Addons from './Addons.jsx';
// function App(){
//     return(
//         <Addons />
//     );
// }
// export default App;

// import React from 'react';
// import { NameProvider } from './NameContext';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';
// import Component4 from './Component4';
// import Component5 from './Component5';
// function App() {
//     return (
//         <NameProvider>
//             <div>
//                 <Component1 />
//                 <Component2 />
//                 <Component3 />
//                 <Component4 />
//                 <Component5 />
//             </div>
//         </NameProvider>
//     );
// }
// export default App;


// import React from 'react';
// import axios from 'axios';
// function App(){
//     let baseURL="http://localhost:7000";
//    const adddata=()=>{
//     axios.get(`${baseURL}/get-students`)
//     .then((result)=>console.log(result.data))
//         .catch((error)=>console.log(error)); 
//     }
//     let myuser={
//         name:"Akshaya",
//         roll:"164378"
//     };
//     const postdata=()=>{
//         axios.post(`${baseURL}/add-students`,myuser)
//         .then((result)=>console.log(result.data))
//         .catch((error)=>console.log(error));
//     }
//     return(
//         <>
//         <h1>This is frontend!!</h1>
//         <button onClick={adddata}>Get Data</button>
//         <button onClick={postdata}>Post Data</button>
//         </>
//     )
// }
// export default App;


import StudentForm from "./studentForm";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Add Student</h2>
      <StudentForm />
    </div>
  );
}

export default App;
