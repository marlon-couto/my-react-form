import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SelectInput extends Component {
  render() {
    const { age, handleForm } = this.props;
    return (
      <label htmlFor="age">
        Selecione sua faixa etária:
        <select
          name="age"
          id="age"
          value={age}
          onChange={handleForm}
        >
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  age: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
};
