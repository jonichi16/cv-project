import React from 'react';

const Profile = ({ profile, handleChange }) => {
  return (
    <section className='profile'>
      <h2 className='section-title uppercase'>Profile</h2>
      <hr />
      <textarea
        name='profile'
        rows='5'
        value={profile}
        onChange={handleChange}
        className='section-input profile'
        placeholder='Enter profile here...'
      ></textarea>
    </section>
  );
};

export default Profile;
