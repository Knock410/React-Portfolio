import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Display from "./components/Display";
import ContactForm from './components/Contact';

function App() {

  const [categories] = useState([
   
    { name: "portfolio", description: "Project Library" },
    { name: "resume", description: "My resume" },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
// possible add an OR operator so that the display project portion renders indvidually along witht the resume 
const [contactSelected, setContactSelected] = useState(false);
// const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {/* if else statment for SPA instead of APP */}
      {!contactSelected ? (
          <>
            <Display currentCategory={currentCategory}></Display>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
