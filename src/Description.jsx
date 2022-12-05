import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {
  render() {
    const { description, handleForm } = this.props;
    return (
      <label htmlFor="description">
        Fale um pouco sobre você:
        <br />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleForm}
        />
        {!description ? 'Forneça uma descrição sobre você!' : ''}
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
