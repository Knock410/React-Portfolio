import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/portfolio-pics/calendar.jpg";

function Display(props) {
  const currentCategory = {
    name: "Portfolio", description: "Project Library"
    

  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img 
           src={photo} 
           alt="Weather App"
           className="img-thumbnail mx-1"
           />
      </div>
    </section>
  );
}
export default Display;