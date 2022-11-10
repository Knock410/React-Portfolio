import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoProjectDisplay from '../PhotoProjectDisplay';

function Display(props) {
  const { currentCategory} = props;
  return (
    <section>
       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoProjectDisplay category={currentCategory.name} />
    </section>
  );
}

export default Display;