import React, { Component } from 'react';
import SectionInput from './SectionInput';
import SectionButton from './SectionButton';
import uniqid from 'uniqid';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    const { contents } = this.state;
    const index = contents.findIndex((c) => c.id === id);
    contents[index].value = value;
    this.setState({
      contents,
    });
  };

  handleAddClick = (e) => {
    e.preventDefault();

    const content = {
      id: uniqid(),
      key: uniqid(),
      tag: 'input',
      name: 'skill',
      class: 'section-input skill',
      value: '',
      placeholder: 'Enter skill here...',
    };

    const { contents } = this.state;
    const newContent = [...contents, content];

    this.setState({
      contents: newContent,
    });
  };

  handleDeleteClick = (e) => {
    e.preventDefault();

    const { contents } = this.state;
    const newContent = contents.slice(0, -1);

    this.setState({
      contents: newContent,
    });
  };

  render() {
    const { contents } = this.state;

    return (
      <section className='skills'>
        <h2 className='section-title uppercase'>Skills</h2>
        <hr />
        <ul className='skills-list'>
          <SectionInput
            parent={'li'}
            contents={contents}
            handleChange={this.handleChange}
          />
        </ul>
        <SectionButton
          handleAddClick={this.handleAddClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </section>
    );
  }
}

export default Skills;
