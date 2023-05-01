import React from 'react';

const SkillItem = ({ skill, handleItemChange }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    const { member } = e.target.dataset;

    handleItemChange(member, skill.id, name, value);
  };

  return (
    <li>
      <input
        type='text'
        id={skill.id}
        name='skill'
        value={skill.skill}
        className='section-input skill'
        data-member='skills'
        onChange={handleChange}
        placeholder='Enter skill here...'
      />
    </li>
  );
};

export default SkillItem;
