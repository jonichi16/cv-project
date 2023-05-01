import React from 'react';

const EducationItem = ({ edu, handleItemChange }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    const { member } = e.target.dataset;

    handleItemChange(member, edu.id, name, value);
  };

  return (
    <li>
      <input
        type='text'
        id={`year${edu.id}`}
        name='year'
        value={edu.year}
        className='form-input year'
        data-member='education'
        onChange={handleChange}
        maxLength={4}
        placeholder='Year'
      />
      <input
        type='text'
        id={`degree${edu.id}`}
        name='degree'
        value={edu.degree}
        className='form-input degree'
        data-member='education'
        onChange={handleChange}
        placeholder='Degree'
      />
      <input
        type='text'
        id={`school${edu.id}`}
        name='school'
        value={edu.school}
        className='form-input school'
        data-member='education'
        onChange={handleChange}
        placeholder='School'
      />
    </li>
  );
};

export default EducationItem;
