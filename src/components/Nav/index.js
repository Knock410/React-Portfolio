import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

//oragnized navigation titles in an array so the same data can be oragnized and used elsewhere in the application

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
 
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid='link' href="/">
          {/* add profile pic */}
          <span role="img" aria-label="pfp">
            {" "}
          </span>{" "}
          Enoch Evelyn
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {/* mapped over the array  */}
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
