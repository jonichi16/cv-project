import React from 'react';
import uniqid from 'uniqid';
import SectionButton from './SectionButton';
import EducationItem from './EducationItem';

const Education = ({
  education,
  handleItemChange,
  handleAddItem,
  handleDeleteItem,
}) => {
  const handleAddClick = (e) => {
    const newEducation = [
      ...education,
      {
        id: uniqid(),
        year: '',
        degree: '',
        school: '',
      },
    ];

    handleAddItem(e, newEducation);
  };

  return (
    <section className='education'>
      <h2 className='section-title uppercase'>Education</h2>
      <hr />
      <ul className='education-list'>
        {education.map((edu) => (
          <EducationItem
            key={edu.id}
            edu={edu}
            handleItemChange={handleItemChange}
          />
        ))}
      </ul>
      <SectionButton
        member='education'
        handleAddClick={handleAddClick}
        handleDeleteClick={handleDeleteItem}
      />
    </section>
  );
};

export default Education;
