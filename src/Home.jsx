import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  function goto() {
    navigate(`/User/${name}`);
  }

  return (
    <>
      <h1>Welcome to Home Page</h1>
      <input
        type="text"
        placeholder="Enter name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={goto}>Proceed</button>
    </>
  );
}

export default Home;
