import React from 'react';
import SectionButton from './SectionButton';
import SkillItem from './SkillItem';
import uniqid from 'uniqid';

const Skills = ({
  skills,
  handleItemChange,
  handleAddItem,
  handleDeleteItem,
}) => {
  const handleAddClick = (e) => {
    const newSkill = [...skills, { id: uniqid(), skill: '' }];

    handleAddItem(e, newSkill);
  };

  return (
    <section className='skills'>
      <h2 className='section-title uppercase'>Skills</h2>
      <hr />
      <ul className='skills-list'>
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            skill={skill}
            handleItemChange={handleItemChange}
          />
        ))}
      </ul>
      <SectionButton
        member='skills'
        handleAddClick={handleAddClick}
        handleDeleteClick={handleDeleteItem}
      />
    </section>
  );
};

export default Skills;
