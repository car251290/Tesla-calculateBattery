import React, { Component} from 'react';
import './App.css';
import TeslaBattery from './Component/cotainers/TeslaBattery';
import Header from './Component/Header/Header';

const App= () => {
  const counterDefaultVal = {
    speed: {
      title: "Speed",
      unit: "mph",
      step: 5,
      min: 45,
      max: 70
    },
    temperature: {
      title: "Outside Temperature",
      unit: "°",
      step: 10,
      min: -10,
      max: 40
    }
  };

  return (
    <div className="App">
      <Header />  
      <TeslaBattery counterDefaultVal={counterDefaultVal} />
    </div>
  );
}

export default App;
