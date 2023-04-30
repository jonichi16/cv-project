import React from 'react';

const SectionButton = ({ handleAddClick, handleDeleteClick }) => {
  return (
    <div className='section-btn'>
      <button className='btn uppercase' onClick={handleAddClick}>
        Add
      </button>
      <button className='btn uppercase' onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default SectionButton;
