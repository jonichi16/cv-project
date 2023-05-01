import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Contacts = ({ number, email, address, handleChange }) => {
  return (
    <section className='contacts'>
      <h2 className='section-title uppercase'>Contacts</h2>
      <hr />
      <div className='contact-item'>
        <FontAwesomeIcon icon={faPhone} style={{ color: '#f8fafc' }} />
        <input
          type='text'
          name='number'
          value={number}
          onChange={handleChange}
          className='section-input number'
          placeholder='Contact Number'
        />
      </div>
      <div className='contact-item'>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f8fafc' }} />
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          className='section-input'
          placeholder='Email'
        />
      </div>
      <div className='contact-item'>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#f8fafc' }} />
        <textarea
          name='address'
          value={address}
          onChange={handleChange}
          className='section-input address'
          placeholder='Address'
          rows='2'
        ></textarea>
      </div>
    </section>
  );
};

export default Contacts;
