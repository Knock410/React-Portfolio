import React from "react";
import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

//oragnized navigation titles in an array so the same data can be oragnized and used elsewhere in the application

function Nav() {
const [categories] = useState([
  { name: "About MeProject", description: "Personal blurb" },
  { name: "Portfolio", description: "Project Library" },
  { name: "ContactProject", description: "Connect with me" },
  { name: "Resume", description: "My resume" },
]);

function categorySelected(name) {
  console.log(`${name} clicked`);
}

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="pfp">
            {" "}
          </span>{" "}
          Enoch Evelyn
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* mapped over the array  */}
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
