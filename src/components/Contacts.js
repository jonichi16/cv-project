import React, { Component } from 'react';
import SectionInput from './SectionInput';
import uniqid from 'uniqid';

class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      contents: [
        {
          id: uniqid(),
          tag: 'input',
          name: 'contact-number',
          class: 'section-input contact-number',
          value: '',
          placeholder: 'Contact Number',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'email',
          class: 'section-input email',
          value: '',
          placeholder: 'Email',
        },
        {
          id: uniqid(),
          tag: 'input',
          name: 'address',
          class: 'section-input address',
          value: '',
          placeholder: 'Address',
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
      <section className='contacts'>
        <h2 className='section-title uppercase'>Contacts</h2>
        <hr />
        <SectionInput
          parent={'div'}
          contents={contents}
          handleChange={this.handleChange}
        />
      </section>
    );
  }
}

export default Contacts;
