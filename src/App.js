import React from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import Counter from './Counter'
import Container from './Container';

function App() {
  let framework = "React";

  return (
    <Container>
      <MyHeader />
      <Counter />
      <MyFooter />
    </Container>
  );
}

export default App;
