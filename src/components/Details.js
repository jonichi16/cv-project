import React, { Component } from 'react';
import SectionInput from './SectionInput';
import uniqid from 'uniqid';

class Details extends Component {
  constructor() {
    super();

    this.state = {
      contents: [
        {
          id: uniqid(),
          tag: 'input',
          name: 'firstName',
          value: '',
          placeholder: 'First Name',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'lastName',
          value: '',
          placeholder: 'Last Name',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'occupation',
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
    const { contents } = this.state;

    return (
      <section className='details'>
        <SectionInput contents={contents} handleChange={this.handleChange} />
      </section>
    );
  }
}

export default Details;
