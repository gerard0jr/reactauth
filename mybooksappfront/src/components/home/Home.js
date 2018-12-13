import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Hola Mike, ya ca'mate po'favo</h1>
    <Link to='/api/authors'>
      <button>Show me the Mortys</button>
    </Link>
    {/* <Link>
      <button>Agrega un Morty</button>
    </Link> */}
  </div>
  
  )

export default Home;