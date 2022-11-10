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

// (Images are not displaying)
// -If you're getting compilation errors or having trouble getting some props to show up, you may want to trace your props as they're passed down. Start from App.js and follow any prop that isn't displaying properly. And remember that props only go down the component tree. Now would also be a great time to check the links in Nav to make sure they cause the photos to get updated.