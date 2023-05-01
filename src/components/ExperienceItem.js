import React from 'react';

const ExperienceItem = ({ exp, handleItemChange }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    const { member } = e.target.dataset;

    handleItemChange(member, exp.id, name, value);
  };

  return (
    <li>
      <div className='work-details'>
        <div className='exp-year'>
          <input
            type='text'
            id={`from${exp.id}`}
            name='from'
            value={exp.from}
            className='form-input from'
            data-member='experience'
            onChange={handleChange}
            maxLength='4'
            placeholder='From'
          />
          <span className='dash'>&ndash;</span>
          <input
            type='text'
            id={`to${exp.id}`}
            name='to'
            value={exp.to}
            className='form-input exp'
            data-member='experience'
            onChange={handleChange}
            placeholder='To'
          />
        </div>
        <input
          type='text'
          id={`position${exp.id}`}
          name='position'
          value={exp.position}
          className='form-input position'
          data-member='experience'
          onChange={handleChange}
          placeholder='Position'
        />
        <input
          type='text'
          id={`company${exp.id}`}
          name='company'
          value={exp.company}
          className='form-input company'
          data-member='experience'
          onChange={handleChange}
          placeholder='Company'
        />
      </div>
      <textarea
        name='description'
        id={`description${exp.id}`}
        rows='2'
        value={exp.description}
        className='form-input description'
        data-member='experience'
        onChange={handleChange}
        placeholder='Enter description here...'
      ></textarea>
    </li>
  );
};

export default ExperienceItem;
