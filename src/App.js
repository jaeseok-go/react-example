import React from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import Counter from './Counter'

function App() {
  let framework = "React";

  return (
    <div className="App">
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
