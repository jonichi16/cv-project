import React, { Component } from 'react';
import SectionInput from './SectionInput';
import uniqid from 'uniqid';

class Details extends Component {
  constructor() {
    super();

    this.state = {
      parent: 'div',
      contents: [
        {
          id: uniqid(),
          tag: 'input',
          name: 'first-name',
          class: 'first-name uppercase',
          value: '',
          placeholder: 'First Name',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'last-name',
          class: 'last-name uppercase',
          value: '',
          placeholder: 'Last Name',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'occupation',
          class: 'occupation uppercase',
          value: '',
          placeholder: 'Occupation',
        },
      ],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { contents } = this.state;
    const index = contents.findIndex((c) => c.name === name);
    contents[index].value = value;
    this.setState({
      contents,
    });
  };

  render() {
    const { parent, contents } = this.state;

    return (
      <section className='details'>
        <SectionInput
          parent={parent}
          contents={contents}
          handleChange={this.handleChange}
        />
      </section>
    );
  }
}

export default Details;
