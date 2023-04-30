import React, { Component } from 'react';
import SectionInput from './SectionInput';
import uniqid from 'uniqid';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      contents: [
        {
          id: uniqid(),
          tag: 'textarea',
          name: 'profile',
          class: 'section-input profile',
          value: '',
          placeholder: 'Enter profile here...',
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
      <section className='profile'>
        <h2 className='section-title uppercase'>Profile</h2>
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

export default Profile;
