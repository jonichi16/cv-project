import React from 'react';
import Details from './Details';
import Contacts from './Contacts';

const Resume = () => (
  <div className='resume'>
    <div className='left'>
      <Details />
      <Contacts />
    </div>
  </div>
);

export default Resume;
