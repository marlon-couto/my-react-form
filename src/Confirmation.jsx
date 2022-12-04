import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Confirmation extends Component {
  render() {
    const { confirmation, handleForm } = this.props;
    return (
      <label htmlFor="confirmation">
        As informações acima estão corretas?
        <input
          type="checkbox"
          name="confirmation"
          id="confirmation"
          value={confirmation}
          onChange={handleForm}
        />
      </label>
    );
  }
}

Confirmation.propTypes = {
  confirmation: PropTypes.bool.isRequired,
  handleForm: PropTypes.func.isRequired,
};
