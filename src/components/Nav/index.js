import React from 'react';
//oragnized navigation titles in an array so the same data can be oragnized and used elsewhere in the application
const categories = [
  {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  },
  { name: "porfolio", description: "Portraits of people in my life" },
  { name: "food", description: "Delicious delicacies" },
  { name: "About MeProject", description: "Personal blurb" },
  { name: "PortfolioProjects", description: "Project Library" },
  { name: "Contact", description: "Connect with me" },
  { name: "Resume", description: "My resume" },

  {
    name: "landscape",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  },
];

function categorySelected(name) {
  console.log(`${name} clicked`)
}

function Nav() {

  return (
    <header>
        <h2>
    <a href="/">
      <span role="img" aria-label="pfp"> </span> Enoch Evelyn
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {/* mapped over the array  */}
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
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