import React from 'react';

const Contacts = ({ number, email, address, handleChange }) => {
  return (
    <section className='contacts'>
      <h2 className='section-title uppercase'>Contacts</h2>
      <hr />
      <input
        type='text'
        name='number'
        value={number}
        onChange={handleChange}
        className='section-input number'
        placeholder='Contact Number'
      />
      <input
        type='text'
        name='email'
        value={email}
        onChange={handleChange}
        className='section-input email'
        placeholder='Email'
      />
      <textarea
        name='address'
        value={address}
        onChange={handleChange}
        className='section-input address'
        placeholder='Address'
        rows='2'
      ></textarea>
    </section>
  );
};

export default Contacts;
