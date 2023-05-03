import React from 'react';
import Image from './Image';

const Details = ({ image, firstName, lastName, occupation, handleChange }) => {
  return (
    <section className='details'>
      <div className='image'>
        <Image image={image} />
        <input
          type='file'
          className='image-input'
          name='image'
          accept='image/*'
        />
      </div>
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
