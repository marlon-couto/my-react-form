import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PictureInput extends Component {
  render() {
    const { picture, handleForm } = this.props;
    return (
      <label htmlFor="picture">
        <input
          type="file"
          name="picture"
          id="picture"
          value={picture}
          onChange={handleForm}
        />
      </label>
    );
  }
}

PictureInput.propTypes = {
  picture: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
