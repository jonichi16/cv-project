import React from 'react';

const SectionInput = ({ parent, contents, handleChange }) => {
  return contents.map((content) => {
    const Parent = parent;
    const Tag = content.tag;

    if (Tag === 'input') {
      return (
        <Parent key={content.id}>
          <Tag
            className={content.class}
            name={content.name}
            value={content.value}
            onChange={handleChange}
            placeholder={content.placeholder}
          />
        </Parent>
      );
    } else {
      return (
        <Parent key={content.id}>
          <Tag
            className={content.class}
            name={content.name}
            value={content.value}
            onChange={handleChange}
            placeholder={content.placeholder}
          ></Tag>
        </Parent>
      );
    }
  });
};

export default SectionInput;
