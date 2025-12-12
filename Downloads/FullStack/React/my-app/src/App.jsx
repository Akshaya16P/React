// import React from 'react';
// import HookComponent from './Hooks';
// import UseStateExample from './Usestateex1';
// import InsertExample from './UseStateadd';

// function App() {
//   return (
//     <div>
//       <HookComponent />
//         <UseStateExample />
//         <InsertExample />
//     </div>
//   );
// }

// export default App;

// import "./Card.css";
// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//   });

//   const [cards, setCards] = useState([]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const addCard = () => {
//     if (!formData.firstname || !formData.lastname || !formData.email) return;

//     const newCard = {
//       ...formData,
//       image: "https://picsum.photos/200",
//     };

//     setCards([...cards, newCard]);
//     setFormData({ firstname: "", lastname: "", email: "" });
//   };

//   const deleteCard = (index) => {
//     setCards(cards.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="button" onClick={addCard}>
//           Add
//         </button>
//       </form>

//       <div className="parent">
//         {cards.map((card, index) => (
//           <div className="card" key={index}>
//             <button className="delete" onClick={() => deleteCard(index)}>
//               ✕
//             </button>
//             <img src={card.image} alt="user" />
//             <p>
//               <b>
//                 {card.firstname} {card.lastname}
//               </b>
//             </p>
//             <p>{card.email}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Forms from './Forms';
import Viewdata from './Viewdata';
import ProductDetails from './ProductDetails';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adddata" element={<Forms onAddProduct={handleAddProduct} />} />
        <Route path="/Viewdata" element={<Viewdata products={products} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
