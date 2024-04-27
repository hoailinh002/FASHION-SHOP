import React from 'react';
// import { Link } from 'react-router-dom';
import  Header  from "./parts/Header";
import  HomePage  from "./container/HomePage";


import './App.css';

function App() {
  return (
    <div className="App">
      

        {/* <Link to="/Home">Home</Link>

        <Link to="/Products">Products</Link> */}
        
        <div>
          <Header></Header>
          <HomePage></HomePage>
        </div>
        
    </div>
  );
}

export default App;
