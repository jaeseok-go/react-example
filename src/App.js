import React from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  let framework = "React";

  return (
    <div className="App">
      <MyHeader />
        <h2>Hello {framework}!!</h2>
        <b id="bold_text">{framework}??</b>
      <MyFooter />
    </div>
  );
}

export default App;
