import React, { useState } from "react";

//component for displaying photos
const PhotoProjectDisplay = ({ category }) => {
  console.log(category);
  const [photos] = useState([
    {
      name: "Calendar",
      // title: "Calendar",
      category: "portfolio",
      description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link:"https://knock410.github.io/Calendar-/" 
      },
    {
      name: "Note Taker",
      // title: "Note Taker",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://radiant-dawn-79781.herokuapp.com/"
      },
    {
      name: "Quiz",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://knock410.github.io/Quiz-/",
      },
    {
      name: "Take Note",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link:"https://peaceful-sierra-50494.herokuapp.com/"
    },
    {
      name: "Team Profile Generator",
      category: "portfolio",
      description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link:"https://github.com/Knock410/Team-Profile-Generator-"
      },
    {
      name: "Weather App",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://knock410.github.io/Weather-Dashboard-/"
      },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <div>
            <h3>{image.name}</h3>
          <a href={image.link} target="_blank" rel="noreferrer">
            <img
              src={require(`../../assets/portfolio-pics/${image.category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          </a>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default PhotoProjectDisplay;

// Add title of app to each application
//profile picture

