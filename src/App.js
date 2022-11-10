import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Display from "./components/Display";

function App() {

  const [categories] = useState([
    { name: "About MeProject", description: "Personal blurb" },
    { name: "Display", description: "Project Library" },
    { name: "ContactProject", description: "Connect with me" },
    { name: "Resume", description: "My resume" },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <div>
        <Display currentCategory={currentCategory}></Display>
        <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
