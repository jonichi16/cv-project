import React, { Component } from 'react';

class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      contactNumber: '',
      email: '',
      address: '',
    };
  }

  handleContactNumber = (e) => {
    this.setState({
      contactNumber: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  render() {
    return <div>Contacts</div>;
  }
}

export default Contacts;
