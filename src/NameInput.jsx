import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NameInput extends Component {
  render() {
    const { name, handleForm } = this.props;
    return (
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleForm}
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
