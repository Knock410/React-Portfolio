import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
//array of navigation components in an array so that it can be used elsewhere within the application



function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;