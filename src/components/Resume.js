import React, { Component } from 'react';
import Details from './Details';
import Contacts from './Contacts';
import Skills from './Skills';
import Profile from './Profile';
import Experience from './Experience';

class Resume extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        firstName: '',
        lastName: '',
        occupation: '',
        number: '',
        email: '',
        address: '',
        skills: [],
        profile: '',
        experience: [],
        education: [],
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      data: { ...prevState.data, [name]: value },
    }));
  };

  handleItemChange = (member, id, name, value) => {
    const dataMember = this.state.data[member];

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [member]: dataMember.map((i) =>
          i.id === id ? { ...i, [name]: value } : i
        ),
      },
    }));
  };

  handleAddItem = (e, value) => {
    e.preventDefault();

    const { member } = e.target.dataset;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [member]: value,
      },
    }));
  };

  handleDeleteItem = (e) => {
    e.preventDefault();

    const { member } = e.target.dataset;

    const dataMember = this.state.data[member];
    const newValue = dataMember.slice(0, -1);

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [member]: newValue,
      },
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div className='resume'>
        <div className='left'>
          <Details
            firstName={data.firstName}
            lastName={data.lastName}
            occupation={data.occupation}
            handleChange={this.handleChange}
          />
          <Contacts
            number={data.number}
            email={data.email}
            address={data.address}
            handleChange={this.handleChange}
          />
          <Skills
            skills={data.skills}
            handleItemChange={this.handleItemChange}
            handleAddItem={this.handleAddItem}
            handleDeleteItem={this.handleDeleteItem}
          />
        </div>
        <div className='right'>
          <Profile profile={data.profile} handleChange={this.handleChange} />
          <Experience
            experience={data.experience}
            handleItemChange={this.handleItemChange}
            handleAddItem={this.handleAddItem}
            handleDeleteItem={this.handleDeleteItem}
          />
        </div>
      </div>
    );
  }
}

export default Resume;
