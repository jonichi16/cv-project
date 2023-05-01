import React from 'react';
import uniqid from 'uniqid';
import SectionButton from './SectionButton';
import ExperienceItem from './ExperienceItem';

const Experience = ({
  experience,
  handleItemChange,
  handleAddItem,
  handleDeleteItem,
}) => {
  const handleAddClick = (e) => {
    const newExperience = [
      ...experience,
      {
        id: uniqid(),
        from: '',
        to: '',
        position: '',
        company: '',
        description: '',
      },
    ];

    handleAddItem(e, newExperience);
  };
  return (
    <section className='experience'>
      <h2 className='section-title uppercase'>Experience</h2>
      <hr />
      <ul className='experience-list'>
        {experience.map((exp) => (
          <ExperienceItem
            key={exp.id}
            exp={exp}
            handleItemChange={handleItemChange}
          />
        ))}
      </ul>
      <SectionButton
        member='experience'
        handleAddClick={handleAddClick}
        handleDeleteClick={handleDeleteItem}
      />
    </section>
  );
};

export default Experience;
