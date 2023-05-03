import React from 'react';

const Image = ({ image }) => {
  if (image) {
    return <img src='image' alt='Resumer owner' className='profile-image' />;
  } else {
    return <div className='profile-image'></div>;
  }
};

export default Image;
