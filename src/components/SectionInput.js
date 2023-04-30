import React from 'react';

const SectionInput = ({ contents, handleChange }) => {
  return contents.map((content) => {
    const Tag = content.tag;

    if (Tag === 'input') {
      return (
        <div className='input' key={content.id}>
          <Tag
            className={content.class}
            name={content.name}
            value={content.value}
            onChange={handleChange}
            placeholder={content.placeholder}
          />
        </div>
      );
    } else {
      return (
        <div className='input' key={content.id}>
          <Tag
            className={content.class}
            name={content.name}
            value={content.value}
            onChange={handleChange}
            placeholder={content.placeholder}
          ></Tag>
        </div>
      );
    }
  });
};

export default SectionInput;
