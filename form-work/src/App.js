import React, { useState } from "react";
import Form from './components/Form'


import './App.css';







function App() {


  const [players, setPlayers] = useState({
    name: 'Diddo',
    email: '5 Feet',
    role: '210lbs'
  },
  {
    name: 'Alexandar Nathanael Fabion Braxton Jr. III',
    email: '7.5 Feet',
    role: '140lbs'
  },
  {
    name: 'Jareld',
    email: '6.5 Feet',
    role: '280lbs'
  }
  )
  







  return (


    <div className="App">

      <h1>hello</h1>

      <Form {...setPlayers} />

    </div>


  );
}

export default App;
