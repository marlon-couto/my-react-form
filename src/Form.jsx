import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  handleEmail = (event) => {
   this.setState({ email: event.target.value }); 
  }

  render() {
    const { email } = this.state;
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
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={this.handleEmail}
            />
          </label>
          <br />
          <label htmlFor="age">
            Selecione sua faixa etária:
            <select
              name="age"
              id="age"
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
            />
          </label>
        </form>
      </div>
    );
  }
}
