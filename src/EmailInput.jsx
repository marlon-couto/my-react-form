import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class EmailInput extends Component {
  render() {
    const { email, handleForm } = this.props;
    return (
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleForm}
        />
      </label>
    );
  }
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
