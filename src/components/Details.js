import React from 'react';

const Details = ({ firstName, lastName, occupation, handleChange }) => {
  return (
    <section className='details'>
      <input
        type='text'
        name='firstName'
        value={firstName}
        onChange={handleChange}
        className='first-name uppercase'
        placeholder='First Name'
      />
      <input
        type='text'
        name='lastName'
        value={lastName}
        onChange={handleChange}
        className='last-name uppercase'
        placeholder='Last Name'
      />
      <input
        type='text'
        name='occupation'
        value={occupation}
        onChange={handleChange}
        className='occupation uppercase'
        placeholder='Occupation'
      />
    </section>
  );
};

export default Details;
