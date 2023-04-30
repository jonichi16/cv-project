import React from 'react';
import Details from './Details';
import Contacts from './Contacts';
import Skills from './Skills';
import Profile from './Profile';

const Resume = () => (
  <div className='resume'>
    <div className='left'>
      <Details />
      <Contacts />
      <Skills />
    </div>
    <div className='right'>
      <Profile />
    </div>
  </div>
);

export default Resume;
