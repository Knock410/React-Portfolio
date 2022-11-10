import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Display from "./components/Display";
import ContactForm from './components/Contact';

function App() {

  const [categories] = useState([
    { name: "about meproject", description: "Personal blurb" },
    { name: "portfolio", description: "Project Library" },
    { name: "contactproject", description: "Connect with me" },
    { name: "resume", description: "My resume" },
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
        <ContactForm></ContactForm>
        <Display currentCategory={currentCategory}></Display>
        <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
