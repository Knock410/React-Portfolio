import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Display";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
