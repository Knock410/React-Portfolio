import React from 'react';
import resumeImage from '../../assets/resumeImage/resumeImage.jpg'
import resume from '../../assets/resume/resume1.pdf'

const Resume = () => {
    return (
      <div>
        <a download={resume} href={resumeImage}>
          <img src={resumeImage} alt="resume" />
        </a>
      </div>
    );
}

export default Resume;