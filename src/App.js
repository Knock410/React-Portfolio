import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Display from "./components/Display";
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
   
    { name: "about", description: "Get to know me" },
    { name: "portfolio", description: "Project Library" },
    { name: "contact", description: "Connect with me" },
    { name: "resume", description: "My resume" },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
// possible add an OR operator so that the display project portion renders indvidually along witht the resume 
const [contactSelected, setContactSelected] = useState(false);
// const [portfolioSelected, setPortfolioSelected] = useState(false);

const showPage = () => {
  switch(currentCategory.name) {
    case "portfolio": return <Display currentCategory={currentCategory} />
    case "resume": return <Resume />
    case "contact": return <ContactForm />
    case "about": return <About/>
  }
}

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
      {/* {!contactSelected ? (
          <>
            <Display currentCategory={currentCategory}></Display>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
        {showPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
