import React from 'react';
import Details from './Details';
import Contacts from './Contacts';
import Skills from './Skills';

const Resume = () => (
  <div className='resume'>
    <div className='left'>
      <Details />
      <Contacts />
      <Skills />
    </div>
  </div>
);

export default Resume;
