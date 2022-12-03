import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      confirmation: false,
      description: '',
      email: '',
      name: '',
    };
  }

  handleForm = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { age, confirmation, description, email, name } = this.state;
    return (
      <div>
        <h1>Formulários React</h1>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleForm}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleForm}
            />
          </label>
          <br />
          <label htmlFor="age">
            Selecione sua faixa etária:
            <select
              name="age"
              id="age"
              value={age}
              onChange={this.handleForm}
            >
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <br />
          <label htmlFor="description">
            Fale um pouco sobre você:
            <br />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={this.handleForm}
            />
          </label>
          <br />
          <label htmlFor="confirmation">
            As informações acima estão corretas?
            <input
              type="checkbox"
              name="confirmation"
              id="confirmation"
              value={confirmation}
              onChange={this.handleForm}
            />
          </label>
        </form>
      </div>
    );
  }
}
