import React, { useState } from 'react';

//component for displaying photos
const PhotoProjectDisplay = ({ category }) => {

    const [photos] = useState([
        {
          name: 'Calendar',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Note Taker',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Quiz',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Take Note',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Team Profile Generator',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Weather App',
          category: 'portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
            //   i might need to be subsitituted for a value and not index
                src={require(`../../assets/portfolio-pics/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoProjectDisplay;