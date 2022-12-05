import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NameInput extends Component {
  render() {
    const { name, handleForm } = this.props;
    const charLimit = 80;

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
        {!name ? 'Você precisa fornecer um nome!' : ''}
        {name.length > charLimit
          ? `O nome não pode ter mais de ${charLimit} caracteres!`
          : ''}
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
