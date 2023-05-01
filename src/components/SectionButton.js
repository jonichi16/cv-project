import React from 'react';

const SectionButton = ({ member, handleAddClick, handleDeleteClick }) => {
  return (
    <div className='section-btn'>
      <button
        className='btn uppercase'
        data-member={member}
        onClick={handleAddClick}
      >
        Add
      </button>
      <button
        className='btn uppercase'
        data-member={member}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};

export default SectionButton;
